function priceCalc(calcPizza){
    var price = 0.00;
    if(calcPizza.size == "small"){
        price += 5.50
    }
    else if(calcPizza.size == "medium"){
        price += 7.50
    }
    else if(calcPizza.size == "large"){
        price += 9.50
    }
    else if(calcPizza.size == "xl"){
        price += 10.50
    }
    //sauce none code
    if(calcPizza.hasCheese){
        price += 1.25;
    }
    var toppingNum = 0;    
    for(var i = 0; i <= calcPizza.toppings.length-1; i++){
        if(calcPizza.toppings[i].length > 0){
            toppingNum++;
            if(toppingNum > 1){
                price += 1.00;
            }
            if(calcPizza.toppings[i].includes("extra")){
                price += 1.00;
                toppingNum++;
            }
        }
    }

    if(toppingNum >= 5){
        price -= 2.00;
    }

    return "$" + price;
}


function PizzaConstructor(size, sauce, toppings, hasCheese){
    this.size = size;
    this.sauce = sauce;
    this.toppings = toppings;
    this.hasCheese = hasCheese;
    this.price = priceCalc(this);
}

function Pizza(size, sauce){
    this.size = size;
    this.sauce = sauce;
    this.hasCheese = false;
    this.toppings = [];
    for(var i = 0; i <= (toppingPanel.childNodes.length/5)-1; i++){
        this.toppings.splice(0,0,"");
    }
    this.price = priceCalc(this);
}

var pizzaObject = new Pizza("medium", "marinara");
PizzaDisplay();

smallPizza.onchange = function(){
    pizzaObject.size = "small";
    PizzaDisplay();
}

mediumPizza.onchange = function(){
    pizzaObject.size = "medium";
    PizzaDisplay();
}

largePizza.onchange = function(){
    pizzaObject.size = "large"
    PizzaDisplay();
}

xlPizza.onchange = function(){
    pizzaObject.size = "xl"
    PizzaDisplay();
}

bbqSauce.onchange = function(){
    pizzaObject.sauce = "bbq"
    PizzaDisplay();
}

buffaloSauce.onchange = function(){
    pizzaObject.sauce = "buffalo"
    PizzaDisplay();
}

marinaraSauce.onchange = function(){
    pizzaObject.sauce = "marinara"
    PizzaDisplay();
}

whiteSauce.onchange = function(){
    pizzaObject.sauce = "white"
    PizzaDisplay();
}

addCheese.onchange = function(){
    pizzaObject.hasCheese = !pizzaObject.hasCheese; 
    PizzaDisplay();
}


for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
    if(toppingPanel.childNodes[i].localName != "label"){

        toppingPanel.childNodes[i].onchange = function(){
            for(var j = 0; j <= toppingPanel.childNodes.length-1; j++){
                if(toppingPanel.childNodes[j].localName != "label"){
                    if(toppingPanel.childNodes[j].name == this.name){
                        if(!this.checked && toppingPanel.childNodes[j].localName != "label"
                        && toppingPanel.childNodes[j].value.substring(toppingPanel.childNodes[j].value.length-6) == "-extra"){
                            toppingPanel.childNodes[j].checked = false;
                        }                
                        if(!this.value.includes("-extra")){
                            toppingPanel.childNodes[j].disabled = !toppingPanel.childNodes[j].disabled;
                        }
                    }
                }
            }
            this.disabled = false
            
            console.log(pizzaObject.toppings);
            console.log(this);
                for(var j = 0; j <= pizzaObject.toppings.length-1; j++){
                    
                    if(pizzaObject.toppings[j].includes(this.name)
                    && !this.value.includes("-extra")
                    && this.checked){
                        pizzaObject.toppings[j] = this.value;
                    }
                    else if(pizzaObject.toppings[j].includes(this.name)
                    && this.value.includes("-extra")
                    && this.checked){
                        pizzaObject.toppings[j] += "-extra";
                        j = pizzaObject.toppings.length-1;

                    }
                    else if(pizzaObject.toppings[j].includes(this.name)
                    && this.value.includes("-extra")
                    && !this.checked){
                        pizzaObject.toppings[j] = pizzaObject.toppings[j].substring(0,pizzaObject.toppings[j].length-6);
                    }
                    else if(pizzaObject.toppings[j].includes(this.name)
                    && !this.value.includes("-extra")
                    && !this.checked){
                        pizzaObject.toppings[j] = "";
                        j = pizzaObject.toppings.length-1;
                    }
                    else if(pizzaObject.toppings[j] == ""
                    && this.checked){
                        pizzaObject.toppings[j] = this.value;
                        j = pizzaObject.toppings.length-1;
                    }
                    
                }
                console.log(pizzaObject.toppings);
            PizzaDisplay();
        }
    }
}

defaultCowboy.onchange = function(){
    

    addCheese.checked = true;
    marinaraSauce.checked = true;
    largePizza.checked = true;
    var createToppings = [];

    for(var i = 0; i <= (toppingPanel.childNodes.length/5)-1; i++){
        createToppings.splice(0,0,"");
    }

    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].value == "mushroom"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(0,1,"mushroom")
        }
        else if(toppingPanel.childNodes[i].value == "olives"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(1,1,"olives")
        }
        else if(toppingPanel.childNodes[i].value == "pepperoni"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(2,1,"pepperoni")
        }
        else if(toppingPanel.childNodes[i].value == "italian-sausage"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(3,1,"italian-sausage")
        }
        else{
            toppingPanel.childNodes[i].checked = false;
            if(toppingPanel.childNodes[i].localName != "label" 
            && toppingPanel.childNodes[i].localName != "br"
            && toppingPanel.childNodes[i].value.includes("extra")){
                toppingPanel.childNodes[i].disabled = true;
            }
            else{
                toppingPanel.childNodes[i].disabled = false;
            }
        }

        if(toppingPanel.childNodes[i].name == "mushroom" && 
        toppingPanel.childNodes[i].value != "mushroom"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "olives" && 
        toppingPanel.childNodes[i].value != "olives"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "pepperoni" && 
        toppingPanel.childNodes[i].value != "pepperoni"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "italian-sausage" && 
        toppingPanel.childNodes[i].value != "italian-sausage"){
            toppingPanel.childNodes[i].disabled = true;
        }

    }
    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].localName != "label" 
        && toppingPanel.childNodes[i].localName != "br"
        && toppingPanel.childNodes[i].checked == true){
            toppingPanel.childNodes[i+2].disabled = false;
        }
    }


    pizzaObject = new PizzaConstructor("large", "marinara", createToppings, true)

    PizzaDisplay();
}

defaultVegan.onchange = function(){
    

    addCheese.checked = false;
    marinaraSauce.checked = true;
    smallPizza.checked = true;
    var createToppings = [];

    for(var i = 0; i <= (toppingPanel.childNodes.length/5)-1; i++){
        createToppings.splice(0,0,"");
    }

    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].value == "mushroom"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(0,1,"mushroom")
        }
        else if(toppingPanel.childNodes[i].value == "olives"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(1,1,"olives")
        }
        else if(toppingPanel.childNodes[i].value == "banana-pepper"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(2,1,"banana-pepper")
        }
        else if(toppingPanel.childNodes[i].value == "green-bell-pepper"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(3,1,"green-bell-pepper")
        }
        else if(toppingPanel.childNodes[i].value == "jalepeno"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(4,1,"jalepeno")
        }
        else if(toppingPanel.childNodes[i].value == "onion"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(5,1,"onion")
        }
        else if(toppingPanel.childNodes[i].value == "pineapple"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(6,1,"pineapple")
        }
        else if(toppingPanel.childNodes[i].value == "tomato"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(7,1,"tomato")
        }
        else{
            toppingPanel.childNodes[i].checked = false;
            if(toppingPanel.childNodes[i].localName != "label" 
            && toppingPanel.childNodes[i].localName != "br"
            && toppingPanel.childNodes[i].value.includes("extra")){
                toppingPanel.childNodes[i].disabled = true;
            }
            else{
                toppingPanel.childNodes[i].disabled = false;
            }
        }

        if(toppingPanel.childNodes[i].name == "mushroom" && 
        toppingPanel.childNodes[i].value != "mushroom"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "olives" && 
        toppingPanel.childNodes[i].value != "olives"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "banana-pepper" && 
        toppingPanel.childNodes[i].value != "banana-pepper"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "green-bell-pepper" && 
        toppingPanel.childNodes[i].value != "green-bell-pepper"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "jalepeno" && 
        toppingPanel.childNodes[i].value != "jalepeno"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "onion" && 
        toppingPanel.childNodes[i].value != "onion"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "pineapple" && 
        toppingPanel.childNodes[i].value != "pineapple"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "tomato" && 
        toppingPanel.childNodes[i].value != "tomato"){
            toppingPanel.childNodes[i].disabled = true;
        }

    }
    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].localName != "label" 
        && toppingPanel.childNodes[i].localName != "br"
        && toppingPanel.childNodes[i].checked == true){
            toppingPanel.childNodes[i+2].disabled = false;
        }
    }

    pizzaObject = new PizzaConstructor("small", "marinara", createToppings, false)

    PizzaDisplay();
}


defaultMeatLovers.onchange = function(){
    

    addCheese.checked = false;
    bbqSauce.checked = true;
    mediumPizza.checked = true;
    var createToppings = [];

    for(var i = 0; i <= (toppingPanel.childNodes.length/5)-1; i++){
        createToppings.splice(0,0,"");
    }

    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].value == "beef"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(0,1,"beef")
        }
        else if(toppingPanel.childNodes[i].value == "bacon"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(1,1,"bacon")
        }
        else if(toppingPanel.childNodes[i].value == "chicken"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(2,1,"chicken")
        }
        else if(toppingPanel.childNodes[i].value == "ham"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(3,1,"ham")
        }
        else if(toppingPanel.childNodes[i].value == "italian-sausage"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(4,1,"italian-sausage")
        }
        else if(toppingPanel.childNodes[i].value == "meatball"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(5,1,"meatball")
        }
        else if(toppingPanel.childNodes[i].value == "pepperoni"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(6,1,"pepperoni")
        }
        else if(toppingPanel.childNodes[i].value == "pork"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(7,1,"pork")
        }
        else{
            toppingPanel.childNodes[i].checked = false;
            if(toppingPanel.childNodes[i].localName != "label" 
            && toppingPanel.childNodes[i].localName != "br"
            && toppingPanel.childNodes[i].value.includes("extra")){
                toppingPanel.childNodes[i].disabled = true;
            }
            else{
                toppingPanel.childNodes[i].disabled = false;
            }
        }

        if(toppingPanel.childNodes[i].name == "beef" && 
        toppingPanel.childNodes[i].value != "beef"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "bacon" && 
        toppingPanel.childNodes[i].value != "bacon"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "chicken" && 
        toppingPanel.childNodes[i].value != "chicken"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "ham" && 
        toppingPanel.childNodes[i].value != "ham"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "italian-sausage" && 
        toppingPanel.childNodes[i].value != "italian-sausage"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "meatball" && 
        toppingPanel.childNodes[i].value != "meatball"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "pepperoni" && 
        toppingPanel.childNodes[i].value != "pepperoni"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "pork" && 
        toppingPanel.childNodes[i].value != "pork"){
            toppingPanel.childNodes[i].disabled = true;
        }

    }

    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].localName != "label" 
        && toppingPanel.childNodes[i].localName != "br"
        && toppingPanel.childNodes[i].checked == true){
            toppingPanel.childNodes[i+2].disabled = false;
        }
    }
    pizzaObject = new PizzaConstructor("medium", "bbq", createToppings, false)

    PizzaDisplay();
}

defaultEverything.onchange = function(){
    

    addCheese.checked = true;
    whiteSauce.checked = true;
    xlPizza.checked = true;
    var createToppings = [];

    for(var i = 0; i <= (toppingPanel.childNodes.length/5)-1; i++){
        createToppings.splice(0,0,"");
    }

    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].value == "beef"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(0,1,"beef")
        }
        else if(toppingPanel.childNodes[i].value == "bacon"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(1,1,"bacon")
        }
        else if(toppingPanel.childNodes[i].value == "chicken"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(2,1,"chicken")
        }
        else if(toppingPanel.childNodes[i].value == "ham"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(3,1,"ham")
        }
        else if(toppingPanel.childNodes[i].value == "italian-sausage"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(4,1,"italian-sausage")
        }
        else if(toppingPanel.childNodes[i].value == "meatball"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(5,1,"meatball")
        }
        else if(toppingPanel.childNodes[i].value == "pepperoni"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(6,1,"pepperoni")
        }
        else if(toppingPanel.childNodes[i].value == "pork"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(7,1,"pork")
        }
        else if(toppingPanel.childNodes[i].value == "banana-pepper"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(8,1,"banana-pepper")
        }
        else if(toppingPanel.childNodes[i].value == "green-bell-pepper"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(9,1,"green-bell-pepper")
        }
        else if(toppingPanel.childNodes[i].value == "jalepeno"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(10,1,"jalepeno")
        }
        else if(toppingPanel.childNodes[i].value == "mushroom"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(11,1,"mushroom")
        }
        else if(toppingPanel.childNodes[i].value == "olives"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(12,1,"olives")
        }
        else if(toppingPanel.childNodes[i].value == "onion"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(13,1,"onion")
        }
        else if(toppingPanel.childNodes[i].value == "pineapple"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(14,1,"pineapple")
        }
        else if(toppingPanel.childNodes[i].value == "tomato"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(15,1,"tomato")
        }
        else{
            toppingPanel.childNodes[i].checked = false;
            if(toppingPanel.childNodes[i].localName != "label" 
            && toppingPanel.childNodes[i].localName != "br"
            && toppingPanel.childNodes[i].value.includes("extra")){
                toppingPanel.childNodes[i].disabled = true;
            }
            else{
                toppingPanel.childNodes[i].disabled = false;
            }
        }

        if(toppingPanel.childNodes[i].name == "beef" && 
        toppingPanel.childNodes[i].value != "beef"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "bacon" && 
        toppingPanel.childNodes[i].value != "bacon"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "chicken" && 
        toppingPanel.childNodes[i].value != "chicken"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "ham" && 
        toppingPanel.childNodes[i].value != "ham"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "italian-sausage" && 
        toppingPanel.childNodes[i].value != "italian-sausage"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "meatball" && 
        toppingPanel.childNodes[i].value != "meatball"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "pepperoni" && 
        toppingPanel.childNodes[i].value != "pepperoni"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "pork" && 
        toppingPanel.childNodes[i].value != "pork"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "banana-pepper" && 
        toppingPanel.childNodes[i].value != "banana-pepper"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "green-bell-pepper" && 
        toppingPanel.childNodes[i].value != "green-bell-pepper"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "jalepeno" && 
        toppingPanel.childNodes[i].value != "jalepeno"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "mushroom" && 
        toppingPanel.childNodes[i].value != "mushroom"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "olives" && 
        toppingPanel.childNodes[i].value != "olives"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "onion" && 
        toppingPanel.childNodes[i].value != "onion"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "pineapple" && 
        toppingPanel.childNodes[i].value != "pineapple"){
            toppingPanel.childNodes[i].disabled = true;
        }
        else if(toppingPanel.childNodes[i].name == "tomato" && 
        toppingPanel.childNodes[i].value != "tomato"){
            toppingPanel.childNodes[i].disabled = true;
        }

    }

    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].localName != "label" 
        && toppingPanel.childNodes[i].localName != "br"
        && toppingPanel.childNodes[i].checked == true){
            toppingPanel.childNodes[i+2].disabled = false;
        }
    }
    pizzaObject = new PizzaConstructor("xl", "white", createToppings, true)

    PizzaDisplay();
}

defaultMrVella.onchange = function(){
    

    addCheese.checked = false;
    bbqSauce.checked = true;
    mediumPizza.checked = true;
    var createToppings = [];

    for(var i = 0; i <= (toppingPanel.childNodes.length/5)-1; i++){
        createToppings.splice(0,0,"");
    }

    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].value == "pepperoni"){
            toppingPanel.childNodes[i].checked = true;
            createToppings.splice(2,1,"pepperoni")
        }
        else{
            toppingPanel.childNodes[i].checked = false;
            if(toppingPanel.childNodes[i].localName != "label" 
            && toppingPanel.childNodes[i].localName != "br"
            && toppingPanel.childNodes[i].value.includes("extra")){
                toppingPanel.childNodes[i].disabled = true;
            }
            else{
                toppingPanel.childNodes[i].disabled = false;
            }
        }

        if(toppingPanel.childNodes[i].name == "pepperoni" && 
        toppingPanel.childNodes[i].value != "pepperoni"){
            toppingPanel.childNodes[i].disabled = true;
        }
    }
    for(var i = 0; i <= toppingPanel.childNodes.length-1; i++){
        if(toppingPanel.childNodes[i].localName != "label" 
        && toppingPanel.childNodes[i].localName != "br"
        && toppingPanel.childNodes[i].checked == true){
            toppingPanel.childNodes[i+2].disabled = false;
        }
    }


    pizzaObject = new PizzaConstructor("medium", "bbq", createToppings, false)

    PizzaDisplay();
}

mediumPizza.checked = true;
marinaraSauce.checked = true;