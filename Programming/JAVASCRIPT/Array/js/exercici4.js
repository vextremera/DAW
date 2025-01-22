function exercici4() {
    // Generar 20 números aleatoris entre 1 i 100
    let numbers = [];
    for (let i = 0; i < 20; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }

    // Dividir els números en dues llistes de 10
    let list1 = numbers.slice(0, 10);
    let list2 = numbers.slice(10, 20);

    console.log("Llista 1:", list1);
    console.log("Llista 2:", list2);

    // Multiplicar els números de cada llista un per un
    let multiplications = [];
    for (let i = 0; i < list1.length; i++) {
        multiplications.push(list1[i] * list2[i]);
    }

    console.log("Multiplicacions un per un:", multiplications);

    // Sumar cada número d'una llista amb tots els de l'altra llista
    let sums = [];
    for (let i = 0; i < list1.length; i++) {
        let row = [];
        for (let j = 0; j < list2.length; j++) {
            row.push(list1[i] + list2[j]);
        }
    sums.push(row);
    }

    console.log("Sumes de cada número amb tots els altres:");
    console.table(sums);
}

exercici4();