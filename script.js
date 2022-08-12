//Food Ordering
function orderFood(DivClass) {
  const ChosenFood = document.querySelector(".food .selected");
  if (ChosenFood !== null) {
    ChosenFood.classList.remove("selected");
    ChosenFood.classList.add("transparent");
  }
  const select = document.querySelector(DivClass);
  select.classList.add("selected");
  select.classList.remove("transparent");
}

//Drink Ordering
function orderDrink(DivClass) {
  const ChosenDrink = document.querySelector(".drink .selected");
  if (ChosenDrink !== null) {
    ChosenDrink.classList.remove("selected");
    ChosenDrink.classList.add("transparent");
  }
  const select = document.querySelector(DivClass);
  select.classList.add("selected");
  select.classList.remove("transparent");
}

//Dessert Ordering
function orderDessert(DivClass) {
  const ChosenDessert = document.querySelector(".dessert .selected");
  if (ChosenDessert !== null) {
    ChosenDessert.classList.remove("selected");
    ChosenDessert.classList.add("transparent");
  }
  const select = document.querySelector(DivClass);
  select.classList.add("selected");
  select.classList.remove("transparent");
}

//Confirm Order Button
function confirmOrder(ButtonClass) {
  const select = document.querySelector(ButtonClass);
  const text = document.querySelector(".order-button h2");
  text.innerHTML = "Fechar pedido";
  select.classList.add("confirm");
  select.classList.add("hover");
  select.classList.remove("button-color");
}
