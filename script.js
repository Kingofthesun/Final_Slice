var pizzaMaker = document.getElementById("pizza");
var pizza = document.createElement("img");
var pizzaDiv = document.createElement("div");

var createDiv = document.createElement("div");

var sizePanel = document.createElement("div");
var smallPizzaLabel = document.createElement("label");
var mediumPizzaLabel = document.createElement("label");
var largePizzaLabel = document.createElement("label");
var xlPizzaLabel = document.createElement("label");

var smallPizza = document.createElement("input");
smallPizza.setAttribute("type", "radio");
smallPizza.setAttribute("name", "size");
smallPizza.setAttribute("value", "small")
smallPizzaLabel.setAttribute("for", "small");
smallPizzaLabel.innerHTML = "Small";
var mediumPizza = document.createElement("input");
mediumPizza.setAttribute("type", "radio");
mediumPizza.setAttribute("name", "size");
mediumPizza.setAttribute("value", "medium")
mediumPizzaLabel.setAttribute("for", "medium");
mediumPizzaLabel.innerHTML = "Medium";
var largePizza = document.createElement("input");
largePizza.setAttribute("type", "radio");
largePizza.setAttribute("name", "size");
largePizza.setAttribute("value", "large")
largePizzaLabel.setAttribute("for", "large");
largePizzaLabel.innerHTML = "Large";
var xlPizza = document.createElement("input");
xlPizza.setAttribute("type", "radio");
xlPizza.setAttribute("name", "size");
xlPizza.setAttribute("value", "xl")
xlPizzaLabel.setAttribute("for", "xl");
xlPizzaLabel.innerHTML = "Extra Large";



pizzaMaker.appendChild(pizzaDiv);
pizzaDiv.appendChild(pizza);
pizzaMaker.appendChild(createDiv);
createDiv.appendChild(sizePanel);
sizePanel.appendChild(smallPizza);
sizePanel.appendChild(smallPizzaLabel);
sizePanel.appendChild(mediumPizza);
sizePanel.appendChild(mediumPizzaLabel);
sizePanel.appendChild(largePizza);
sizePanel.appendChild(largePizzaLabel);
sizePanel.appendChild(xlPizza);
sizePanel.appendChild(xlPizzaLabel);
