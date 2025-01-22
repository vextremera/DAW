function generateRandomLetters() {
    const letters = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 80; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        letters.push(alphabet[randomIndex]);
    }
    return letters;
}

function countLetters(letters) {
    const counts = {};
    
    letters.forEach(letter => {
        counts[letter] = (counts[letter] || 0) + 1;
    });
    
    return counts;
}

const letters = generateRandomLetters();
console.log("Array de lletres generat:", letters.join(" "));

const letterCounts = countLetters(letters);

for (const [letter, count] of Object.entries(letterCounts)) {
    console.log(`La lletra ${letter} apareix ${count} vegada(es)`);
}