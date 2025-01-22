function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 40; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
}

function findOccurrences(numbers, target) {
    let positions = [];
    numbers.forEach((num, index) => {
        if (num === target) {
            positions.push(index);
        }
    });
    return positions;
}

const numbers = generateRandomNumbers();
console.log("Llista de números generada:", numbers);

const userNumber = parseInt(prompt("Introdueix un número enter entre 0 i 9:"));

if (isNaN(userNumber) || userNumber < 0 || userNumber > 9) {
    console.log("Número no vàlid. Introdueix un enter entre 0 i 9.");
} else {
    const positions = findOccurrences(numbers, userNumber);
    console.log(`El número ${userNumber} apareix ${positions.length} vegada(es) a les posicions:`, positions);
}