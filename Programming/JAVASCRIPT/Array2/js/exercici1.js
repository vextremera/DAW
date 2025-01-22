const phrase = prompt("Escriu una frase:");

// 1. Converteix la frase en un array de paraules separant-les a partir dels espais
const wordsBySpace = phrase.split(" ");
console.log("Paraules separades per espais:");
wordsBySpace.forEach(word => console.log(word));

// 2. Modifica el programa per separar per coma i espai
const wordsByCommaSpace = phrase.split(", ");
console.log("\nParaules separades per coma i espai:");
wordsByCommaSpace.forEach(word => console.log(word));

// 3. Mostra les paraules en una sola línia però en ordre invers
const reversedWords = wordsByCommaSpace.reverse();
console.log("\nParaules en ordre invers:", reversedWords.join(" "));