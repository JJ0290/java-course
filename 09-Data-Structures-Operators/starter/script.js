'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    //También se puede asignar nombre de esta manera.
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // //Before ES6
  // openingHours: openingHours,

  // ES6 enhanced object literals. Si tiene el mismo nombre pillará el objeto.
  openingHours,

  order(startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  // LOs nombres de las variables uqe pasamos tienen que coincidir con la función que le llama (restaurant.orderDelivery).
  orderDelivery({ startedIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(startedIndex);
    console.log(
      `Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Split & Join

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  //Pone el primer caracter en mayúsculas
  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
    //Otra manera
    //nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//Padding -> Rellenar
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; //Una manera de convertir a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4384836454354));
console.log(maskCreditCard('65464864684'));

//Repeat
const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'a'.repeat(n)}
  `);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

/** //////////////////////////////////////
 * Working with String - Part 2 */

// const airLine = 'TAP Air Portugal';

// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

// //Fix capitalization in name
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passergerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passergerCorrect);

// //comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// //Versión larga
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// //Versión optima
// const normalicedEmail = loginEmail.toLowerCase().trim();
// console.log(normalicedEmail);
// console.log(email === normalicedEmail);

// // replacing
// const priceEU = '288,97€';
// const priceUS = priceEU.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate')); //Sólo cambia el primer door. En el futuro habrá un replaceAll

// console.log(announcement.replace(/door/g, 'gate')); //Para solucionar el problema.

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus familiy');
// }

// //Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('Your are NOT allowd on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

/** //////////////////////////////////////
 * Working with String - Part 1 */

// const plane = 'A320';

// console.log(plane[0]);

// console.log(airLine.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.lastIndexOf('Portugal'));

// //Slice method
// console.log(airLine.slice(4)); // log: "Air Portugal". Hay que guardarlo en variable.
// console.log(airLine.slice(4, 7)); // log: Air

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

// console.log(airLine.slice(-2)); // Cuenta por atras
// console.log(airLine.slice(1, -1)); // Empieza y acaba con uno extra

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat :(');
//   else console.log('You got lucky :)');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(new String('jonas'));
// console.log(typeof new String('jonas').slice(1)); //Ejempl raruno para entender Strings.

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// //const answer = Number(prompt('Your answer'));
// const answer = 3;

// console.log(answer);

// ////El resultado de la operación(true/false) nos da la respuesta.
// console.log(question.get(question.get('correct') === answer));

// //Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

/**
 * /////////////////////////////////////
 *  Maps: Fundamentals */

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categorias', ['Italian', 'Pizzeria', 'Vegetarian', 'Organiz'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close :(');

// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open' && time < rest.get('close'))));

// console.log(rest.has('categories'));
// rest.delete(2);
// //rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

/*
////////////////////////////////
* Sets */

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('Jonas'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');

// console.log(orderSet);

// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //Exampe
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jonasschmedtamann').size);

// //property NAMES. Pillamos el nombre de la propiedad.
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES. Pillamos el valor de la propiedad.
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// //Deconstruimos la entrada del objeto
// for (const [key, { open, close }] of entries) {
//   console.log(x);
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/** Optiones Chaining ************************/

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'close';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// ////Saltará que el método no existe porque el operador ? devuelve undefined en vez de error.
// // console.log(restaurant.orderrisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

//Lo mismo que antes pero del modo feo.
// if (users.length > 0 ) console.log(users[0].name);
// else console.log('user array empty')

//const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// //Deconstruimos el 'item' para asignarlo en el for.
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// //restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/**
 * ///////////////////////////////////////
 *  Short Circuiting (&& and ||) */

// console.log('----- OR ----');

// // Use ANY data type, return ANY data type, short-circuiting

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// //Si NO está definido no es válido.
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// // En cuanto detecta un undefined devuelve el valor
// console.log('Hello' && 23 && null && 'jonas');

// // Podemos evaluar si orderPizza está definido con un if, o con un short.circuit &&
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinash');

/**
 * //////////////
 * Rest Pattern and Parameters */

// // 1) Destructuring

// //SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , rissoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rissoto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// console.log(x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

/**
 * ///////////////////
 * The Spread Operator ... */

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //Despliega el array
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // Separa el array
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, '', 's.'];
// console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta!. Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// //Mucho mejor la 2da forma de pasar el array
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/**
 * Destructuring Objects
 */
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   startedIndex: 2,
// });

// restaurant.orderDelivery({
//   // time: '22:30',
//   address: 'Via del Sole,21',
//   // mainIndex: 2,
//   startedIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //A menu le damos un valor inicial; =[]
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Destructuring arrays //
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
