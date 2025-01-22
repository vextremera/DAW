// Funció per demanar una llista d'elements amb un prompt
function obtenirElements(missatge, quantitat) {
    let elements = [];
    for (let i = 0; i < quantitat; i++) {
        let element = prompt(`${missatge} (${i + 1}/${quantitat}):`);
        elements.push(element);
    }
    return elements;
}

// Obtenir els hobbies i menjars preferits
let hobbies = obtenirElements("Introdueix un hobby", 4);
let menjars = obtenirElements("Introdueix un menjar preferit", 6);

// Funció per obtenir un element aleatori d'una llista
function elementAleatori(llista) {
    return llista[Math.floor(Math.random() * llista.length)];
}

// Arrays de dies de la setmana i moments del dia
let dies = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres"];
let moments = ["Esmorzar", "Dinar", "Sopar"];

// Crear una taula d'horari de menjars i hobbies aleatoris
let horari = {};
dies.forEach(dia => {
    horari[dia] = {};
    moments.forEach(moment => {
        let menjarAleatori = elementAleatori(menjars);
        let hobbyAleatori = elementAleatori(hobbies);
        horari[dia][moment] = `${menjarAleatori} | ${hobbyAleatori}`;
    });
});

// Mostrar l'horari amb format de taula
console.log("          Esmorzar             Dinar                Sopar");
dies.forEach(dia => {
    console.log(`${dia.padEnd(10)} ${horari[dia]["Esmorzar"].padEnd(20)} ${horari[dia]["Dinar"].padEnd(20)} ${horari[dia]["Sopar"]}`);
});
