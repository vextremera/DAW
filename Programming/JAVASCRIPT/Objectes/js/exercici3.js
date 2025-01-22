const alumnes = [
    { nom : "John", cognom : "Doe", curs : 1, notas : [8, 9, 7, 6] },
    { nom : "Carlos", cognom : "Smith", curs : 2, notas : [10, 9, 8, 7] },
    { nom : "Pepito", cognom : "Palotes", curs : 1, notas : [9, 2, 4, 5] },
    { nom : "Rebecca", cognom : "Dutch", curs : 3, notas : [8, 2, 6, 7] },
    { nom : "Ñeri", cognom : "Ñeri", curs : 3, notas : [10, 7, 7, 2] },
    { nom : "Carolina", cognom : "Sur", curs : 2, notas : [8, 4, 2, 8] }
];

alumnes.forEach(alumne => {
    let mitja = alumne.notas.reduce((value, current) => value + current, 0) / alumne.notas.length; //value = posicio index, current = valor actualitzat de la suma en cada posicio.
    alumne.mitja = mitja.toFixed(2); //Arrodonim la mitja a dos decimals.
});

console.log(alumnes);

function afegirAlumneATaula() {
    const taulaDiv = document.getElementById("afegirTaula");
    taulaDiv.innerHTML = ""; // Assegura'ns que la taula es torna a crear des de zero
    
    const taula = document.createElement("table");
    const tbody = document.createElement("tbody");

    // Capçalera de la taula
    tbody.innerHTML += `
        <tr>
            <th>Alumnes</th>
            <th>Curs</th>
            <th>M01</th>
            <th>M02</th>
            <th>M03</th>
            <th>M04</th>
            <th>Final</th>
        </tr>`;

    // Files de la taula per cada alumne
    alumnes.forEach(alumne => {
        tbody.innerHTML += `
            <tr>
                <td>${alumne.nom} ${alumne.cognom}</td>
                <td>${alumne.curs}</td>
                <td>${alumne.notas[0]}</td>
                <td>${alumne.notas[1]}</td>
                <td>${alumne.notas[2]}</td>
                <td>${alumne.notas[3]}</td>
                <td>${alumne.mitja}</td>
            </tr>`;
    });

    // Afegim tbody a la taula i la taula al div
    taula.appendChild(tbody);
    taulaDiv.appendChild(taula);
}

// Cridem la funció per crear la taula
afegirAlumneATaula();