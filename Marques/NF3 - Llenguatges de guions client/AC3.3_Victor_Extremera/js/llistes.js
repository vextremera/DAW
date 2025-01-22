// & ---------------------- AFEGIR ---------------------------
function afegeixOrdenada() {
    const text = document.getElementById('text-ordenada').value;
    if (text.trim() !== '') {
        const llista = document.getElementById('ordenada');
        const element = document.createElement('li');
        element.textContent = text;
        llista.appendChild(element);
        document.getElementById('text-ordenada').value = '';
    }
}

function afegeixDesordenada() {
    const text = document.getElementById('text-desordenada').value;
    if (text.trim() !== '') {
        const llista = document.getElementById('desordenada');
        const element = document.createElement('li');
        element.textContent = text;
        llista.appendChild(element);
        document.getElementById('text-desordenada').value = '';
    }
}

function afegeixDescriptiva() {
    const titol = document.getElementById('titol-descriptiva').value;
    const descripcio = document.getElementById('descripcio-descriptiva').value;
    if (titol.trim() !== '' && descripcio.trim() !== '') {
        const llista = document.getElementById('descriptiva');
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dt.textContent = titol;
        dd.textContent = descripcio;
        llista.appendChild(dt);
        llista.appendChild(dd);
        document.getElementById('titol-descriptiva').value = '';
        document.getElementById('descripcio-descriptiva').value = '';
    }
}

// & ------------------- ELIMINAR -----------------------
function eliminaOrdenada() {
    const llista = document.getElementById('ordenada');
    if (llista.lastChild) {
        llista.removeChild(llista.lastChild);
    }
}

function eliminaDesordenada() {
    const llista = document.getElementById('desordenada');
    if (llista.lastChild) {
        llista.removeChild(llista.lastChild);
    }
}

function eliminaDescriptiva() {
    const llista = document.getElementById('descriptiva');
    if (llista.lastChild && llista.lastChild.previousSibling) {
        llista.removeChild(llista.lastChild); // Elimina descripció
        llista.removeChild(llista.lastChild); // Elimina títol
    }
}

// & ----------------------- NETEJAR -------------------------
function netejarOrdenada() {
    const llista = document.getElementById('ordenada');
    llista.innerHTML = '';
}

function netejarDesordenada() {
    const llista = document.getElementById('desordenada');
    llista.innerHTML = '';
}

function netejarDescriptiva() {
    const llista = document.getElementById('descriptiva');
    llista.innerHTML = '';
}