function SumaNumeros2(){
    let llista2 = [];
    for (let i = 0; i < 10; i++) {
    llista2.push(Math.floor(Math.random() * 100));
    }

    console.log("Llista:", llista2);

    let mida = llista2.length;
    for (let i = 0; i < mida / 2; i++) {
    console.log(`Suma del ${i+1} i el ${mida-i}: ${llista2[i]} + ${llista2[mida-1-i]} = ${llista2[i] + llista2[mida-1-i]}`);
    }
}

SumaNumeros2();