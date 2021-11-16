// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

// function calcularMediaAritmetica (lista) {
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++) {
//         sumaLista1 = sumaLista + lista[i];
//     }
    
//     const promedioLista = sumaLista / lista.length;

//     return promedioLista; 
// }

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}