//Código del cuadrado
console.group(`Cuadrados`)
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd()

//Código del triángulo
console.group(`Triángulos`)
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);
console.groupEnd()

//Código del circulo
console.group(`Círculos`)
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo}cm`);

function diametroCirculo(radio) {
    return radio * 2;
}
// console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`);

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log(`El área del círculo es: ${areaCirculo}cm^2`);
console.groupEnd()

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value

    const area = areaCuadrado(value);
    alert(area);
}

//Calcular altura de un triángulo isóceles
console.group(`Triángulo isóceles`);
// const ladosTrianguloIsoceles = 6;
// console.log(`Los lados del triángulo isóceles miden: ${ladosTrianguloIsoceles}cm`);

// const baseTrianguloIsoceles = 10;
// console.log(`La base del triángulo isóceles mide: ${baseTrianguloIsoceles}cm`);

function ladosAlCuadrado(ladoTI) {
    return ladoTI * ladoTI;
}

function baseAlCuadrado(baseTI) {
    return baseTI * baseTI;
}

function alturaTrianguloIsoceles(ladoTI, baseTI) {
    const variable1 = ladosAlCuadrado(ladoTI);
    const variable2 = baseAlCuadrado(baseTI);
    return Math.sqrt(variable1 - (variable2 / 4));
}
// console.log(`La altura del triángulo isóceles es de: ${alturaTrianguloIsoceles}cm`);
console.groupEnd();

//Aquí interactuamos con el HTML
function calcularAlturaTrianguloIsoceles() {
    const input1 = document.getElementById("InputLadosTrianguloIsoceles");
    const value1 = input1.value;
    const ladosCalculo = ladosAlCuadrado(value1);

    const input2 = document.getElementById("InputBaseTrianguloIsoceles");
    const value2 = input2.value;
    const baseCalculo = baseAlCuadrado(value2);

    alert(Math.sqrt(ladosCalculo - (baseCalculo / 4)));
}