let promptt = prompt("FILES Y COLUMNES?")

let llocs = promptt.split(" ")

let files = parseInt(llocs[0]);
let columnes = parseInt(llocs[1]);

console.log("Files:", files);
console.log("Columnes:", columnes);

const array = [];
for (let i = 0; i < files; i++) {
    let fila = [];
    for (let j = 0; j < columnes; j++) {
        fila.push(Math.floor(Math.random() * 10)); // Nombres entre 0 i 9
    }
    array.push(fila);
}

console.log("Array generat:");
console.log(array);

const sumaFiles = [];
const sumaColumnes = Array(columnes).fill(0);

for(i = 0; i < files; i++){
    let sumaFila = 0
    for(j = 0; j < columnes; j++){
        sumaFila += array[i][j]
        sumaColumnes[j] += array[i][j]
    }
    sumaFiles.push(sumaFila)
}

console.log("Suma de cada fila:", sumaFiles);
console.log("Suma de cada columna:", sumaColumnes);

const sumaTotalFiles = sumaFiles.reduce((acc, curr) => acc + curr, 0);
const sumaTotalColumnes = sumaColumnes.reduce((acc, curr) => acc + curr, 0);

console.log(sumaTotalFiles)
console.log(sumaTotalColumnes)

if (sumaTotalFiles === sumaTotalColumnes) {
    console.log("LA SUMA ES IGUAL")
} else {
    console.log("LA SUMA NO ES IGUAL")
}