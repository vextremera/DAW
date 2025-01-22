function taula(files, columnes) {
    console.log("Files:", files);
    console.log("Columnes:", columnes);

    const array = [];
    for (let i = 0; i < files; i++) {
        let fila = {};
        for (let j = 0; j < columnes; j++) {
            fila[`uf${j + 1}`] = Math.floor(Math.random() * 10); // Agrega los index de uf1
        }
        array.push(fila);
    }

    console.log("Array generat:");
    console.log(array);
    return array;
}

const row = taula(6, 4);

// Añadir nombres de fila: Alumne1, Alumne2, ...
const tableWithRowNames = {};
row.forEach((fila, index) => {
    tableWithRowNames[`Alumne${index + 1}`] = fila;
});

console.log("Table generat:");
console.table(tableWithRowNames);
