/* Hassanfit food & drink database.
   One line per item: category|Arabic name|English name|kcal|protein|carbs|fat|servings
   All nutrition values are per 100 g (per 100 ml for category "drk"). Cooked weights unless the name says raw/dry.
   servings (optional): ArabicLabel:EnglishLabel:grams,... */
window.FOODDB = `
# ---- meat
meat|لحم بقري مفروم مطبوخ|Ground beef, cooked|250|26|0|15
meat|ستيك بقري سيرلوين مشوي|Beef sirloin steak, grilled|206|29|0|9.5
meat|فيليه بقري مشوي|Beef tenderloin, grilled|218|27|0|12
meat|لحم بقري مسلوق أو مطبوخ|Beef, stewed|232|28|0|13
meat|لحم عجل كستليتة مشوية|Veal cutlet, cooked|196|31|0|7
meat|لحم ضاني مشوي|Lamb, roasted|258|25|0|17
meat|ريش ضاني مشوية|Lamb chops, grilled|282|24|0|20
meat|كفتة مشوية|Kofta, grilled|245|20|3|17|قطعة:Piece:50
meat|برجر لحم مشوي (قرص فقط)|Beef burger patty, grilled|250|26|0|16|قرص:Patty:110
meat|كبدة بقري مطبوخة|Beef liver, cooked|175|27|4|5
meat|كبدة فراخ مطبوخة|Chicken liver, cooked|167|24|1|6.5
meat|سجق بقري مطبوخ|Beef sausage, cooked|330|18|2|28
meat|بسطرمة|Basturma (cured beef)|170|28|1|6
meat|لانشون بقري|Beef luncheon meat|200|13|3|15|شريحة:Slice:20
meat|مارتديلا|Mortadella|311|16.6|3|25.9|شريحة:Slice:25
meat|هوت دوج سجق|Hot dog sausage|290|10|4|26|قطعة:Piece:50
meat|لحم مجفف بيف جيركي|Beef jerky|410|33|11|26
# ---- poultry
poul|صدر فراخ مشوي بدون جلد|Chicken breast, grilled, skinless|165|31|0|3.6|صدر:Breast:170
poul|صدر فراخ مسلوق|Chicken breast, boiled|151|29|0|3.2|صدر:Breast:170
poul|فراخ مشوية بالجلد|Roast chicken with skin|239|27|0|14
poul|وراك فراخ مشوية بدون جلد|Chicken thigh, skinless, roasted|209|26|0|10.9
poul|وراك فراخ مشوية بالجلد|Chicken thigh with skin, roasted|247|24|0|16
poul|دبوس فراخ مشوي|Chicken drumstick, roasted|172|28|0|5.7
poul|جناح فراخ مشوي|Chicken wings, roasted|290|27|0|19.5
poul|فراخ مقلية مبهرة|Fried chicken, breaded|290|21|9|18
poul|شيش طاووق|Shish tawook|170|27|2|5.5
poul|بانيه فراخ|Chicken pané (breaded cutlet)|250|20|14|13
poul|ناجتس فراخ|Chicken nuggets|296|15|18|18|حبة:Nugget:18
poul|كرسبي فراخ استربس|Crispy chicken strips|270|18|16|15
poul|صدر ديك رومي مشوي|Turkey breast, roasted|135|30|0|1
poul|ديك رومي مفروم مطبوخ|Ground turkey, cooked|203|27|0|10
poul|ديك رومي مدخن شرائح|Smoked turkey slices|104|17|4|2|شريحة:Slice:20
poul|بط مشوي|Duck, roasted|337|19|0|28
poul|حمام مشوي|Pigeon (squab), roasted|294|18|0|24
poul|أرنب مطبوخ|Rabbit, cooked|173|33|0|3.5
# ---- fish and seafood
fish|سلمون مشوي|Salmon, baked|206|22|0|12
fish|تونة معلبة في مياه|Tuna, canned in water|116|26|0|0.8|علبة صغيرة:Small can:140
fish|تونة معلبة في زيت (مصفاة)|Tuna, canned in oil, drained|198|29|0|8|علبة صغيرة:Small can:140
fish|سردين معلب في زيت|Sardines, canned in oil|208|25|0|11
fish|ماكريل مشوي|Mackerel, grilled|262|24|0|18
fish|بلطي مشوي|Tilapia, grilled|128|26|0|2.7
fish|بلطي مقلي|Tilapia, fried|200|22|6|10
fish|بوري مشوي|Grey mullet, grilled|150|25|0|5
fish|دنيس مشوي|Sea bream, grilled|150|24|0|5
fish|قاروص مشوي|Sea bass, grilled|124|24|0|2.6
fish|فيليه سمك أبيض (قد) مخبوز|White fish fillet (cod), baked|105|23|0|0.9
fish|جمبري مسلوق|Shrimp, boiled|99|24|0.2|0.3
fish|جمبري مقلي بالدقيق|Shrimp, fried and breaded|242|20|11|13
fish|كابوريا مسلوقة|Crab, cooked|97|19|0|1.5
fish|كاليماري مقلي|Squid (calamari), fried|175|18|8|7.5
fish|أخطبوط مسلوق|Octopus, boiled|164|30|4.4|2.1
fish|رنجة مدخنة|Smoked herring (renga)|217|25|0|12
fish|فسيخ|Fesikh (salted fermented mullet)|165|25|0|7
# ---- eggs
egg|بيض مسلوق|Egg, boiled|155|13|1.1|11|بيضة:Egg:50
egg|بيض مقلي|Egg, fried|196|14|0.8|15|بيضة:Egg:46
egg|بيض مخفوق سكرامبل|Scrambled eggs|149|10|1.6|11
egg|أومليت|Omelet|154|11|0.6|12|أومليت من بيضتين:Two-egg omelet:120
egg|بياض البيض|Egg white|52|11|0.7|0.2|بياضة:White:33
egg|صفار البيض|Egg yolk|322|16|3.6|27|صفار:Yolk:17
egg|عجة بالخضار|Vegetable omelet|125|8|3|9
# ---- dairy
dairy|زبادي كامل الدسم|Plain yogurt, whole milk|61|3.5|4.7|3.3|علبة:Cup:170
dairy|زبادي خالي الدسم|Plain yogurt, nonfat|56|5.7|7.7|0.2|علبة:Cup:170
dairy|زبادي يوناني 0% دسم|Greek yogurt, 0% fat|59|10|3.6|0.4|علبة:Cup:170
dairy|زبادي يوناني كامل الدسم|Greek yogurt, whole milk|97|9|4|5|علبة:Cup:170
dairy|زبادي بالفواكه|Fruit yogurt|99|3.7|18|1.4|علبة:Cup:140
dairy|لبن رايب|Rayeb milk|62|3.4|4.8|3.3
dairy|جبنة قريش|Cottage cheese|98|11|3.4|4.3
dairy|جبنة قريش قليلة الدسم|Low-fat cottage cheese|72|12|2.7|1
dairy|جبنة بيضاء|White cheese (feta style)|264|14|4|21|مكعب:Cube:30
dairy|جبنة بيضاء قليلة الدسم|Light white cheese|150|18|3|7
dairy|جبنة رومي|Roumy (Romano style) cheese|387|32|4|27|شريحة:Slice:20
dairy|جبنة موتزاريلا|Mozzarella cheese|300|22|2.2|22.4
dairy|جبنة موتزاريلا قليلة الدسم|Part-skim mozzarella|254|24|2.8|16
dairy|جبنة شيدر|Cheddar cheese|403|25|1.3|33|شريحة:Slice:20
dairy|جبنة مثلثات|Processed cheese triangles|260|10|6|21|قطعة:Triangle:18
dairy|جبنة كريمي كريم تشيز|Cream cheese|342|6|4|34
dairy|جبنة حلوم|Halloumi cheese|321|21|2|25
dairy|جبنة ريكوتا|Ricotta cheese|174|11|3|13
dairy|جبنة بارميزان|Parmesan cheese|431|38|4|29
dairy|لبنة|Labneh|160|7|4|13
dairy|قشطة|Qishta (clotted cream)|350|3|4|35
dairy|كريمة خفق|Heavy cream|340|2.8|2.8|36
dairy|لبن مكثف محلى|Sweetened condensed milk|321|8|54|8.7
dairy|لبن مبخر|Evaporated milk|134|6.8|10|7.6
dairy|لبن بودرة كامل الدسم|Whole milk powder|496|26|38|27|معلقة:Tablespoon:8
dairy|سلطة زبادي بالخيار|Yogurt and cucumber salad|60|3|5|3
# ---- grains and bread
grain|عيش بلدي|Baladi bread|265|9.5|54|1.5|رغيف:Loaf:90
grain|عيش فينو|Fino bread|275|9|54|2.5|رغيف:Roll:55
grain|عيش شامي|Shami bread (pita)|275|9|56|1.2|رغيف:Loaf:60
grain|توست أبيض|White toast bread|266|8|49|3.3|شريحة:Slice:28
grain|توست أسمر قمح كامل|Whole wheat toast|247|13|41|3.4|شريحة:Slice:30
grain|باجيت|Baguette|270|9|56|1
grain|أرز أبيض مسلوق|White rice, cooked|130|2.7|28|0.3|كوب:Cup:160
grain|أرز بسمتي مسلوق|Basmati rice, cooked|121|3.5|25|0.4|كوب:Cup:160
grain|أرز بني مسلوق|Brown rice, cooked|112|2.3|24|0.8|كوب:Cup:160
grain|أرز بالشعرية مصري|Egyptian rice with vermicelli|170|3|31|3.5|كوب:Cup:160
grain|مكرونة مسلوقة|Pasta, cooked|158|5.8|31|0.9|كوب:Cup:140
grain|مكرونة قمح كامل مسلوقة|Whole wheat pasta, cooked|124|5.3|26.5|0.5|كوب:Cup:140
grain|شعرية مسلوقة|Vermicelli, cooked|140|4.5|28|1
grain|شوفان جاف|Oats, dry|389|16.9|66|6.9|معلقة كبيرة:Tablespoon:10
grain|شوفان مطبوخ بالمياه|Oatmeal, cooked with water|71|2.5|12|1.5|طبق:Bowl:250
grain|كورن فليكس|Corn flakes|357|7.5|84|0.4|كوب:Cup:30
grain|جرانولا|Granola|471|10|64|20
grain|موسلي|Muesli|340|10|66|6
grain|بطاطس مسلوقة|Potato, boiled|87|1.9|20|0.1|حبة:Medium potato:170
grain|بطاطس مشوية في الفرن|Baked potato|93|2.5|21|0.1|حبة:Medium potato:170
grain|بطاطس مهروسة بيوريه|Mashed potatoes|113|2|17|4.2
grain|بطاطا مشوية|Sweet potato, baked|90|2|21|0.2|حبة:Medium:130
grain|ذرة مسلوقة|Corn, boiled|96|3.4|21|1.5
grain|فشار بدون زيت|Popcorn, air-popped|387|13|78|4.5
grain|كينوا مطبوخة|Quinoa, cooked|120|4.4|21|1.9
grain|برغل مطبوخ|Bulgur, cooked|83|3.1|18.6|0.2
grain|فريك مطبوخ|Freekeh, cooked|140|5.6|28|1
grain|كسكسي مطبوخ|Couscous, cooked|112|3.8|23|0.2
grain|دقيق أبيض|White flour|364|10|76|1
grain|دقيق قمح كامل|Whole wheat flour|340|13.2|72|2.5
grain|بسكويت ماري|Marie biscuit|430|7|75|11|قطعة:Biscuit:7
grain|كراكرز|Crackers|430|9|68|14
grain|بسكويت شوفان|Oat cookies|450|6|65|18
# ---- legumes
leg|فول مدمس مطبوخ سادة|Ful medames, plain|110|8|19|0.4|طبق:Plate:200
leg|فول مدمس بالزيت والليمون|Ful medames with oil and lemon|150|7|17|6|طبق:Plate:200
leg|حمص مسلوق|Chickpeas, boiled|164|8.9|27|2.6
leg|عدس مسلوق|Lentils, boiled|116|9|20|0.4
leg|فاصوليا بيضاء مسلوقة|White beans, boiled|139|9.7|25|0.4
leg|فاصوليا حمراء مسلوقة|Kidney beans, boiled|127|8.7|22.8|0.5
leg|لوبيا مسلوقة|Black-eyed peas, boiled|116|7.7|21|0.5
leg|بسلة مسلوقة|Green peas, boiled|84|5.4|15.6|0.2
leg|حمص بالطحينة|Hummus|166|8|14|10|معلقة كبيرة:Tablespoon:15
leg|بابا غنوج|Baba ghanoush|130|3|8|10
# ---- vegetables
veg|طماطم|Tomato|18|0.9|3.9|0.2|حبة:Medium:120
veg|خيار|Cucumber|15|0.7|3.6|0.1|حبة:Medium:100
veg|خس|Lettuce|15|1.4|2.9|0.2
veg|جرجير|Arugula (rocket)|25|2.6|3.7|0.7
veg|جزر|Carrot|41|0.9|9.6|0.2|حبة:Medium:60
veg|كوسة|Zucchini|17|1.2|3.1|0.3
veg|باذنجان|Eggplant|25|1|6|0.2
veg|فلفل رومي|Bell pepper|31|1|6|0.3|حبة:Medium:120
veg|فلفل حار|Chili pepper|40|1.9|8.8|0.4
veg|بصل|Onion|40|1.1|9.3|0.1|حبة:Medium:110
veg|ثوم|Garlic|149|6.4|33|0.5|فص:Clove:3
veg|بروكلي مسلوق|Broccoli, boiled|35|2.4|7.2|0.4
veg|قرنبيط|Cauliflower|25|1.9|5|0.3
veg|سبانخ مطبوخة|Spinach, cooked|23|3|3.8|0.3
veg|كرنب|Cabbage|25|1.3|5.8|0.1
veg|فاصوليا خضراء|Green beans|31|1.8|7|0.2
veg|بامية|Okra|33|1.9|7.5|0.2
veg|كرفس|Celery|14|0.7|3|0.2
veg|فجل|Radish|16|0.7|3.4|0.1
veg|بنجر مسلوق|Beetroot, boiled|44|1.7|10|0.2
veg|قرع عسلي|Pumpkin|26|1|6.5|0.1
veg|ذرة حلوة معلبة|Canned sweet corn|81|2.5|18|1
veg|زيتون أخضر|Green olives|145|1|3.8|15
veg|زيتون أسود|Black olives|115|0.8|6|10.7
veg|مخلل خيار|Pickled cucumber|11|0.3|2.3|0.2
veg|مشروم|Mushrooms|22|3.1|3.3|0.3
veg|طماطم مجففة|Sun-dried tomatoes|258|14|56|3
veg|معجون طماطم|Tomato paste|82|4.3|19|0.5
veg|صلصة طماطم|Tomato sauce|29|1.3|6.4|0.2
veg|سلطة خضراء|Green salad|20|1|3|0.5
# ---- fruit
fruit|تفاح|Apple|52|0.3|14|0.2|حبة:Medium:180
fruit|موز|Banana|89|1.1|23|0.3|حبة:Medium:118
fruit|برتقال|Orange|47|0.9|12|0.1|حبة:Medium:130
fruit|يوسفي|Mandarin|53|0.8|13|0.3|حبة:Medium:90
fruit|جريب فروت|Grapefruit|42|0.8|11|0.1
fruit|ليمون|Lemon|29|1.1|9|0.3
fruit|فراولة|Strawberries|32|0.7|7.7|0.3
fruit|عنب|Grapes|69|0.7|18|0.2
fruit|بطيخ|Watermelon|30|0.6|7.6|0.2
fruit|كانتالوب شمام|Cantaloupe melon|34|0.8|8.2|0.2
fruit|مانجو|Mango|60|0.8|15|0.4
fruit|أناناس|Pineapple|50|0.5|13|0.1
fruit|خوخ|Peach|39|0.9|10|0.3|حبة:Medium:150
fruit|مشمش|Apricot|48|1.4|11|0.4|حبة:Medium:35
fruit|كمثرى|Pear|57|0.4|15|0.1|حبة:Medium:180
fruit|برقوق|Plum|46|0.7|11|0.3
fruit|تين طازج|Fresh figs|74|0.8|19|0.3|حبة:Medium:50
fruit|تين مجفف|Dried figs|249|3.3|64|0.9
fruit|رمان|Pomegranate|83|1.7|19|1.2
fruit|كيوي|Kiwi|61|1.1|15|0.5|حبة:Medium:75
fruit|جوافة|Guava|68|2.6|14|1|حبة:Medium:100
fruit|كرز|Cherries|63|1.1|16|0.2
fruit|توت أزرق|Blueberries|57|0.7|14|0.3
fruit|تمر|Dates|277|1.8|75|0.2|حبة:Date:24
fruit|زبيب|Raisins|299|3.1|79|0.5
fruit|قمر الدين مجفف|Dried apricots|241|3.4|63|0.5
fruit|أفوكادو|Avocado|160|2|8.5|14.7|حبة:Half:100
fruit|جوز هند طازج|Fresh coconut|354|3.3|15|33
fruit|تين شوكي|Prickly pear|41|0.7|9.6|0.5
# ---- nuts and seeds
nut|لوز|Almonds|579|21|22|50|حبة:Almond:1.2
nut|جوز عين جمل|Walnuts|654|15|14|65
nut|كاجو|Cashews|553|18|30|44
nut|فستق|Pistachios|560|20|28|45
nut|بندق|Hazelnuts|628|15|17|61
nut|فول سوداني|Peanuts|567|26|16|49
nut|زبدة فول سوداني|Peanut butter|588|25|20|50|معلقة كبيرة:Tablespoon:16
nut|مكسرات مشكلة|Mixed nuts|607|20|21|54
nut|بذور الشيا|Chia seeds|486|17|42|31|معلقة كبيرة:Tablespoon:12
nut|بذور الكتان|Flaxseed|534|18|29|42
nut|لب قرع|Pumpkin seeds|559|30|11|49
nut|لب عباد الشمس|Sunflower seeds|584|21|20|51
nut|سمسم|Sesame seeds|573|18|23|50
nut|طحينة|Tahini|595|17|21|54|معلقة كبيرة:Tablespoon:15
nut|جوز هند مبشور|Desiccated coconut|660|6.9|24|65
# ---- oils and fats
oil|زيت زيتون|Olive oil|884|0|0|100|معلقة كبيرة:Tablespoon:13.5
oil|زيت ذرة|Corn oil|884|0|0|100|معلقة كبيرة:Tablespoon:13.5
oil|زيت عباد الشمس|Sunflower oil|884|0|0|100|معلقة كبيرة:Tablespoon:13.5
oil|زيت جوز الهند|Coconut oil|892|0|0|99|معلقة كبيرة:Tablespoon:13.5
oil|سمنة نباتية|Vegetable shortening|884|0|0|100|معلقة كبيرة:Tablespoon:13
oil|سمن بلدي|Ghee (samn baladi)|876|0|0|99.5|معلقة كبيرة:Tablespoon:13
oil|زبدة|Butter|717|0.9|0.1|81|معلقة كبيرة:Tablespoon:14
oil|مارجرين|Margarine|717|0.2|0.7|80|معلقة كبيرة:Tablespoon:14
oil|مايونيز|Mayonnaise|680|1|0.6|75|معلقة كبيرة:Tablespoon:14
oil|مايونيز لايت|Light mayonnaise|275|0.6|12|26|معلقة كبيرة:Tablespoon:14
# ---- sweets and snacks
swt|سكر أبيض|White sugar|387|0|100|0|معلقة صغيرة:Teaspoon:4
swt|عسل نحل|Honey|304|0.3|82|0|معلقة كبيرة:Tablespoon:21
swt|عسل أسود دبس|Molasses (black honey)|290|0|75|0.1|معلقة كبيرة:Tablespoon:20
swt|مربى|Jam|250|0.4|65|0.1|معلقة كبيرة:Tablespoon:20
swt|شوكولاتة بالحليب|Milk chocolate|535|7.7|59|30
swt|شوكولاتة داكنة 70%|Dark chocolate 70%|598|7.8|46|43
swt|كاكاو بودرة|Cocoa powder|228|19.6|58|13.7|معلقة كبيرة:Tablespoon:5
swt|كريمة البندق نوتيلا|Chocolate hazelnut spread|539|6.3|57.5|30.9|معلقة كبيرة:Tablespoon:18
swt|حلاوة طحينية|Halva|520|12|58|27
swt|بسبوسة|Basbousa|350|4|58|12|قطعة:Piece:80
swt|كنافة|Kunafa|380|6|42|21|قطعة:Piece:100
swt|بقلاوة|Baklava|430|6|50|23|قطعة:Piece:40
swt|أم علي|Om Ali|250|6|27|13|طبق:Bowl:200
swt|أرز باللبن|Rice pudding|135|3.5|22|3.5|علبة:Cup:150
swt|مهلبية|Muhallebi|115|3|19|3|علبة:Cup:150
swt|كيك|Cake|370|5|52|16|شريحة:Slice:70
swt|دونات|Donut|452|5|51|25|قطعة:Donut:60
swt|كرواسون|Croissant|406|8|46|21|قطعة:Croissant:60
swt|بسكويت بالشوكولاتة|Chocolate biscuit|480|6|68|21
swt|آيس كريم فانيليا|Vanilla ice cream|207|3.5|24|11|كوب صغير:Small cup:100
swt|جيلي|Jelly dessert|62|1.5|14|0
swt|شيبسي بطاطس|Potato chips|536|7|53|35|كيس صغير:Small bag:25
swt|سنيكرز|Snickers bar|488|9|60|24|قطعة:Bar:50
# ---- fast food
fast|برجر لحم ساندوتش|Beef burger sandwich|250|13|27|10|ساندوتش:Sandwich:200
fast|تشيز برجر|Cheeseburger|270|14|27|12|ساندوتش:Sandwich:120
fast|شاورما فراخ ساندوتش|Chicken shawarma sandwich|210|14|22|7.5|ساندوتش:Sandwich:250
fast|شاورما لحم ساندوتش|Beef shawarma sandwich|240|13|22|11|ساندوتش:Sandwich:250
fast|بيتزا جبنة مارجريتا|Margherita (cheese) pizza|266|11|33|10|شريحة:Slice:110
fast|بيتزا بيبروني|Pepperoni pizza|298|12|30|15|شريحة:Slice:110
fast|بطاطس مقلية فرايز|French fries|312|3.4|41|15|وسط:Medium portion:115
fast|ساندوتش فراخ كرسبي|Crispy chicken sandwich|260|13|27|11|ساندوتش:Sandwich:200
fast|هوت دوج ساندوتش|Hot dog sandwich|247|10|20|14|ساندوتش:Sandwich:120
fast|حلقات بصل مقلية|Onion rings|411|4.4|38|27
fast|إندومي نودلز جاف|Instant noodles, dry|450|10|62|18|كيس:Pack:70
# ---- Egyptian dishes
egy|كشري|Koshari|160|5|27|3.5|طبق وسط:Medium plate:350
egy|طعمية فلافل مقلية|Taameya (falafel), fried|333|13|32|18|حبة:Piece:25
egy|ساندوتش فلافل|Falafel sandwich|250|9|30|11|ساندوتش:Sandwich:150
egy|ساندوتش فول|Ful sandwich|190|7|28|5|ساندوتش:Sandwich:150
egy|حواوشي|Hawawshi|270|13|24|14|رغيف:Loaf:200
egy|ملوخية بالفراخ|Molokhia with chicken|95|8|4|5|طبق:Plate:300
egy|بامية باللحمة|Okra stew with meat|85|6|7|4|طبق:Plate:300
egy|محشي ورق عنب|Stuffed grape leaves|150|3|22|6|حبة:Piece:25
egy|محشي كوسة|Stuffed zucchini|120|4|15|5|حبة:Piece:50
egy|محشي فلفل|Stuffed peppers|130|4|17|5|حبة:Piece:100
egy|فتة بالأرز واللحمة|Fatta with rice and meat|230|10|27|9|طبق:Plate:350
egy|مسقعة|Moussaka (eggplant)|100|1.5|8|7.5
egy|كبدة إسكندراني|Alexandrian liver|175|20|4|9
egy|سجق إسكندراني|Alexandrian sausage|290|14|4|24
egy|حمام محشي فريك|Pigeon stuffed with freekeh|260|17|13|15
egy|مكرونة بالبشاميل|Pasta béchamel|190|8|20|9|قطعة:Piece:200
egy|مكرونة بالصلصة|Pasta with tomato sauce|150|5|27|2.5|طبق:Plate:300
egy|أرز معمر|Baked rice with cream|180|5|24|7
egy|شوربة عدس|Lentil soup|65|4|10|1|طبق:Bowl:250
egy|شوربة خضار|Vegetable soup|30|1|6|0.5|طبق:Bowl:250
egy|شوربة فراخ|Chicken soup|45|4|3|2|طبق:Bowl:250
egy|شوربة لسان عصفور|Orzo soup|70|2|12|1.5|طبق:Bowl:250
egy|سلطة طحينة|Tahini salad|150|3|5|13
egy|فطير مشلتت|Feteer meshaltet|430|7|45|25|قطعة:Piece:150
egy|فطيرة بالجبنة|Cheese pie|330|10|35|17|قطعة:Piece:120
egy|سمبوسك لحمة|Meat samosa|300|9|27|17|قطعة:Piece:40
# ---- drinks (per 100 ml)
drk|مياه|Water|0|0|0|0
drk|لبن كامل الدسم|Whole milk|61|3.2|4.8|3.3|كوب:Cup:240
drk|لبن نصف دسم|2% milk|50|3.3|4.8|2|كوب:Cup:240
drk|لبن خالي الدسم|Skim milk|34|3.4|5|0.1|كوب:Cup:240
drk|لبن بالشوكولاتة|Chocolate milk|83|3.4|10.4|2|علبة:Carton:200
drk|لبن لوز غير محلى|Almond milk, unsweetened|15|0.6|0.3|1.2|كوب:Cup:240
drk|لبن صويا|Soy milk|54|3.3|6|1.8|كوب:Cup:240
drk|لبن شوفان|Oat milk|46|1|6.5|1.5|كوب:Cup:240
drk|قهوة سادة|Black coffee|1|0.1|0|0|فنجان:Cup:240
drk|قهوة تركي بدون سكر|Turkish coffee, no sugar|2|0.1|0.3|0|فنجان:Cup:60
drk|قهوة تركي بسكر|Turkish coffee with sugar|27|0.2|6.7|0|فنجان:Cup:60
drk|شاي سادة|Tea, plain|1|0|0.2|0|كوباية:Glass:200
drk|شاي بسكر|Tea with sugar|16|0|4|0|كوباية:Glass:200
drk|شاي بلبن بدون سكر|Milk tea, no sugar|20|1|2|0.9|كوباية:Glass:200
drk|شاي أخضر|Green tea|1|0|0.2|0|كوباية:Glass:200
drk|ينسون أو نعناع بدون سكر|Anise or mint tea, no sugar|1|0|0.2|0|كوباية:Glass:200
drk|كابتشينو|Cappuccino|40|2.3|3.5|2|كوب:Cup:240
drk|لاتيه|Latte|45|2.7|4|2|كوب:Cup:300
drk|أيس كوفي محلى|Iced coffee, sweetened|45|1.5|9|0.5|كوب:Cup:300
drk|نسكافيه 3 في 1|3-in-1 instant coffee, prepared|45|0.5|8|1.2|كوب:Cup:200
drk|عصير برتقال طازج|Fresh orange juice|45|0.7|10.4|0.2|كوب:Glass:250
drk|عصير مانجو|Mango juice|60|0.4|15|0.1|كوب:Glass:250
drk|عصير قصب|Sugarcane juice|73|0.2|18|0|كوب:Glass:250
drk|عصير ليمون بالسكر|Sweetened lemonade|40|0|10|0|كوب:Glass:250
drk|عصير فراولة طازج|Fresh strawberry juice|45|0.6|10.5|0.2|كوب:Glass:250
drk|عصير جوافة|Guava juice|55|0.5|13|0.1|كوب:Glass:250
drk|عصير تفاح|Apple juice|46|0.1|11.4|0.1|كوب:Glass:250
drk|عصير رمان|Pomegranate juice|54|0.2|13|0.3|كوب:Glass:250
drk|عصير جزر|Carrot juice|40|0.9|9.3|0.2|كوب:Glass:250
drk|عصير عنب|Grape juice|60|0.4|15|0.1|كوب:Glass:250
drk|عصير فواكه معبأ|Packaged fruit juice|50|0.3|12|0.1|علبة:Carton:235
drk|كركديه بسكر|Hibiscus (karkadeh), sweetened|30|0|7.5|0|كوب:Glass:250
drk|كركديه بدون سكر|Hibiscus (karkadeh), unsweetened|2|0|0.4|0|كوب:Glass:250
drk|عرقسوس|Licorice drink (erk sous)|30|0|7.5|0|كوب:Glass:250
drk|تمر هندي|Tamarind drink|40|0|10|0|كوب:Glass:250
drk|سوبيا|Sobia (coconut milk drink)|80|1|16|1.5|كوب:Glass:250
drk|سحلب|Sahlab|105|3|17|3|كوب:Cup:200
drk|كولا|Cola|42|0|10.6|0|علبة:Can:330
drk|كولا دايت أو زيرو|Diet or zero cola|0|0|0|0|علبة:Can:330
drk|سفن أب أو سبرايت|Lemon-lime soda|41|0|10.4|0|علبة:Can:330
drk|فانتا برتقال|Orange soda|48|0|12.5|0|علبة:Can:330
drk|مشروب طاقة|Energy drink|45|0.4|11|0|علبة:Can:250
drk|مشروب طاقة بدون سكر|Sugar-free energy drink|3|0|0|0|علبة:Can:250
drk|مشروب رياضي|Sports drink|24|0|6|0|زجاجة:Bottle:500
drk|مياه جوز الهند|Coconut water|19|0.7|3.7|0.2|علبة:Carton:330
drk|بروتين شيك جاهز|Ready-to-drink protein shake|48|9|3|0.8|علبة:Carton:330
drk|ميلك شيك|Milkshake|112|3|18|3.5|كوب:Cup:300
drk|موز بلبن|Banana milk smoothie|85|3|15|2|كوب:Glass:300
drk|زبادي شرب|Drinkable yogurt|62|3|9|1.5|علبة:Bottle:200
drk|عيران|Ayran (diluted yogurt drink)|38|2.2|3|2|كوب:Glass:250
# ---- supplements (per 100 g of powder or bar)
sup|واي بروتين بودرة|Whey protein powder|400|80|8|6|سكوب:Scoop:30
sup|كازين بودرة|Casein protein powder|370|78|8|2|سكوب:Scoop:33
sup|بروتين نباتي بودرة|Plant protein powder|390|70|12|8|سكوب:Scoop:30
sup|ماس جينر بودرة|Mass gainer powder|380|25|60|4|سكوب:Scoop:100
sup|بروتين بار|Protein bar|370|30|35|12|قطعة:Bar:60
sup|كرياتين|Creatine monohydrate|0|0|0|0|معلقة صغيرة:Teaspoon:5
# ---- sauces and condiments
misc|كاتشب|Ketchup|101|1|27|0.1|معلقة كبيرة:Tablespoon:17
misc|مستردة|Mustard|66|4|6|4|معلقة صغيرة:Teaspoon:5
misc|صلصة باربكيو|BBQ sauce|172|0.8|41|0.6|معلقة كبيرة:Tablespoon:17
misc|صلصة صويا|Soy sauce|53|8|5|0.6|معلقة كبيرة:Tablespoon:16
misc|خل|Vinegar|18|0|0.9|0|معلقة كبيرة:Tablespoon:15
`;
