function generateRandomList(size) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    return numbers;
}

function findMatchingPositions(list1, list2) {
    const matches = [];
    list1.forEach((num, index) => {
        if (num === list2[index]) {
            matches.push({ position: index, number: num });
        }
    });
    return matches;
}

const list1 = generateRandomList(40);
const list2 = generateRandomList(40);
console.log("Llista 1:", list1.join(" "));
console.log("Llista 2:", list2.join(" "));

const matchingPositions = findMatchingPositions(list1, list2);
matchingPositions.forEach(match => {
    console.log(`Coincidència a la posició ${match.position}: Número ${match.number}`);
});