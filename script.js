//Food Ordering
let FoodPrice;
let FoodSelected;
function orderFood(div) {
  const ChosenFood = document.querySelector(".food .selected");
  if (ChosenFood !== null) {
    ChosenFood.classList.remove("selected");
    ChosenFood.classList.add("transparent");
  }
  div.classList.add("selected");
  div.classList.remove("transparent");
  FoodPrice = document.querySelector(".food .selected h2 span");
  FoodPrice = Number(FoodPrice.innerHTML.replace(",", "."));
  FoodSelected = document.querySelector(".food .selected h3");
  FoodSelected = FoodSelected.innerHTML;
  makeGreen();
  Price();
  openWhatsApp();
  orderText();
}

//Drink Ordering
let DrinkPrice;
let DrinkSelected;
function orderDrink(div) {
  const ChosenDrink = document.querySelector(".drink .selected");
  if (ChosenDrink !== null) {
    ChosenDrink.classList.remove("selected");
    ChosenDrink.classList.add("transparent");
  }
  div.classList.add("selected");
  div.classList.remove("transparent");
  DrinkPrice = document.querySelector(".drink .selected h2 span");
  DrinkPrice = Number(DrinkPrice.innerHTML.replace(",", "."));
  DrinkSelected = document.querySelector(".drink .selected h3");
  DrinkSelected = DrinkSelected.innerHTML;
  makeGreen();
  Price();
  openWhatsApp();
  orderText();
}

//Dessert Ordering
let DessertPrice;
let DessertSelected;
function orderDessert(div) {
  const ChosenDessert = document.querySelector(".dessert .selected");
  if (ChosenDessert !== null) {
    ChosenDessert.classList.remove("selected");
    ChosenDessert.classList.add("transparent");
  }
  div.classList.add("selected");
  div.classList.remove("transparent");
  DessertPrice = document.querySelector(".dessert .selected h2 span");
  DessertPrice = Number(DessertPrice.innerHTML.replace(",", "."));
  DessertSelected = document.querySelector(".dessert .selected h3");
  DessertSelected = DessertSelected.innerHTML;
  makeGreen();
  Price();
  openWhatsApp();
  orderText();
}

//Calculations
let FinalPrice = 0;
function Price() {
  if (
    FoodPrice !== undefined &&
    DrinkPrice !== undefined &&
    DessertPrice !== undefined
  ) {
    FinalPrice = (FoodPrice + DrinkPrice + DessertPrice).toFixed(2);
  }
  openWhatsApp();
  orderText();
}

//Bottom Menu and Confirm Menu
function makeGreen() {
  if (
    FoodPrice !== undefined &&
    DrinkPrice !== undefined &&
    DessertPrice !== undefined
  ) {
    const text = document.querySelector(".bottom-menu h2");
    const button = document.querySelector(".bottom-menu button");
    text.innerHTML = "Fechar pedido";
    button.classList.add("confirm");
    button.classList.add("hover");
    button.classList.remove("button-color");
  }
}

let Name;
let Location;
function confirmOrder() {
  if (
    FoodPrice !== undefined &&
    DrinkPrice !== undefined &&
    DessertPrice !== undefined
  ) {
    const EnableConfirm = document.querySelector(".confirm-menu");
    EnableConfirm.classList.remove("hidden");
    EnableConfirm.classList.add("flex");
    Name = prompt("Nos informe seu nome, por favor:");
    Location = prompt("Nos informe seu endereço, por favor:");
  }
}

function openWhatsApp() {
  let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${FoodSelected}
  - Bebida: ${DrinkSelected}
  - Sobremesa: ${DessertSelected}
  Total: R$ ${FinalPrice}

  Nome: ${Name}
  Endereço: ${Location}`);
  let link = document.querySelector(".confirm-menu a");
  link.setAttribute("href", "https://wa.me/5548996994427?text=" + message);
}

function closeMenu() {
  const CloseMenu = document.querySelector(".confirm-menu");
  CloseMenu.classList.remove("flex");
  CloseMenu.classList.add("hidden");
}

function orderText() {
  const FoodText = document.querySelector(".food-name");
  FoodText.innerHTML = `${FoodSelected}`;
  const FoodCost = document.querySelector(".food-price");
  FoodValue = document.querySelector(".food .selected h2 span");
  FoodValue = FoodValue.innerHTML;
  FoodCost.innerHTML = `${FoodValue}`;

  const DrinkText = document.querySelector(".drink-name");
  DrinkText.innerHTML = `${DrinkSelected}`;
  const DrinkCost = document.querySelector(".drink-price");
  DrinkValue = document.querySelector(".drink .selected h2 span");
  DrinkValue = DrinkValue.innerHTML;
  DrinkCost.innerHTML = `${DrinkValue}`;

  const DessertText = document.querySelector(".dessert-name");
  DessertText.innerHTML = `${DessertSelected}`;
  const DessertCost = document.querySelector(".dessert-price");
  DessertValue = document.querySelector(".dessert .selected h2 span");
  DessertValue = DessertValue.innerHTML;
  DessertCost.innerHTML = `${DessertValue}`;

  const TotalCost = document.querySelector(".total");
  FinalPrice = FinalPrice.replace(".", ",");
  TotalCost.innerHTML = `R$ ${FinalPrice}`;
}
