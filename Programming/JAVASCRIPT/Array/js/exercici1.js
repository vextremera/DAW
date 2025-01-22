function calcularNotes() {
    const notes = []; //Inicialitzo un array

    // Demanem les 6 notes
    for (let i = 0; i < 6; i++) { //demano que fagi X 6 vegades
        let nota;
        do {
            nota = parseFloat(prompt(`Introdueix la nota ${i + 1} (0-10):`));
        } while (isNaN(nota) || nota < 0 || nota > 10); //Que demani la nota fins que sigui vàlida. (Ni Not a Number, ni menor a 0 ni major a 10)
        notes.push(nota);
    }

    // Calculem la nota mínima, màxima i la mitjana
    const notaMinima = Math.min(...notes);
    const notaMaxima = Math.max(...notes);
    const sumaNotes = notes.reduce((acc, curr) => acc + curr, 0); //.reduce fa que es faci X cosa del principi fins al final del array
    const mitjana = sumaNotes / notes.length; // En aquest cas acc és el valor que va resultant en cada operacio. 
                                            // curr en la operació/posició en la que esta ara mateix
                                            // després li dic, que sumi el valor acumulat + el current. començat amb l'actual a 0
                                            // Això fara 0 + posicio 1 del Array. resultat + posicio 2. resultat + posicio 3...
   
    console.log(`Nota mínima: ${notaMinima}`);
    console.log(`Nota màxima: ${notaMaxima}`);

    if (notaMinima < 5) {
        console.log("No aprova el mòdul.");
    } else {
        console.log(`La mitjana és: ${mitjana.toFixed(2)}`);
    }
}

// Cridem la funció
calcularNotes();