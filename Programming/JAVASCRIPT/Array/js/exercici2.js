function exercici2() {
    const aprovats = [];

    let aprobar = 0;
    let suspendre = 0;

    for (let i = 0; i < 10; i++) { 
        let nota;
        do {
            nota = parseFloat(prompt(`Introdueix la nota de l'alumne ${i + 1} (0-10):`));
            if(!(isNaN(nota) || nota < 0 || nota > 10)){
                if (nota > 5){
                    aprovats.push(nota); 
                    aprobar++
                } 
                else suspendre++;
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);
    }

    console.log(`Aprovats = ${aprobar}   Suspesos = ${suspendre}`)

    const sumaNotes = aprovats.reduce((acc, curr) => acc + curr, 0); 
    const mitjana = sumaNotes / aprovats.length;

    console.log(aprovats)
    console.log(`La mitjana és: ${mitjana.toFixed(1)}`);
}

exercici2();