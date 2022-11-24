// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}



function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}



function renderWhiteSauce() {
  const sauceElement = document.querySelector('.sauce');

  if (state.whiteSauce) {
    sauceElement.classList.add('sauce-white');
  } else {
    sauceElement.classList.remove('sauce-white');
  }
}


function renderGlutenFreeCrust() {
  const glutenElement = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    glutenElement.classList.add('crust-gluten-free');
  } else {
    glutenElement.classList.remove('crust-gluten-free');
  }
}
function renderButtons() {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.classList.remove('active');

    const btnStateName = btn.innerHTML
      .replace(' ', '')
      .replace('-', '')
      .toLowerCase();

    for (let st in state) {
      if (btnStateName === st.toLowerCase() && state[st]) {
        btn.classList.add('active');
      }
    }
  });
}


function renderPrice() {
  const productList = document.querySelector('.panel.price ul');
  const totalPrice = document.querySelector('.panel.price strong');
  let sumPrice = basePrice;
  let selected = ``;
  for (let ingredient in state) {
    if (state[ingredient]) {
      sumPrice += ingredients[ingredient].price;
      selected += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
    }
  }
  productList.innerHTML = selected;
  totalPrice.innerHTML = `$${sumPrice}`;
}


renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
