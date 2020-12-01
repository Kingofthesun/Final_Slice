var pizzaMaker = document.getElementById("pizza");
var pizza = document.createElement("img");
var pizzaDiv = document.createElement("div");

var createDiv = document.createElement("div");
createDiv.setAttribute("class", "create-div")
var stackFlexDiv = document.createElement("div");
stackFlexDiv.setAttribute("class", "vertical-flex-div");
var dealDiv = document.createElement("div")
//size
var sizePanel = document.createElement("div");
sizePanel.setAttribute("class", "size-panel");
var smallPizzaLabel = document.createElement("label");
var mediumPizzaLabel = document.createElement("label");
var largePizzaLabel = document.createElement("label");
var xlPizzaLabel = document.createElement("label");

var smallPizza = document.createElement("input");
smallPizza.setAttribute("type", "radio");
smallPizza.setAttribute("name", "size");
smallPizza.setAttribute("value", "small");
smallPizzaLabel.setAttribute("for", "small");
smallPizzaLabel.innerHTML = "Small";
var mediumPizza = document.createElement("input");
mediumPizza.setAttribute("type", "radio");
mediumPizza.setAttribute("name", "size");
mediumPizza.setAttribute("value", "medium");
mediumPizzaLabel.setAttribute("for", "medium");
mediumPizzaLabel.innerHTML = "Medium";
var largePizza = document.createElement("input");
largePizza.setAttribute("type", "radio");
largePizza.setAttribute("name", "size");
largePizza.setAttribute("value", "large");
largePizzaLabel.setAttribute("for", "large");
largePizzaLabel.innerHTML = "Large";
var xlPizza = document.createElement("input");
xlPizza.setAttribute("type", "radio");
xlPizza.setAttribute("name", "size");
xlPizza.setAttribute("value", "xl");
xlPizzaLabel.setAttribute("for", "xl");
xlPizzaLabel.innerHTML = "Extra Large";

//sauce
var saucePanel = document.createElement("div");
saucePanel.setAttribute("class", "sauce-panel");
var bbqSauceLabel = document.createElement("label");
var buffaloSauceLabel = document.createElement("label");
var marinaraSauceLabel = document.createElement("label");
var whiteSauceLabel = document.createElement("label");

var bbqSauce = document.createElement("input");
bbqSauce.setAttribute("type", "radio");
bbqSauce.setAttribute("name", "sauce");
bbqSauce.setAttribute("value", "bbq");
bbqSauceLabel.setAttribute("for", "bbq");
bbqSauceLabel.innerHTML = "BBQ";
var buffaloSauce = document.createElement("input");
buffaloSauce.setAttribute("type", "radio");
buffaloSauce.setAttribute("name", "sauce");
buffaloSauce.setAttribute("value", "buffalo");
buffaloSauceLabel.setAttribute("for", "buffalo");
buffaloSauceLabel.innerHTML = "Buffalo";
var marinaraSauce = document.createElement("input");
marinaraSauce.setAttribute("type", "radio");
marinaraSauce.setAttribute("name", "sauce");
marinaraSauce.setAttribute("value", "marinara");
marinaraSauceLabel.setAttribute("for", "marinara");
marinaraSauceLabel.innerHTML = "Marinara";
var whiteSauce = document.createElement("input");
whiteSauce.setAttribute("type", "radio");
whiteSauce.setAttribute("name", "sauce");
whiteSauce.setAttribute("value", "white-sauce");
whiteSauceLabel.setAttribute("for", "white-sauce");
whiteSauceLabel.innerHTML = "White Sauce";


//topping
var toppingPanel = document.createElement("div");
toppingPanel.setAttribute("class", "topping-panel");
var baconLabel = document.createElement("label");
var bananaPepperLabel = document.createElement("label");
var beefLabel = document.createElement("label");
var chickenLabel = document.createElement("label");
var greenBellPepperLabel = document.createElement("label");
var hamLabel = document.createElement("label");
var italianSausageLabel = document.createElement("label");
var jalepenoLabel = document.createElement("label");
var meatballLabel = document.createElement("label");
var mushroomLabel = document.createElement("label");
var olivesLabel = document.createElement("label");
var onionLabel = document.createElement("label");
var pepperoniLabel = document.createElement("label");
var pineappleLabel = document.createElement("label");
var porkLabel = document.createElement("label");
var tomatoLabel = document.createElement("label");


var LRLabels = [];
for(var i = 0; i <= 47; i++){
    var tempLR = document.createElement("label");
    if(i%3 == 0)
    {
        tempLR.innerHTML = "+";
    }
    else if(i%3 == 1){
        tempLR.innerHTML = "R";

    }
    else{
        tempLR.innerHTML = "L";
    }
    LRLabels.splice(0,0,tempLR);
    console.log(tempLR.innerHTML);
}

var baconExtra = document.createElement("input");
baconExtra.setAttribute("type", "checkbox");
baconExtra.setAttribute("name", "bacon");
baconExtra.setAttribute("value", "bacon-extra");
baconExtra.disabled = true;
var bacon = document.createElement("input");
bacon.setAttribute("type", "checkbox");
bacon.setAttribute("name", "bacon");
bacon.setAttribute("value", "bacon");
baconLabel.setAttribute("for", "bacon");
baconLabel.innerHTML = "Bacon";
var baconLeft = document.createElement("input");
baconLeft.setAttribute("type", "checkbox");
baconLeft.setAttribute("name", "bacon");
baconLeft.setAttribute("value", "bacon-left");
var baconRight = document.createElement("input");
baconRight.setAttribute("type", "checkbox");
baconRight.setAttribute("name", "bacon");
baconRight.setAttribute("value", "bacon-right");
LRLabels[0].setAttribute("for", "bacon-left");
LRLabels[1].setAttribute("for", "bacon-right");
var bananaPepperExtra = document.createElement("input");
bananaPepperExtra.setAttribute("type", "checkbox");
bananaPepperExtra.setAttribute("name", "banana-pepper");
bananaPepperExtra.setAttribute("value", "banana-pepper-extra");
bananaPepperExtra.disabled = true;
var bananaPepper = document.createElement("input");
bananaPepper.setAttribute("type", "checkbox");
bananaPepper.setAttribute("name", "banana-pepper");
bananaPepper.setAttribute("value", "banana-pepper");
bananaPepperLabel.setAttribute("for", "banana-pepper");
bananaPepperLabel.innerHTML = "Banana Pepper";
var bananaPepperLeft = document.createElement("input");
bananaPepperLeft.setAttribute("type", "checkbox");
bananaPepperLeft.setAttribute("name", "banana-pepper");
bananaPepperLeft.setAttribute("value", "banana-pepper-left");
var bananaPepperRight = document.createElement("input");
bananaPepperRight.setAttribute("type", "checkbox");
bananaPepperRight.setAttribute("name", "banana-pepper");
bananaPepperRight.setAttribute("value", "banana-pepper-right");
LRLabels[2].setAttribute("for", "banana-pepper-left");
LRLabels[3].setAttribute("for", "banana-pepper-right");
var beefExtra = document.createElement("input");
beefExtra.setAttribute("type", "checkbox");
beefExtra.setAttribute("name", "beef");
beefExtra.setAttribute("value", "beef-extra");
beefExtra.disabled = true;
var beef = document.createElement("input");
beef.setAttribute("type", "checkbox");
beef.setAttribute("name", "beef");
beef.setAttribute("value", "beef");
beefLabel.setAttribute("for", "beef");
beefLabel.innerHTML = "Beef";
var beefLeft = document.createElement("input");
beefLeft.setAttribute("type", "checkbox");
beefLeft.setAttribute("name", "beef");
beefLeft.setAttribute("value", "beef-left");
var beefRight = document.createElement("input");
beefRight.setAttribute("type", "checkbox");
beefRight.setAttribute("name", "beef");
beefRight.setAttribute("value", "beef-right");
LRLabels[4].setAttribute("for", "beef-left");
LRLabels[5].setAttribute("for", "beef-right");

var chickenExtra = document.createElement("input");
chickenExtra.setAttribute("type", "checkbox");
chickenExtra.setAttribute("name", "chicken");
chickenExtra.setAttribute("value", "chicken-extra");
chickenExtra.disabled = true;
var chicken = document.createElement("input");
chicken.setAttribute("type", "checkbox");
chicken.setAttribute("name", "chicken");
chicken.setAttribute("value", "chicken");
chickenLabel.setAttribute("for", "chicken");
chickenLabel.innerHTML = "Chicken";
var chickenLeft = document.createElement("input");
chickenLeft.setAttribute("type", "checkbox");
chickenLeft.setAttribute("name", "chicken");
chickenLeft.setAttribute("value", "chicken-left");
var chickenRight = document.createElement("input");
chickenRight.setAttribute("type", "checkbox");
chickenRight.setAttribute("name", "chicken");
chickenRight.setAttribute("value", "chicken-right");
LRLabels[6].setAttribute("for", "chicken-left");
LRLabels[7].setAttribute("for", "chicken-right");

var greenBellPepperExtra = document.createElement("input");
greenBellPepperExtra.setAttribute("type", "checkbox");
greenBellPepperExtra.setAttribute("name", "green-bell-pepper");
greenBellPepperExtra.setAttribute("value", "green-bell-pepper-extra");
greenBellPepperExtra.disabled = true;
var greenBellPepper = document.createElement("input");
greenBellPepper.setAttribute("type", "checkbox");
greenBellPepper.setAttribute("name", "green-bell-pepper");
greenBellPepper.setAttribute("value", "green-bell-pepper");
greenBellPepperLabel.setAttribute("for", "green-bell-pepper");
greenBellPepperLabel.innerHTML = "Green Bell Pepper";
var ham = document.createElement("input");
var greenBellPepperLeft = document.createElement("input");
greenBellPepperLeft.setAttribute("type", "checkbox");
greenBellPepperLeft.setAttribute("name", "green-bell-pepper");
greenBellPepperLeft.setAttribute("value", "green-bell-pepper-left");
var greenBellPepperRight = document.createElement("input");
greenBellPepperRight.setAttribute("type", "checkbox");
greenBellPepperRight.setAttribute("name", "green-bell-pepper");
greenBellPepperRight.setAttribute("value", "green-bell-pepper-right");
LRLabels[8].setAttribute("for", "green-bell-pepper-left");
LRLabels[9].setAttribute("for", "green-bell-pepper-right");

var hamExtra = document.createElement("input");
hamExtra.setAttribute("type", "checkbox");
hamExtra.setAttribute("name", "ham");
hamExtra.setAttribute("value", "ham-extra");
hamExtra.disabled = true;
var ham = document.createElement("input");
ham.setAttribute("type", "checkbox");
ham.setAttribute("name", "ham");
ham.setAttribute("value", "ham");
hamLabel.setAttribute("for", "ham");
hamLabel.innerHTML = "Ham";
var hamLeft = document.createElement("input");
hamLeft.setAttribute("type", "checkbox");
hamLeft.setAttribute("name", "ham");
hamLeft.setAttribute("value", "ham-left");
var hamRight = document.createElement("input");
hamRight.setAttribute("type", "checkbox");
hamRight.setAttribute("name", "ham");
hamRight.setAttribute("value", "ham-right");
LRLabels[10].setAttribute("for", "ham-left");
LRLabels[11].setAttribute("for", "ham-right");

var italianSausageExtra = document.createElement("input");
italianSausageExtra.setAttribute("type", "checkbox");
italianSausageExtra.setAttribute("name", "italian-sausage");
italianSausageExtra.setAttribute("value", "italian-sausage-extra");
italianSausageExtra.disabled = true;
var italianSausage = document.createElement("input");
italianSausage.setAttribute("type", "checkbox");
italianSausage.setAttribute("name", "italian-sausage");
italianSausage.setAttribute("value", "italian-sausage");
italianSausageLabel.setAttribute("for", "italian-sausage");
italianSausageLabel.innerHTML = "Italian Sausage";
var italianSausageLeft = document.createElement("input");
italianSausageLeft.setAttribute("type", "checkbox");
italianSausageLeft.setAttribute("name", "italian-sausage");
italianSausageLeft.setAttribute("value", "italian-sausage-left");
var italianSausageRight = document.createElement("input");
italianSausageRight.setAttribute("type", "checkbox");
italianSausageRight.setAttribute("name", "italian-sausage");
italianSausageRight.setAttribute("value", "italian-sausage-right");
LRLabels[12].setAttribute("for", "italian-sausage-left");
LRLabels[13].setAttribute("for", "italian-sausage-right");

var jalepenoExtra = document.createElement("input");
jalepenoExtra.setAttribute("type", "checkbox");
jalepenoExtra.setAttribute("name", "jalepeno");
jalepenoExtra.setAttribute("value", "jalepeno-extra");
jalepenoExtra.disabled = true;
var jalepeno = document.createElement("input");
jalepeno.setAttribute("type", "checkbox");
jalepeno.setAttribute("name", "jalepeno");
jalepeno.setAttribute("value", "jalepeno");
jalepenoLabel.setAttribute("for", "jalepeno");
jalepenoLabel.innerHTML = "Jalepeno";
var jalepenoLeft = document.createElement("input");
jalepenoLeft.setAttribute("type", "checkbox");
jalepenoLeft.setAttribute("name", "jalepeno");
jalepenoLeft.setAttribute("value", "jalepeno-left");
var jalepenoRight = document.createElement("input");
jalepenoRight.setAttribute("type", "checkbox");
jalepenoRight.setAttribute("name", "jalepeno");
jalepenoRight.setAttribute("value", "jalepeno-right");
LRLabels[14].setAttribute("for", "jalepeno-left");
LRLabels[15].setAttribute("for", "jalepeno-right");

var meatballExtra = document.createElement("input");
meatballExtra.setAttribute("type", "checkbox");
meatballExtra.setAttribute("name", "meatball");
meatballExtra.setAttribute("value", "meatball-extra");
meatballExtra.disabled = true;
var meatball = document.createElement("input");
meatball.setAttribute("type", "checkbox");
meatball.setAttribute("name", "meatball");
meatball.setAttribute("value", "meatball");
meatballLabel.setAttribute("for", "meatball");
meatballLabel.innerHTML = "Meatball";
var meatballLeft = document.createElement("input");
meatballLeft.setAttribute("type", "checkbox");
meatballLeft.setAttribute("name", "meatball");
meatballLeft.setAttribute("value", "meatball-left");
var meatballRight = document.createElement("input");
meatballRight.setAttribute("type", "checkbox");
meatballRight.setAttribute("name", "meatball");
meatballRight.setAttribute("value", "meatball-right");
LRLabels[16].setAttribute("for", "meatball-left");
LRLabels[17].setAttribute("for", "meatball-right");

var mushroomExtra = document.createElement("input");
mushroomExtra.setAttribute("type", "checkbox");
mushroomExtra.setAttribute("name", "mushroom");
mushroomExtra.setAttribute("value", "mushroom-extra");
mushroomExtra.disabled = true;
var mushroom = document.createElement("input");
mushroom.setAttribute("type", "checkbox");
mushroom.setAttribute("name", "mushroom");
mushroom.setAttribute("value", "mushroom");
mushroomLabel.setAttribute("for", "Mushroom");
mushroomLabel.innerHTML = "Mushroom";
var mushroomLeft = document.createElement("input");
mushroomLeft.setAttribute("type", "checkbox");
mushroomLeft.setAttribute("name", "mushroom");
mushroomLeft.setAttribute("value", "mushroom-left");
var mushroomRight = document.createElement("input");
mushroomRight.setAttribute("type", "checkbox");
mushroomRight.setAttribute("name", "mushroom");
mushroomRight.setAttribute("value", "mushroom-right");
LRLabels[18].setAttribute("for", "mushroom-left");
LRLabels[19].setAttribute("for", "mushroom-right");

var olivesExtra = document.createElement("input");
olivesExtra.setAttribute("type", "checkbox");
olivesExtra.setAttribute("name", "olives");
olivesExtra.setAttribute("value", "olives-extra");
olivesExtra.disabled = true;
var olives = document.createElement("input");
olives.setAttribute("type", "checkbox");
olives.setAttribute("name", "olives");
olives.setAttribute("value", "olives");
olivesLabel.setAttribute("for", "olives");
olivesLabel.innerHTML = "Olives";
var olivesLeft = document.createElement("input");
olivesLeft.setAttribute("type", "checkbox");
olivesLeft.setAttribute("name", "olives");
olivesLeft.setAttribute("value", "olives-left");
var olivesRight = document.createElement("input");
olivesRight.setAttribute("type", "checkbox");
olivesRight.setAttribute("name", "olives");
olivesRight.setAttribute("value", "olives-right");
LRLabels[20].setAttribute("for", "olives-left");
LRLabels[21].setAttribute("for", "olives-right");

var onionExtra = document.createElement("input");
onionExtra.setAttribute("type", "checkbox");
onionExtra.setAttribute("name", "onion");
onionExtra.setAttribute("value", "onion-extra");
onionExtra.disabled = true;
var onion = document.createElement("input");
onion.setAttribute("type", "checkbox");
onion.setAttribute("name", "onion");
onion.setAttribute("value", "onion");
onionLabel.setAttribute("for", "onion");
onionLabel.innerHTML = "Onion";
var onionLeft = document.createElement("input");
onionLeft.setAttribute("type", "checkbox");
onionLeft.setAttribute("name", "onion");
onionLeft.setAttribute("value", "onion-left");
var onionRight = document.createElement("input");
onionRight.setAttribute("type", "checkbox");
onionRight.setAttribute("name", "onion");
onionRight.setAttribute("value", "onion-right");
LRLabels[22].setAttribute("for", "onion-left");
LRLabels[23].setAttribute("for", "onion-right");

var pepperoniExtra = document.createElement("input");
pepperoniExtra.setAttribute("type", "checkbox");
pepperoniExtra.setAttribute("name", "pepperoni");
pepperoniExtra.setAttribute("value", "pepperoni-extra");
pepperoniExtra.disabled = true;
var pepperoni = document.createElement("input");
pepperoni.setAttribute("type", "checkbox");
pepperoni.setAttribute("name", "pepperoni");
pepperoni.setAttribute("value", "pepperoni");
pepperoniLabel.setAttribute("for", "pepperoni");
pepperoniLabel.innerHTML = "Pepperoni";
var pepperoniLeft = document.createElement("input");
pepperoniLeft.setAttribute("type", "checkbox");
pepperoniLeft.setAttribute("name", "pepperoni");
pepperoniLeft.setAttribute("value", "pepperoni-left");
var pepperoniRight = document.createElement("input");
pepperoniRight.setAttribute("type", "checkbox");
pepperoniRight.setAttribute("name", "pepperoni");
pepperoniRight.setAttribute("value", "pepperoni-right");
LRLabels[24].setAttribute("for", "pepperoni-left");
LRLabels[25].setAttribute("for", "pepperoni-right");

var pineappleExtra = document.createElement("input");
pineappleExtra.setAttribute("type", "checkbox");
pineappleExtra.setAttribute("name", "pineapple");
pineappleExtra.setAttribute("value", "pineapple-extra");
pineappleExtra.disabled = true;
var pineapple = document.createElement("input");
pineapple.setAttribute("type", "checkbox");
pineapple.setAttribute("name", "pineapple");
pineapple.setAttribute("value", "pineapple");
pineappleLabel.setAttribute("for", "pineapple");
pineappleLabel.innerHTML = "Pineapple";
var pineappleLeft = document.createElement("input");
pineappleLeft.setAttribute("type", "checkbox");
pineappleLeft.setAttribute("name", "pineapple");
pineappleLeft.setAttribute("value", "pineapple-left");
var pineappleRight = document.createElement("input");
pineappleRight.setAttribute("type", "checkbox");
pineappleRight.setAttribute("name", "pineapple");
pineappleRight.setAttribute("value", "pineapple-right");
LRLabels[26].setAttribute("for", "pineapple-left");
LRLabels[27].setAttribute("for", "pineapple-right");

var porkExtra = document.createElement("input");
porkExtra.setAttribute("type", "checkbox");
porkExtra.setAttribute("name", "pork");
porkExtra.setAttribute("value", "pork-extra");
porkExtra.disabled = true;
var pork = document.createElement("input");
pork.setAttribute("type", "checkbox");
pork.setAttribute("name", "pork");
pork.setAttribute("value", "pork");
porkLabel.setAttribute("for", "pork");
porkLabel.innerHTML = "Pork";
var porkLeft = document.createElement("input");
porkLeft.setAttribute("type", "checkbox");
porkLeft.setAttribute("name", "pork");
porkLeft.setAttribute("value", "pork-left");
var porkRight = document.createElement("input");
porkRight.setAttribute("type", "checkbox");
porkRight.setAttribute("name", "pork");
porkRight.setAttribute("value", "pork-right");
LRLabels[28].setAttribute("for", "pork-left");
LRLabels[29].setAttribute("for", "pork-right");

var tomatoExtra = document.createElement("input");
tomatoExtra.setAttribute("type", "checkbox");
tomatoExtra.setAttribute("name", "tomato");
tomatoExtra.setAttribute("value", "tomato-extra");
tomatoExtra.disabled = true;
var tomato = document.createElement("input");
tomato.setAttribute("type", "checkbox");
tomato.setAttribute("name", "tomato");
tomato.setAttribute("value", "tomato");
tomatoLabel.setAttribute("for", "tomato");
tomatoLabel.innerHTML = "Tomato";
var tomatoLeft = document.createElement("input");
tomatoLeft.setAttribute("type", "checkbox");
tomatoLeft.setAttribute("name", "tomato");
tomatoLeft.setAttribute("value", "tomato-left");
var tomatoRight = document.createElement("input");
tomatoRight.setAttribute("type", "checkbox");
tomatoRight.setAttribute("name", "tomato");
tomatoRight.setAttribute("value", "tomato-right");
LRLabels[30].setAttribute("for", "tomato-left");
LRLabels[31].setAttribute("for", "tomato-right");


//pizza image
pizzaDiv.setAttribute("class", "pizza-image-holder");
pizza.setAttribute("class", "pizza-image");
pizza.setAttribute("id", "dough");
var sauce = document.createElement("img");
sauce.setAttribute("class", "pizza-image");
sauce.setAttribute("id", "sauce");
var cheese = document.createElement("img");
cheese.setAttribute("class", "pizza-image");
cheese.setAttribute("id", "cheese");
var pizzaImageToppings = [];

var addCheeseLabel = document.createElement("label");

var addCheese = document.createElement("input");
addCheese.setAttribute("type", "checkbox");
addCheese.setAttribute("name", "add-cheese");
addCheese.setAttribute("value", "add-cheese");
addCheeseLabel.setAttribute("for", "add-cheese");
addCheeseLabel.innerHTML = "Add Cheese";

//price
var price = document.createElement("h3");
var deal = document.createElement("h1");
deal.innerHTML = "Special Deal: 5 Toppings for $3";
// deal.style.display = "none";
var order = document.createElement("button");
order.innerHTML = "Add to Order";
order.setAttribute("class", "order-button");
order.onclick = function(){
    alert("Added to order. Thank you for your order");
}

//default pizzas
var defaultPizzas = document.createElement("div");
defaultPizzas.setAttribute("class", "default-pizza-panel");

var defaultCowboyLabel = document.createElement("label");
var defaultMeatLoversLabel = document.createElement("label");
var defaultVeganLabel = document.createElement("label");
var defaultEverythingLabel = document.createElement("label");
var defaultMrVellaLabel = document.createElement("label");

var defaultCowboy = document.createElement("input");
defaultCowboy.setAttribute("type", "radio");
defaultCowboy.setAttribute("name", "default-pizza");
defaultCowboy.setAttribute("value", "cowboy");
defaultCowboyLabel.innerHTML = "Cowboy";
var defaultMeatLovers = document.createElement("input");
defaultMeatLovers.setAttribute("type", "radio");
defaultMeatLovers.setAttribute("name", "default-pizza");
defaultMeatLovers.setAttribute("value", "meat-lovers");
defaultMeatLoversLabel.innerHTML = "Meat Lovers";
var defaultVegan = document.createElement("input");
defaultVegan.setAttribute("type", "radio");
defaultVegan.setAttribute("name", "default-pizza");
defaultVegan.setAttribute("value", "vegan");
defaultVeganLabel.innerHTML = "Vegan";
var defaultEverything = document.createElement("input");
defaultEverything.setAttribute("type", "radio");
defaultEverything.setAttribute("name", "default-pizza");
defaultEverything.setAttribute("value", "everything");
defaultEverythingLabel.innerHTML = "Everything";
var defaultMrVella = document.createElement("input");
defaultMrVella.setAttribute("type", "radio");
defaultMrVella.setAttribute("name", "default-pizza");
defaultMrVella.setAttribute("value", "mr-vella");
defaultMrVellaLabel.innerHTML = "Vella";


createDiv.appendChild(stackFlexDiv);

pizzaMaker.appendChild(pizzaDiv);
pizzaDiv.appendChild(pizza);
pizzaMaker.appendChild(createDiv);
stackFlexDiv.append(defaultPizzas)
createDiv.appendChild(stackFlexDiv);
defaultPizzas.append(defaultCowboy);
defaultPizzas.append(defaultCowboyLabel);
defaultPizzas.append(defaultVegan);
defaultPizzas.append(defaultVeganLabel);
defaultPizzas.append(defaultMeatLovers);
defaultPizzas.append(defaultMeatLoversLabel);
defaultPizzas.append(defaultEverything);
defaultPizzas.append(defaultEverythingLabel);
defaultPizzas.append(defaultMrVella);
defaultPizzas.append(defaultMrVellaLabel);
createDiv.append(dealDiv);
createDiv.append(dealDiv);
dealDiv.setAttribute("class", "deal-panel")
dealDiv.appendChild(deal);
dealDiv.appendChild(price);
//size
stackFlexDiv.appendChild(sizePanel);
sizePanel.appendChild(smallPizza);
sizePanel.appendChild(smallPizzaLabel);
sizePanel.appendChild(mediumPizza);
sizePanel.appendChild(mediumPizzaLabel);
sizePanel.appendChild(largePizza);
sizePanel.appendChild(largePizzaLabel);
sizePanel.appendChild(xlPizza);
sizePanel.appendChild(xlPizzaLabel);
sizePanel.append(document.createElement("br"));
sizePanel.appendChild(order);
//sauce
stackFlexDiv.append(saucePanel);
saucePanel.append(bbqSauce);
saucePanel.append(bbqSauceLabel);
saucePanel.append(buffaloSauce);
saucePanel.append(buffaloSauceLabel);
saucePanel.append(marinaraSauce);
saucePanel.append(marinaraSauceLabel);
saucePanel.append(whiteSauce);
saucePanel.append(whiteSauceLabel);
saucePanel.append(document.createElement("br"));
saucePanel.append(addCheese);
saucePanel.append(addCheeseLabel);


//topping




createDiv.append(toppingPanel)
toppingPanel.append(baconLeft);
toppingPanel.append(LRLabels[0]);
toppingPanel.append(bacon);
toppingPanel.append(baconRight);
toppingPanel.append(LRLabels[1]);
toppingPanel.append(baconExtra);
toppingPanel.append(LRLabels[2]);
toppingPanel.append(baconLabel);
toppingPanel.append(bananaPepperLeft);
toppingPanel.append(LRLabels[3]);
toppingPanel.append(bananaPepper);
toppingPanel.append(bananaPepperRight);
toppingPanel.append(LRLabels[4]);
toppingPanel.append(bananaPepperExtra);
toppingPanel.append(LRLabels[5]);
toppingPanel.append(bananaPepperLabel);
toppingPanel.append(bananaPepperLabel);
toppingPanel.append(document.createElement("br"));
toppingPanel.append(beefLeft);
toppingPanel.append(LRLabels[6]);
toppingPanel.append(beef);
toppingPanel.append(beefRight);
toppingPanel.append(LRLabels[7]);
toppingPanel.append(beefExtra);
toppingPanel.append(LRLabels[8]);
toppingPanel.append(beefLabel);
toppingPanel.append(chickenLeft);
toppingPanel.append(LRLabels[9]);
toppingPanel.append(chicken);
toppingPanel.append(chickenRight);
toppingPanel.append(LRLabels[10]);
toppingPanel.append(chickenExtra);
toppingPanel.append(LRLabels[11]);
toppingPanel.append(chickenLabel);
toppingPanel.append(document.createElement("br"));
toppingPanel.append(greenBellPepperLeft);
toppingPanel.append(LRLabels[12]);
toppingPanel.append(greenBellPepper);
toppingPanel.append(greenBellPepperRight);
toppingPanel.append(LRLabels[13]);
toppingPanel.append(greenBellPepperExtra);
toppingPanel.append(LRLabels[14]);
toppingPanel.append(greenBellPepperLabel);
toppingPanel.append(hamLeft);
toppingPanel.append(LRLabels[15]);
toppingPanel.append(ham);
toppingPanel.append(hamRight);
toppingPanel.append(LRLabels[16]);
toppingPanel.append(hamExtra);
toppingPanel.append(LRLabels[17]);
toppingPanel.append(hamLabel);
toppingPanel.append(document.createElement("br"));
toppingPanel.append(italianSausageLeft);
toppingPanel.append(LRLabels[18]);
toppingPanel.append(italianSausage);
toppingPanel.append(italianSausageRight);
toppingPanel.append(LRLabels[19]);
toppingPanel.append(italianSausageExtra);
toppingPanel.append(LRLabels[20]);
toppingPanel.append(italianSausageLabel);
toppingPanel.append(jalepenoLeft);
toppingPanel.append(LRLabels[21]);
toppingPanel.append(jalepeno);
toppingPanel.append(jalepenoRight);
toppingPanel.append(LRLabels[22]);
toppingPanel.append(jalepenoExtra);
toppingPanel.append(LRLabels[23]);
toppingPanel.append(jalepenoLabel);
toppingPanel.append(document.createElement("br"));
toppingPanel.append(meatballLeft);
toppingPanel.append(LRLabels[24]);
toppingPanel.append(meatball);
toppingPanel.append(meatballRight);
toppingPanel.append(LRLabels[25]);
toppingPanel.append(meatballExtra);
toppingPanel.append(LRLabels[26]);
toppingPanel.append(meatballLabel);
toppingPanel.append(mushroomLeft);
toppingPanel.append(LRLabels[27]);
toppingPanel.append(mushroom);
toppingPanel.append(mushroomRight);
toppingPanel.append(LRLabels[28]);
toppingPanel.append(mushroomExtra);
toppingPanel.append(LRLabels[29]);
toppingPanel.append(mushroomLabel);
toppingPanel.append(document.createElement("br"));
toppingPanel.append(olivesLeft);
toppingPanel.append(LRLabels[30]);
toppingPanel.append(olives);
toppingPanel.append(olivesRight);
toppingPanel.append(LRLabels[31]);
toppingPanel.append(olivesExtra);
toppingPanel.append(LRLabels[32]);
toppingPanel.append(olivesLabel);
toppingPanel.append(onionLeft);
toppingPanel.append(LRLabels[33]);
toppingPanel.append(onion);
toppingPanel.append(onionRight);
toppingPanel.append(LRLabels[34]);
toppingPanel.append(onionExtra);
toppingPanel.append(LRLabels[35]);
toppingPanel.append(onionLabel);
toppingPanel.append(document.createElement("br"));
toppingPanel.append(pepperoniLeft);
toppingPanel.append(LRLabels[36]);
toppingPanel.append(pepperoni);
toppingPanel.append(pepperoniRight);
toppingPanel.append(LRLabels[37]);
toppingPanel.append(pepperoniExtra);
toppingPanel.append(LRLabels[38]);
toppingPanel.append(pepperoniLabel);
toppingPanel.append(pineappleLeft);
toppingPanel.append(LRLabels[39]);
toppingPanel.append(pineapple);
toppingPanel.append(pineappleRight);
toppingPanel.append(LRLabels[40]);
toppingPanel.append(pineappleExtra);
toppingPanel.append(LRLabels[41]);
toppingPanel.append(pineappleLabel);
toppingPanel.append(document.createElement("br"));
toppingPanel.append(porkLeft);
toppingPanel.append(LRLabels[42]);
toppingPanel.append(pork);
toppingPanel.append(porkRight);
toppingPanel.append(LRLabels[43]);
toppingPanel.append(porkExtra);
toppingPanel.append(LRLabels[44]);
toppingPanel.append(porkLabel);
toppingPanel.append(tomatoLeft);
toppingPanel.append(LRLabels[45]);
toppingPanel.append(tomato);
toppingPanel.append(tomatoRight);
toppingPanel.append(LRLabels[46]);
toppingPanel.append(tomatoExtra);
toppingPanel.append(LRLabels[47]);
toppingPanel.append(tomatoLabel);




//pizza image
pizzaDiv.append(sauce);
pizzaDiv.append(cheese);
pizza.src = "images/dough.png";
sauce.src = "images/sauce/sauce_Marinara.png";
cheese.src = "images/cheese_mozz.png";





// var testButton = document.createElement("button");
// testButton.innerHTML = "Test Button";
// pizzaMaker.append(testButton);

for(var i = 0; i <= ((toppingPanel.childNodes.length/5)*2)-1; i++){
    var toppingImage = document.createElement("img");
    toppingImage.setAttribute("class", "pizza-image");
    toppingImage.setAttribute("id", "topping");
    pizzaImageToppings.splice(i, 0, toppingImage);
    pizzaDiv.append(pizzaImageToppings[i]);
    // console.log(pizzaImageToppings[i]);
}

// alert(document.body.clientWidth)

function PizzaDisplay(){
    if(pizzaObject.size == "small"){
        if(document.body.clientWidth < 525){
            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '225px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '225px';
            }
            pizzaDiv.style.width = '225px';
        }
        else{

            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '225px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '225px';
            }
            pizzaDiv.style.width = '225px';
        }
    }
    else if(pizzaObject.size == "medium"){
        if(document.body.clientWidth < 525){
            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '275px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '275px';
            }
            pizzaDiv.style.width = '275px';
        }
        else{

            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '325px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '325px';
            }
            pizzaDiv.style.width = '325px';
        }
    }
    else if(pizzaObject.size == "large"){
        if(document.body.clientWidth < 525){
            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '325px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '325px';
            }
            pizzaDiv.style.width = '325px';
        }
        else{
            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '425px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '425px';
            }
            pizzaDiv.style.width = '425px';
        }

    }
    else if(pizzaObject.size == "xl"){
        if(document.body.clientWidth < 525){
            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '375px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '375px';
            }
            pizzaDiv.style.width = '375px';
        }
        else{

            
            for(var i = 0; i <= document.getElementsByClassName("pizza-image").length-1; i++){
                document.getElementsByClassName("pizza-image")[i].style.width  = '525px';
                document.getElementsByClassName("pizza-image")[i].style.height  = '525px';
            }
            pizzaDiv.style.width = '525px';
        }
    }

    if(pizzaObject.sauce == "bbq"){
        sauce.src = "images/sauce/sauce_BBQ.png";
    }
    else if(pizzaObject.sauce == "buffalo"){
        sauce.src = "images/sauce/sauce_Buffalo.png";
    }
    else if(pizzaObject.sauce == "marinara"){
        sauce.src = "images/sauce/sauce_Marinara.png";
    }
    else if(pizzaObject.sauce == "white"){
        sauce.src = "images/sauce/sauce_WhiteSauce.png";
    }

    if(pizzaObject.hasCheese){
        cheese.style.display = "block";
    }
    else{
        cheese.style.display = "none";
    }

    for(var i = 0; i <= pizzaObject.toppings.length-1; i++){
        if(pizzaObject.toppings[i].length > 0){
            pizzaImageToppings[i].style.display = "block";
            if(pizzaObject.toppings[i].includes("bacon")){
                pizzaImageToppings[i].src = "images/toppings/topping_Bacon.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Bacon.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("banana-pepper")){
                pizzaImageToppings[i].src = "images/toppings/topping_BananaPepper.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_BananaPepper.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("beef")){
                pizzaImageToppings[i].src = "images/toppings/topping_Beef.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Beef.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("chicken")){
                pizzaImageToppings[i].src = "images/toppings/topping_Chicken.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Chicken.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("green-bell-pepper")){
                pizzaImageToppings[i].src = "images/toppings/topping_GreenBellPepper.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_GreenBellPepper.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("ham")){
                pizzaImageToppings[i].src = "images/toppings/topping_Ham.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Ham.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("italian-sausage")){
                pizzaImageToppings[i].src = "images/toppings/topping_ItalianSausage.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_ItalianSausage.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("jalepeno")){
                pizzaImageToppings[i].src = "images/toppings/topping_Jalepeno.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Jalepeno.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("meatball")){
                pizzaImageToppings[i].src = "images/toppings/topping_Meatball.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Meatball.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("mushroom")){
                pizzaImageToppings[i].src = "images/toppings/topping_Mushroom.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Mushroom.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("olives")){
                pizzaImageToppings[i].src = "images/toppings/topping_Olives.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Olives.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("onion")){
                pizzaImageToppings[i].src = "images/toppings/topping_Onion.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Onion.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("pepperoni")){
                pizzaImageToppings[i].src = "images/toppings/topping_Pepperoni.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Pepperoni.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("pineapple")){
                pizzaImageToppings[i].src = "images/toppings/topping_Pineapple.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Pineapple.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("pork")){
                pizzaImageToppings[i].src = "images/toppings/topping_Pork.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Pork.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
            else if(pizzaObject.toppings[i].includes("tomato")){
                pizzaImageToppings[i].src = "images/toppings/topping_Tomato.png";
                pizzaImageToppings[i].style.clip = "auto";
                pizzaImageToppings[i].style.transform = "scaleX(1)";
                if(pizzaObject.toppings[i].includes("extra")){
                    pizzaImageToppings[i+pizzaObject.toppings.length].src = "images/toppings/topping_Tomato.png";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "block";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.transform = "rotate(90deg)";
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = "auto";
                }
                else{
                    pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                }
                if(pizzaObject.toppings[i].includes("left")){
                    pizzaImageToppings[i].style.clip = 
                    "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                     + "px, "+ document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(-1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
                else if(pizzaObject.toppings[i].includes("right")){
                    pizzaImageToppings[i].style.clip = "rect(0px, "+ document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2
                    + "px, "+document.getElementsByClassName("pizza-image")[0].style.height + ", 0px)" ;
                    pizzaImageToppings[i].style.transform = "scaleX(-1)";
                    if(pizzaObject.toppings[i].includes("extra")){
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.clip = 
                        "rect(0px, " + document.getElementsByClassName("pizza-image")[0].style.height + 
                        ", "+document.getElementsByClassName("pizza-image")[0].style.width.substring(0,3)/2+"px, 0px)";
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.transform += "scaleY(1)"
                    }
                    else{
                        pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
                    }
                }
            }
        }
        else{
            pizzaImageToppings[i].style.display = "none";
            pizzaImageToppings[i+pizzaObject.toppings.length].style.display = "none";
        }
    }
    // alert("method has run");
    pizzaObject.price = priceCalc(pizzaObject);
    price.innerHTML = "price: " + pizzaObject.price;
    var displayDeal = 0;
    for(var i = 0; i <= pizzaObject.toppings.length-1; i++){

        if(pizzaObject.toppings[i].length > 0){
            displayDeal++;
            if(pizzaObject.toppings[i].includes("extra")){
                displayDeal++;
            }
        }
        
    }

    if(displayDeal >= 5){
        deal.innerHTML = "Special Deal: 5 Toppings for $3";
    }
    else{
        deal.innerHTML = "Special Deal: Inactive";
    }

}
