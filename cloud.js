/* Hassanfit cloud layer: Firebase Auth + Firestore, loaded from Google's CDN on demand.
   The app works offline and without an account; this file is only used for sign-in and coach sync. */
const cfg = window.FIREBASE_CONFIG || {};
const configured = !!(cfg.apiKey && cfg.projectId && !/PASTE|YOUR/i.test(cfg.apiKey + cfg.projectId));
const BASE = 'https://www.gstatic.com/firebasejs/10.14.1/';
let _sdk = null;

function sdk() {
  if (_sdk) return _sdk;
  _sdk = (async () => {
    const [app, auth, fs] = await Promise.all([
      import(BASE + 'firebase-app.js'),
      import(BASE + 'firebase-auth.js'),
      import(BASE + 'firebase-firestore.js')
    ]);
    const a = app.initializeApp(cfg);
    return { auth: auth.getAuth(a), db: fs.getFirestore(a), A: auth, F: fs };
  })();
  _sdk.catch(() => { _sdk = null; });
  return _sdk;
}

const clean = o => JSON.parse(JSON.stringify(o)); /* Firestore rejects undefined values */

const Cloud = {
  configured,

  async onAuth(cb) {
    if (!configured) { cb(null); return () => {}; }
    try {
      const s = await sdk();
      return s.A.onAuthStateChanged(s.auth, u => cb(u ? { uid: u.uid, email: u.email } : null));
    } catch (e) { cb(null); return () => {}; }
  },
  async signUp(email, pw) {
    const s = await sdk();
    const r = await s.A.createUserWithEmailAndPassword(s.auth, email, pw);
    return { uid: r.user.uid, email: r.user.email };
  },
  async signIn(email, pw) {
    const s = await sdk();
    const r = await s.A.signInWithEmailAndPassword(s.auth, email, pw);
    return { uid: r.user.uid, email: r.user.email };
  },
  async signOut() { const s = await sdk(); await s.A.signOut(s.auth); },
  async reset(email) { const s = await sdk(); await s.A.sendPasswordResetEmail(s.auth, email); },

  async profile(uid) {
    const s = await sdk();
    const d = await s.F.getDoc(s.F.doc(s.db, 'users', uid));
    return d.exists() ? d.data() : null;
  },
  async setProfile(uid, data) {
    const s = await sdk();
    await s.F.setDoc(s.F.doc(s.db, 'users', uid), clean(data), { merge: true });
  },

  async coachByCode(code) {
    const s = await sdk();
    const d = await s.F.getDoc(s.F.doc(s.db, 'coachCodes', code));
    return d.exists() ? d.data() : null;
  },
  async createCode(code, coachId, name) {
    const s = await sdk();
    await s.F.setDoc(s.F.doc(s.db, 'coachCodes', code), clean({ coachId, name }));
  },

  async writeChunk(uid, id, obj) {
    const s = await sdk();
    await s.F.setDoc(s.F.doc(s.db, 'users', uid, 'data', id), clean(obj));
  },
  async deleteChunk(uid, id) {
    const s = await sdk();
    await s.F.deleteDoc(s.F.doc(s.db, 'users', uid, 'data', id));
  },
  async readChunks(uid) {
    const s = await sdk();
    const snap = await s.F.getDocs(s.F.collection(s.db, 'users', uid, 'data'));
    const out = {};
    snap.forEach(d => { out[d.id] = d.data(); });
    return out;
  },

  async watchClients(coachId, cb) {
    const s = await sdk();
    const q = s.F.query(s.F.collection(s.db, 'users'), s.F.where('coachId', '==', coachId));
    return s.F.onSnapshot(q, snap => cb(snap.docs.map(d => Object.assign({ uid: d.id }, d.data()))), () => cb([]));
  },
  async watchMessages(uid, cb) {
    const s = await sdk();
    const q = s.F.query(s.F.collection(s.db, 'users', uid, 'messages'), s.F.orderBy('ts'));
    return s.F.onSnapshot(q, snap => cb(snap.docs.map(d => Object.assign({ id: d.id }, d.data()))), () => cb([]));
  },
  async sendMessage(uid, msg) {
    const s = await sdk();
    await s.F.addDoc(s.F.collection(s.db, 'users', uid, 'messages'), clean(msg));
  }
};

window.Cloud = Cloud;
window.dispatchEvent(new Event('cloud-ready'));
