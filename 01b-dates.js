//*https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript

const d = new Date();
console.log(d);

console.log(d.toLocaleDateString()); //formato de la máquina en que estén

const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
}

const toLocale = (date) => date.toLocaleDateString("es", options);

console.log(toLocale(d));