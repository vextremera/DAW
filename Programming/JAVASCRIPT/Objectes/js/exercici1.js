// Creació dels objectes dels clients
const clients = [
    {
        DNI: "12345678A",
        nom: "Maria Perez",
        correu: "maria.perez@example.com",
        telefon: "612345678"
    },
    {
        DNI: "23492485F",
        nom: "Jordi Garcia",
        correu: "jordi.garcia@example.com",
        telefon: "627479234"
    },
    {
        DNI: "28492045H",
        nom: "Laura Martínez",
        correu: "laura.mart@example.com",
        telefon: "699623461"
    }
];

// Mostra les dades dels clients a la pàgina web
clients.forEach(client => {
    document.body.innerHTML += `
        <div>
            <h2>Client: ${client.nom}</h2>
            <p>DNI: ${client.DNI}</p>
            <p>Correu electrònic: ${client.correu}</p>
            <p>Telèfon: ${client.telefon}</p>  
        </div>
        <hr>
    `;
});