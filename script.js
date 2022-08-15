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
  makeGreen();
}

//Confirm Order Button
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

    let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${FoodSelected}
    - Bebida: ${DrinkSelected}
    - Sobremesa: ${DessertSelected}
    Total: R$ ${FinalPrice}`);
    let link = document.querySelector(".bottom-menu a")
    link.setAttribute("href", "https://wa.me/5548996994427?text="+message);
  }
}
function confirmOrder(button) {
  if (
    FoodPrice !== undefined &&
    DrinkPrice !== undefined &&
    DessertPrice !== undefined
  ) {
  }
}
