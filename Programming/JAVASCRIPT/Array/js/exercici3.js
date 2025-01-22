function exercici3() {

    function numeroAleatori(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let numeros = [];
    for (let i = 0; i < 1000; i++) {
        numeros.push(numeroAleatori(100, 10000));
    }

    let numerosParells = numeros.filter(num => num % 2 === 0);
    
    console.log(numerosParells.slice(0, 10));
}

exercici3()