function actualitzarCarta() {
    var nomDestinatari = document.getElementById('nomDestinatari').value;
    var nomRemitent = document.getElementById('nomRemitent').value;
    var assumpte = document.getElementById('assumpte').value;
    var contingut = document.getElementById('contingut').value;

    
    document.getElementById('destinatariCarta').innerText = "Per a: " + nomDestinatari;
    document.getElementById('assumpteCarta').innerText = "Assumpte: " + assumpte;
    document.getElementById('contingutCarta').innerText = contingut;
    document.getElementById('remitentCarta').innerText = "De: " + nomRemitent;

    console.log("Carta actualitzada: ", {
        nomDestinatari,
        nomRemitent,
        assumpte,
        contingut
    });
}


function validarFormulari(event) {
    event.preventDefault() // Evitem l'enviament real del formulari

    var nomDestinatari = document.getElementById('nomDestinatari');
    var nomRemitent = document.getElementById('nomRemitent');
    var assumpte = document.getElementById('assumpte');
    var contingut = document.getElementById('contingut');

    // Validar si els camps no estan buits
    if (!noBuit(nomDestinatari) || !noBuit(nomRemitent) || !noBuit(assumpte) || !noBuit(contingut)) {
        event.preventDefault();  // Evitem l'enviament del formulari si algun camp està buit
        alert("Hi ha camps buits, si us plau, emplena-ho tot, abans de pasar-ho a carta.");
        return;
    }

    actualitzarCarta();     // Si tot és correcte, actualitzem la carta
}

function noBuit(input) {
    return input.value.trim() !== '';
}

// Funció per eliminar la carta
function eliminarCarta() {
    document.getElementById('destinatariCarta').innerText = '';
    document.getElementById('assumpteCarta').innerText = '';
    document.getElementById('contingutCarta').innerText = '';
    document.getElementById('remitentCarta').innerText = '';
}

function enviarCarta() { 
    alert("Carta enviada correctament!");
    eliminarCarta();  // Eliminem la carta després d'enviar-la
}

