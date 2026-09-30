var recipeImg = document.getElementById('recipeImg')
var recipeName = document.getElementById('recipeName')
var recipeTitle = document.getElementById('recipeTitle')
var recipPrep = document.getElementById('recipPrep')
var recipCook = document.getElementById('recipCook')
var recipServing = document.getElementById('recipServing')
var recipIngred = document.getElementById('recipIngred')
var recipIngred2 = document.getElementById('recipIngred2')
var recipIngred3 = document.getElementById('recipIngred3')
var recipIngred4 = document.getElementById('recipIngred4')
var recipIngred5 = document.getElementById('recipIngred5')
var recipIngred7 = document.getElementById('recipIngred7')
var recipIngred6 = document.getElementById('recipIngred6')
var recipIngred11 = document.getElementById('recipIngred11')
var recipIngred12 = document.getElementById('recipIngred12')
var recipIngred13 = document.getElementById('recipIngred13')
var recipNutr = document.getElementById('recipNutr')
var recipNutr2 = document.getElementById('recipNutr2')
var recipNutr3 = document.getElementById('recipNutr3')
var recipNutr4 = document.getElementById('recipNutr4')
var recipNutr5 = document.getElementById('recipNutr5')
var recipNutr6 = document.getElementById('recipNutr6')

var meal = []

var index = 0
function nextmeal() {

    var mael1 = {
        image: "image/imgi_2_photo-1565299585323-38d6b0865b47.png",
        name: "Beef Tacos",
        title: "Flavorful Mexican tacos with seasoned ground beef",
        recipPrep: "20 mins",
        recipCook: "10 mins",
        recipServing: "3 servings",
        recipIngred: "1 lb chicken breast, sliced",
        recipIngred2: "2 cups broccoli florets",
        recipIngred3: "1 red bell pepper, sliced",
        recipIngred4: "1/4 cup soy sauce",
        recipIngred5: "2 cloves garlic, minced",
        recipIngred6: "1 tbsp sesame oil",
        recipIngred7: "1 tbsp cornstarch",
        recipIngred11: "1 tsp ginger, grated",
        recipIngred12: "2 green onions, chopped",
        recipIngred13: "Cooked white rice for serving",
        recipNutr: "350 Calories",
        recipNutr2: "32g Protein",
        recipNutr3: "22g Carbs",
        recipNutr4: "10g Fat",
        recipNutr5: "4g Fiber",
        recipNutr6: "720mg Sodium"
    }
    meal.push(mael1)
    var meal2 = {
        image: "image/imgi_2_photo-1603133872878-684f208fb84b.png",
        name: "Chicken Stir-Fry",
        title: "Quick and healthy stir-fry with colorful vegetables",
        recipPrep: "15 mins",
        recipCook: "15 mins",
        recipServing: "4 servings",
        recipIngred: "1 lb ground beef",
        recipIngred2: "1 tbsp taco seasoning",
        recipIngred3: "8 taco shells",
        recipIngred4: "1 cup shredded lettuce",
        recipIngred5: "1 cup diced tomatoes",
        recipIngred6: "1/2 cup shredded cheddar cheese",
        recipIngred7: "1/4 cup sour cream",
        recipIngred11: "1/4 cup chopped cilantro",
        recipIngred12: "1 lime, cut into wedges",
        recipIngred13: "Salsa to taste",
        recipNutr: "420 Calories",
        recipNutr2: "24g Protein",
        recipNutr3: "28g Carbs",
        recipNutr4: "22g Fat",
        recipNutr5: "3g Fiber",
        recipNutr6: "580mg Sodium"
    }
    meal.push(meal2)

    var meal3 = {
        image: "image/imgi_2_photo-1612874742237-6526221588e3.png",
        name: "Spaghetti Bolognese",
        title: "Classic Italian pasta with rich meat sauce",
        recipPrep: "15 mins",
        recipCook: "30 mins",
        recipServing: "4 servings",
        recipIngred: "200g spaghetti",
        recipIngred2: "300g minced beef",
        recipIngred3: "1 onion, finely diced",
        recipIngred4: "2 cloves garlic, minced",
        recipIngred5: "400g canned tomato sauce",
        recipIngred6: "2 tbsp tomato paste",
        recipIngred7: "1 tsp dried oregano",
        recipIngred11: "1/2 cup grated Parmesan cheese",
        recipIngred12: " Fresh basil leaves",
        recipIngred13: " Salt and black pepper",
        recipNutr: "480 Calories",
        recipNutr2: "26g Protein",
        recipNutr3: "58g Carbs",
        recipNutr4: "16g Fat",
        recipNutr5: "5g Fiber",
        recipNutr6: "610mg Sodium"
    }
    meal.push(meal3)

    var meal4 = {
        image: "image/imgi_2_photo-1565557623262-b51c2513a641.png",
        name: "Grilled Salmon",
        title: "Tender salmon fillet with lemon and herbs",
        recipPrep: "10 mins",
        recipCook: "12 mins",
        recipServing: "2 servings",
        recipIngred: "2 salmon fillets",
        recipIngred2: "2 tbsp olive oil",
        recipIngred3: "1 lemon, sliced",
        recipIngred4: "2 cloves garlic, crushed",
        recipIngred5: "1 tbsp fresh dill, chopped",
        recipIngred6: " Salt and pepper to taste",
        recipIngred7: "1 cup asparagus spears",
        recipIngred11: "1 tbsp butter",
        recipIngred12: "1 tsp lemon zest",
        recipIngred13: " Side salad",
        recipNutr: "410 Calories",
        recipNutr2: "34g Protein",
        recipNutr3: "4g Carbs",
        recipNutr4: "28g Fat",
        recipNutr5: "2g Fiber",
        recipNutr6: "390mg Sodium"
    }
    meal.push(meal4)

    var meal5 = {
        image: "image/imgi_2_photo-1568901346375-23c9450c58cd.png",
        name: "Beef Burger",
        title: "Hearty black bean and corn burger patty",
        recipPrep: "20 mins",
        recipCook: "10 mins",
        recipServing: "4 servings",
        recipIngred: "1 can black beans, drained",
        recipIngred2: "1/2 cup breadcrumbs",
        recipIngred3: "1/2 cup cooked corn",
        recipIngred4: "1 tsp cumin powder",
        recipIngred5: "4 burger buns",
        recipIngred6: "4 slices avocado",
        recipIngred7: "4 tomato slices",
        recipIngred11: "2 tbsp mayonnaise",
        recipIngred12: " Red onion rings",
        recipIngred13: " Lettuce leaves",
        recipNutr: "380 Calories",
        recipNutr2: "14g Protein",
        recipNutr3: "52g Carbs",
        recipNutr4: "12g Fat",
        recipNutr5: "9g Fiber",
        recipNutr6: "520mg Sodium"
    }
    meal.push(meal5)

    var meal6 = {
        image: "image/imgi_2_photo-1585032226651-759b368d7246.png",
        name: "Fettuccine Alfredo",
        title: "Rich and creamy garlic Parmesan pasta",
        recipPrep: "10 mins",
        recipCook: "15 mins",
        recipServing: "3 servings",
        recipIngred: "250g fettuccine pasta",
        recipIngred2: "1/2 cup unsalted butter",
        recipIngred3: "1 cup heavy cream",
        recipIngred4: "1 1/2 cups Parmesan cheese",
        recipIngred5: "2 cloves garlic, minced",
        recipIngred6: " Fresh parsley, minced",
        recipIngred7: " Black pepper to taste",
        recipIngred11: " Pinch of nutmeg",
        recipIngred12: " Salt to taste",
        recipIngred13: " Garlic bread for side",
        recipNutr: "560 Calories",
        recipNutr2: "15g Protein",
        recipNutr3: "48g Carbs",
        recipNutr4: "35g Fat",
        recipNutr5: "2g Fiber",
        recipNutr6: "680mg Sodium"
    }
    meal.push(meal6)

    var meal7 = {
        image: "image/imgi_2_photo-1601050690597-df0568f70950.png",
        name: "Greek Salad",
        title: "Refreshing Mediterranean salad with feta and olives",
        recipPrep: "15 mins",
        recipCook: "0 mins",
        recipServing: "2 servings",
        recipIngred: "2 cucumbers, diced",
        recipIngred2: "3 large tomatoes, cut into wedges",
        recipIngred3: "1/2 red onion, thin slices",
        recipIngred4: "1/2 cup Kalamata olives",
        recipIngred5: "200g feta cheese, cubed",
        recipIngred6: "3 tbsp extra virgin olive oil",
        recipIngred7: "1 tbsp dried oregano",
        recipIngred11: "1 tbsp red wine vinegar",
        recipIngred12: " Salt and pepper",
        recipIngred13: " Pita bread",
        recipNutr: "290 Calories",
        recipNutr2: "8g Protein",
        recipNutr3: "14g Carbs",
        recipNutr4: "23g Fat",
        recipNutr5: "4g Fiber",
        recipNutr6: "750mg Sodium"
    }
    meal.push(meal7)

    var meal8 = {
        image: "image/imgi_2_photo-1574071318508-1cdbab80d002.png",
        name: "Margherita Pizza",
        title: "Classic Italian pizza with fresh mozzarella and basil",
        recipPrep: "25 mins",
        recipCook: "12 mins",
        recipServing: "2 servings",
        recipIngred: "1 pizza dough base",
        recipIngred2: "1/2 cup tomato sauce",
        recipIngred3: "150g fresh mozzarella, sliced",
        recipIngred4: " Fresh basil leaves",
        recipIngred5: "1 tbsp olive oil",
        recipIngred6: "1 clove garlic, minced",
        recipIngred7: " Pinch of salt",
        recipIngred11: " Oregano to sprinkle",
        recipIngred12: " Chili flakes (optional)",
        recipIngred13: " Extra virgin olive oil drizzle",
        recipNutr: "510 Calories",
        recipNutr2: "20g Protein",
        recipNutr3: "62g Carbs",
        recipNutr4: "20g Fat",
        recipNutr5: "3g Fiber",
        recipNutr6: "820mg Sodium"
    }
    meal.push(meal8)

    var meal9 = {
        image: "image/imgi_2_photo-1633504581786-316c8002b1b9.png",
        name: "Shrimp Scampi",
        title: "Garlic butter shrimp over a bed of lingine",
        recipPrep: "10 mins",
        recipCook: "10 mins",
        recipServing: "2 servings",
        recipIngred: "300g large shrimp, peeled",
        recipIngred2: "200g linguine pasta",
        recipIngred3: "3 tbsp butter",
        recipIngred4: "2 tbsp olive oil",
        recipIngred5: "4 cloves garlic, minced",
        recipIngred6: "1/4 cup lemon juice",
        recipIngred7: " Fresh parsley, chopped",
        recipIngred11: " Red pepper flakes",
        recipIngred12: " Salt and pepper",
        recipIngred13: " Lemon slices for garnish",
        recipNutr: "440 Calories",
        recipNutr2: "28g Protein",
        recipNutr3: "42g Carbs",
        recipNutr4: "18g Fat",
        recipNutr5: "2g Fiber",
        recipNutr6: "540mg Sodium"
    }
    meal.push(meal9)

    var meal10 = {
        image: "image/imgi_2_photo-1612874742237-6526221588e3.png",
        name: "Chicken Curry",
        title: "Aromatic Indian style chicken curry with creamy sauce",
        recipPrep: "20 mins",
        recipCook: "25 mins",
        recipServing: "4 servings",
        recipIngred: "500g chicken thighs, cubed",
        recipIngred2: "1 onion, finely chopped",
        recipIngred3: "2 tbsp curry powder",
        recipIngred4: "1 can coconut milk",
        recipIngred5: "2 tbsp tomato puree",
        recipIngred6: "2 cloves garlic, minced",
        recipIngred7: "1 tbsp ginger, grated",
        recipIngred11: " Fresh cilantro",
        recipIngred12: " Basmati rice for serving",
        recipIngred13: " Naan bread",
        recipNutr: "520 Calories",
        recipNutr2: "35g Protein",
        recipNutr3: "18g Carbs",
        recipNutr4: "34g Fat",
        recipNutr5: "3g Fiber",
        recipNutr6: "490mg Sodium"
    }
    meal.push(meal10)


    ++index
    if (index >= meal.length) {
        index = 0
    }
    var randomIndex = Math.floor(Math.random() * meal.length)

    recipeImg.src = meal[randomIndex].image
    recipeName.innerHTML = meal[randomIndex].name
    recipeTitle.innerHTML = meal[randomIndex].title
    recipPrep.innerHTML = meal[randomIndex].recipPrep;
    recipCook.innerHTML = meal[randomIndex].recipCook;
    recipServing.innerHTML = meal[randomIndex].recipServing;

    recipIngred.innerHTML = meal[randomIndex].recipIngred;
    recipIngred2.innerHTML = meal[randomIndex].recipIngred2;
    recipIngred3.innerHTML = meal[randomIndex].recipIngred3;
    recipIngred4.innerHTML = meal[randomIndex].recipIngred4;
    recipIngred5.innerHTML = meal[randomIndex].recipIngred5;
    recipIngred6.innerHTML = meal[randomIndex].recipIngred6;
    recipIngred7.innerHTML = meal[randomIndex].recipIngred7;
    recipIngred11.innerHTML = meal[randomIndex].recipIngred11;
    recipIngred12.innerHTML = meal[randomIndex].recipIngred12;
    recipIngred13.innerHTML = meal[randomIndex].recipIngred13;

    recipNutr.innerHTML = meal[randomIndex].recipNutr;
    recipNutr2.innerHTML = meal[randomIndex].recipNutr2;
    recipNutr3.innerHTML = meal[randomIndex].recipNutr3;
    recipNutr4.innerHTML = meal[randomIndex].recipNutr4;
    recipNutr5.innerHTML = meal[randomIndex].recipNutr5;
    recipNutr6.innerHTML = meal[randomIndex].recipNutr6;
}

