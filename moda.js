// const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

function listaUsuario (arrayUsuario) {
    return arrayUsuario;
}

const lista1 = listaUsuario([1,4,6,5,5,4,2,3,6,5,5,5,2,3,5,5,5,3]);

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];