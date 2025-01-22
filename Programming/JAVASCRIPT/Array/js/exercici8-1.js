function SumaNumeros(){
    let llista = [];
    for (let i = 0; i < 10; i++) {
    llista.push(Math.floor(Math.random() * 100));
    }

    console.log("Llista:", llista);

    for (let i = 0; i < llista.length - 1; i++) {
        console.log(`Suma del ${i+1} i el ${i+2}: ${llista[i]} + ${llista[i+1]} = ${llista[i] + llista[i+1]}`);
    }
}

SumaNumeros();

