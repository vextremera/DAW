function generateRandomArray() {
    const numbers = [];
    for (let i = 0; i < 20; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
}

function countDigits(numbers) {
    const counts = Array(10).fill(0);
    numbers.forEach(num => {
        counts[num] += 1;
    });
    return counts;
}

const numbers = generateRandomArray();
console.log("Array generat:", numbers.join(" "));

const digitCounts = countDigits(numbers);

digitCounts.forEach((count, digit) => {
    console.log(`El dígit ${digit} apareix ${count} vegada(es)`);
});