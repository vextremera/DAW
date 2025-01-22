const llibres = [];
let mostrar = true; // Variable que controla si se muestra la lista de títulos o la lista completa

function afegirLlibre() {
    // Obtener los datos del libro
    let isbn = document.getElementById("ISBN").value;
    let titol = document.getElementById("titol").value;
    let autor = document.getElementById("autor").value;
    let tematica = document.getElementById("tematica").value;
    let resum = document.getElementById("resum").value;

    // Validar los datos
    if (isbn === "" || titol === "" || autor === "" || tematica === "" || resum === "") {
        alert("Tots els camps són obligatoris.");
        return;
    }

    // Verificar si el ISBN ya existe
    const llibreExistent = llibres.find(llibre => llibre.isbn === isbn);
    if (llibreExistent) {
        alert("El ISBN introduit ja existeix.");
        return;
    }
    else { 
        // Añadir el libro al array
        llibres.push({ isbn, titol, autor, tematica, resum });
    }

    console.log(llibres);


    // Limpiar los inputs
    limpiarInputs();

    // Mostrar la lista de títulos y ocultar la lista de libros completos
    mostrar = true;
    mostrarTitol();
    ocultarLlibres();
}

function limpiarInputs(){
    // Limpiar los inputs
    document.getElementById("ISBN").value = "";
    document.getElementById("titol").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("tematica").value = "";
    document.getElementById("resum").value = "";
}

function mostrarTitol() {
    const titolsHTML = document.getElementById("titolsLlibres");

    if (!titolsHTML) {
        console.error("Element amb id 'titolsLlibres' no trobat.");
        return;
    }

    if (mostrar) {
        titolsHTML.innerHTML = ""; // Limpiar títulos previos
        llibres.forEach(llibre => {
            titolsHTML.innerHTML += `
                <h2>${llibre.titol}</h2>
            `;
        });
        titolsHTML.style.display = "block"; // Mostrar los títulos
    } else {
        titolsHTML.style.display = "none"; // Ocultar los títulos si mostrar es falso
    }
}

function mostrarLlibres() {
    mostrar = false; // Desactivar la vista de títulos
    mostrarTitol(); // Llamamos a mostrarTitol() para ocultarlos

    const llibresHTML = document.getElementById("llibresDiv");

    if (!llibresHTML) {
        console.error("Element amb id 'llibresDiv' no trobat.");
        return;
    }

    llibresHTML.innerHTML = ""; // Limpiar el contenido previo
    llibres.forEach(llibre => {
        llibresHTML.innerHTML += `
            <div>   
                <h2>ISBN: ${llibre.isbn}</h2>
                <p>TÍTOL: ${llibre.titol}</p>
                <p>Autor: ${llibre.autor}</p>
                <p>Temàtica: ${llibre.tematica}</p>  
                <p>Resum: ${llibre.resum}</p>
            </div>
            <hr>
        `;
    });
    llibresHTML.style.display = "block"; // Mostrar lista de libros completa
    ocultarTitols(); // Ocultar la lista de títulos
}

function ocultarTitols() {
    const titolsHTML = document.getElementById("titolsLlibres");
    if (titolsHTML) {
        titolsHTML.style.display = "none";
    }
}

function ocultarLlibres() {
    const llibresHTML = document.getElementById("llibresDiv");
    if (llibresHTML) {
        llibresHTML.style.display = "none";
    }
}

function filtrarPerTematica() {
    const tematicaSeleccionada = document.getElementById("filtreTematica").value;

    const llibresHTML = document.getElementById("llibresDiv");
    if (!llibresHTML) {
        console.error("Element amb id 'llibresDiv' no trobat.");
        return;
    }

    llibresHTML.innerHTML = ""; // Limpiar contenido previo

    // Filtrar los libros según la temática seleccionada
    const llibresFiltrats = llibres.filter(llibre => llibre.tematica === tematicaSeleccionada || tematicaSeleccionada === "tots");

    llibresFiltrats.forEach(llibre => {
        llibresHTML.innerHTML += `
        <div>   
                <h2>ISBN: ${llibre.isbn}</h2>
                <p>TÍTOL: ${llibre.titol}</p>
                <p>Autor: ${llibre.autor}</p>
                <p>Temàtica: ${llibre.tematica}</p>  
                <p>Resum: ${llibre.resum}</p>
            </div>
            <hr>
        `;
    });
    llibresHTML.style.display = "block"; // Mostrar lista filtrada de libros
}