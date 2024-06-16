const add = () => {
  console.log(2+3);
}

function runTwice(fun) {
  fun();
  fun();
}

runTwice(add);

const startButton = document.querySelector(".js-start-button");

startButton.addEventListener('click', updateStart);


function updateStart() {
  if (startButton.innerText === 'Start') {
    startButton.innerText = 'Loading...';
    setTimeout(() => {
      startButton.innerHTML = 'Finished!';
    }, 3000);
  }
}

const cartButton = document.querySelector('.js-cart-button');

cartButton.addEventListener('click', updateCart);

let notif = null;

function updateCart() {
  if (notif) {
    clearTimeout(notif);
  }
  const notifText = document.querySelector('.js-notif');
  notifText.innerText = 'Added';
  notif = setTimeout(() => {
    notifText.innerHTML = '';
    notif = null;
  }, 2000)
}

let messages = 0;
function titleStrobe() {
  setInterval(() => {
    if (document.title === 'App' && messages > 0) {
      document.title = `(${messages}) new messages`;
    } else {
      document.title = 'App';
    }
  }, 2000);
}

const addButton = document.querySelector('.js-add-button');

addButton.addEventListener('click', () => {
  messages++;
})

const removeButton = document.querySelector('.js-remove-button');

removeButton.addEventListener('click', () => {
  if (messages > 0) {
    messages--;
  }
})

titleStrobe();

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2,3));

function countPositive(nums) {
  let positiveNums = 0;
  nums.forEach((value) => {
    if (value > 0) {
      positiveNums++;
    }
  })
  return positiveNums;
}

const nums = [1, 0, -5, 6];
console.log(countPositive(nums));

function addNum(array, num) {
  return array.map((x) => x + num);
}

console.log(addNum(nums, 1));

const foods = ['egg', 'apple', 'banana', 'grape', 'egg', 'egg'];

function removeEgg(foods) {
  let eggsRemoved = 0;
  const newFoods = foods.filter((value) => {
    if (value === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    } else {
      return true;
    }
  });
  return newFoods;
}

console.log(removeEgg(foods));
