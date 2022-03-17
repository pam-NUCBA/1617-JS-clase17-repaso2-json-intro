//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
// *https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//* https://www.w3schools.com/jsref/jsref_obj_date.asp

const newDate = new Date();
console.log(newDate);

const now = Date.now();
console.log(now);
//* y con qué se come? con esto: https://www.epochconverter.com/

//https://www.epochconverter.com/programming/#javascript

//*formas más legibles! (para un humano)

const newDate2 = Date.parse("Mar 16, 2022");
console.log(newDate2);

//*nos va a devolver lo mismo, realmente, pero es más exacto:

const newDate3 = Date.UTC(2022, 2, 16, 19, 59, 20, 500);
console.log(newDate3);

//*fecha legible por humanos!

const newDate4 = Date(2022, 2, 16, 19, 59, 20, 500);
console.log(newDate4);

const date5 = new Date()
const today = date5.getDate()
console.log(today)