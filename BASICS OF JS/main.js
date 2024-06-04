alert('Hello World!')

// let age = 19;
// age = 29;

// const age = 90;
// age = 100;
// console.log(age);

// const score; // it will give error bcs const needs to be initialized while let can be initialize later
// console.log(score);


// STRING,BOOL,NUM,UNDEF,NULL,SYMBOL
const name = 'Jiya';
const age = 19;
const x = null;
const rating = 4.5;
const isCool = true;
const y =undefined;
let z; 
console.log(typeof name);
// concatenation
console.log('my name is ' + name + 'and my age is ' + age);
//Template String
console.log(`My name is ${name} and I am ${age}`);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,2));
console.log(name.substring(0,2).toUpperCase());
console.log(name.split(''));

//Arrays - hold multiple 
const fruits = ['apples', 'oranges','pears'];
console.log(fruits[1]);
fruits.push('mangoes');
fruits.unshift('banana');
fruits.pop();
console.log(fruits);
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'))

//Objects Literals
const person = {
    FirstName: 'Jiya',
    LastName: 'Chugh',
    age: 19,
    hobbies: ['music','dance','yoga'],
    address:{
        city: 'New Delhi',
        state: 'Delhi,'
    }
}
person.email = 'jiyaachugh@gmail.com';
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person);

const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Meeting with boss',
      isCompleted: true
    },
    {
      id: 3,
      text: 'Dentist appt',
      isCompleted: false
    }
  ];
  
  console.log(todos);
  const todoJSON = JSON.stringify(todos);
  console.log(todoJSON);

  // FOR LOOP
  for(let i = 1; i < 11; i++) {
    console.log(`For Loop number: ${i}`);
  }
  for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
  }
  for(let todo of todos) {
    console.log(todo)
  }
  
  // WHILE LOOP
  let i = 1;
  while(i <=10 ) {
    console.log(`While Loop number: ${i}`);
    i++;
  }
  //FOREACH, MAP, FILTER
  todos.forEach(function(todo) {
    console.log(todo.text);
  });
  const todoText = todos.map(function(todo) {
    return todo.text;
  });
console.log(todoText)

const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
})
console.log(todoCompleted)

//IF ELSE
const j = 10;
if (j == 10) {
  console.log('j is 10');
}

const m = '10';
if (j === 10) {
  console.log('m is 10');
} else if (m>10) {
  console.log('m is greater than 10');
} else { console.log('m is lesser than 10');
}

const k = 11;
const l = 17;
if(k>10 && l>15) {
  console.log('k is greater than 10 and l is lesser than 15')
}

//TERNARY OPERATOR
const t = 10;
const color = t > 10 ? 'red' : 'blue';
// console.log(color);


//SWITCH CASES
switch(color) {
  case 'red':
    console.log('red color')
  break;
  case 'blue':
    console.log('blue color')
  break;
  default:
    console.log('not red or blue color')
}

//FUNCTIONS
function addNums(num1,num2) {
  console.log(num1+num2);
}
addNums(9,8);

// CONSTRUCTOR FUNCTION
function Person(firstName,LastName,dob) {
  this.firstName = firstName;
  this.LastName = LastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    C
  }
}

//CLASS
class Person0 {
  constructor(firstName,LastName,dob) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return this.dob.getFullName();
  }
}
//Instantiate object
const Person1 = new Person('Jiya', 'Chugh', '12-14-2004');
const Person2 = new Person('Yatharth','Singh','12-03-2003')
console.log(Person1);
console.log(Person2.dob.getFullYear());

// console.log(Person0.getBirthYear())
// console.log(Person0.getFullName())


console.log(window);
alert(1);

// single element
//  Multiple element
// const form = console.log(document.getElementById('my-form'));
// console.log(form);
// console.log(document.querySelector('.container'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByClassName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelectorAll('.item');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// btn.addEventListener('mouseover',(e) => {
//   e.preventDefault
//   // console.log(e.target.id);
//   document.querySelector('#my-form').style.background = '#ccc'
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault
  // console.log(nameInput.value);
  if(nameInput === '' || emailInput === '') {
    // alert('Please Enter Fields!'
    msg.classList.add('error')
      msg.innerHTML = 'Please Enter all Fields!';
      setTimeout(() => msg.remove(), 3000)
  } else {
    // console.log('success');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);
    //clear fields
    nameInput.value = '';
    email.Input.value = '';
  }
}
