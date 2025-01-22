let paraula = [];
let ordenat = [];

for(i = 0; i < 10; i++){
    paraula.push(prompt("Escriu una paraula:").toUpperCase());
    console.log(`Paraula: `+paraula[i]);
}

for(i = 0; i < paraula.length; i++){
    ordenat = paraula.sort((a, b) => a.localeCompare(b));
}

console.log("Paraules ordenades");
console.log(ordenat);

function binariSearch(llista, buscar){
    let min = 0;
    let max = ordenat.length -1;
    let mid = 0;

    let comparacions = 0
    let position = 0;

    while (min <= max) {
        comparacions++
        mid = Math.floor((min + max) / 2);  // Calcular la posició central del tram entre min i max

        if (llista[mid] < buscar) {
            min = mid + 1;        // Agafar la meitat superior
        } 
        else if (llista[mid] > buscar) {
            max = mid - 1;        // Agafar la meitat inferior
        } 
        else {
            position = mid;  // Valor trobat
            break;
        }
    }
    position = -1  // Si no troba el valor
}

let buscarParaula = "";

do {
    buscarParaula = prompt("Escriu una paraula per buscar (o 'FI' per acabar):");

    if (buscarParaula !== "FI") {
        binariSearch(ordenat, buscarParaula);

        if (position !== -1) {
            console.log(`Paraula '${buscarParaula}' trobada a la posició ${position} amb ${comparisons} comparacions.`);
        } else {
            console.log(`Paraula '${buscarParaula}' no trobada. Comparacions realitzades: ${comparisons}.`);
        }
    }
} while (buscarParaula !== "FI");



  console.log(`La teva paraula està a la posició ${position} i he comparat ${comparacions} vegades`)





