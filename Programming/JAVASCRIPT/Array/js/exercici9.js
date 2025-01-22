function generateRandomLetters() {
    const letters = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        letters.push(alphabet[randomIndex]);
    }
    
    return letters;
}

function rotateLetters(letters, shift = 1) {
    const actualShift = shift % letters.length;
    return letters.slice(-actualShift).concat(letters.slice(0, -actualShift));
}

let letters = generateRandomLetters();
console.log("Lletres generades:", letters);

let shift = parseInt(prompt("Introdueix el desplaçament que vols fer (entre 1 i 9):"));
if (isNaN(shift) || shift < 1 || shift > 9) {
    shift = 1;
}

const rotatedLetters = rotateLetters(letters, shift);
console.log("Lletres després de la rotació:", rotatedLetters);