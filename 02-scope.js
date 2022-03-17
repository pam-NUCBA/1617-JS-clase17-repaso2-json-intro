//*https://www.w3schools.com/js/js_scope.asp

{
    //este es un bloque. con let y const quedan encapsulados. con var no!!
    var hola = 157;
    let chau = 5465;
}

//este sí me deja:
console.log(hola);
console.log(chau); //va a tirar error!

const probandoScope = () => {
    let saludo = "probando scope dentro de una función!";
    return saludo;
    //aunque sea var, el function scope ya existía! no puedo accederla directamente:
    var cosita = "cosas";
    return cosita;
};

//podemos acceder a través de la función:
console.log(probandoScope());
//si llamo directamente a la variable no puedo!
console.log(saludo); // va a tirar error!

console.log(cosita); // va a tirar error!