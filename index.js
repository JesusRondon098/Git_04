//
console.log("*****Reto2****");
function sumar(x,y) {
    let resultado = x + y
    return resultado
}
function restar(x,y) {
    let resultado = x - y
    return resultado
}
function producto(x,y) {
    let resultado = x * y
    return resultado
}
function dividir(x,y) {
    let resultado = x / y
    return resultado
}
function cuadrado(x) {
    let resultado = x*x
    return resultado
}
module.exports = {sumar,restar, producto, dividir, cuadrado}
