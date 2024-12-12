

let Fahrenheit = document.getElementById ("Fahrenheit")
let Celsius = document.getElementById ("Celsius")
let Kelvin = document.getElementById ("Kelvin")

Celsius.oninput = function (){
    let f = (parseFloat(Celsius.value)
    *9)/5+32;
    Fahrenheit.value=parseFloat(f.toFixed
    (2));

}

Fahrenheit.oninput = function (){
    let c = ((parseFloat(Fahrenheit.value)-32)*5)/9;
    Celsius.value=parseFloat(c.toFixed(2));

}