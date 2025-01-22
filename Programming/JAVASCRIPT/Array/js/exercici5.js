function exercici5(){

    function generateRandomLetter() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters[Math.floor(Math.random() * letters.length)];
    }
    
    // Generar 10 lletres aleatòries i guardar-les en un array
    let lettersArray = [];
    for (let i = 0; i < 10; i++) {
        lettersArray.push(generateRandomLetter());
    }
    
    console.log("Lletres generades:", lettersArray.join(", "));
    
    // Escriure les lletres en ordre invers
    let reversedArray = [...lettersArray].reverse();
    console.log("Lletres en ordre invers:", reversedArray.join(", "));
    
    // Invertir els elements de l'array (intercanviar primer amb l'últim, etc.)
    for (let i = 0; i < Math.floor(lettersArray.length / 2); i++) {
        let temp = lettersArray[i];
        lettersArray[i] = lettersArray[lettersArray.length - 1 - i];
        lettersArray[lettersArray.length - 1 - i] = temp;
    }
    // Fa que el bucle s'executi només fins a la meitat de l'array. 
    // Això és perquè si intercanvies els primers elements amb els últims, 
    // la segona meitat ja estarà al seu lloc.
    // Després guardo el valor actual del bucle a una variable temporal
    // Inverteixo l'ordre i cambio el valor, després retorno el valor amb la variable temporal

    console.log("Lletres després d'invertir l'array:", lettersArray.join(", "));
}

exercici5();