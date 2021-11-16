function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// const lista1 = [
//     100,
//     200,
//     500,
//     4000000
// ];

function ordenarLista (listaNumeros) {
    const listaOrdenada = listaNumeros.sort(
        function (a, b) {
            return a - b;
        }
    );

    return listaOrdenada;
};

let listaNumerosTrabajar = ordenarLista([1,5,65,33,39,40,2]);

let mitadDeLista = parseInt(listaNumerosTrabajar.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(listaNumerosTrabajar.length)) {
    const elemento1 = listaNumerosTrabajar[mitadDeLista - 1];
    const elemento2 = listaNumerosTrabajar[mitadDeLista];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
} else {
    mediana = listaNumerosTrabajar[mitadDeLista];
}