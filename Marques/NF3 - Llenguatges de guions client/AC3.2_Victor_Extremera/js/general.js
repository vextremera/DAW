document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const contingutDiv = document.getElementById("contingut");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const aMostrar = button.getAttribute("data-mostrar");
            let contenido = "";

            buttons.forEach((btn) => {
                btn.style.border = 'none'; 
                btn.style.fontWeight = '500';
            });
            
            button.style.border = '2px solid black';
            button.style.fontWeight = '700';

            if (aMostrar === "HTML") {
                contenido = `
                    <h2 class="titulo">HTML</h2>
                    <p class="descripcion">HTML (HyperText Markup Language) és el llenguatge utilitzat per crear la estructura d'una pàgina web. Els seus elements són les bases de qualsevol pàgina.</p>
                    <h3>Principals característiques:</h3>
                    <div class="black-back">
                        <ul>
                            <li>Definició d'encapçalaments</li>
                            <li>Creació de paràgrafs</li>
                            <li>Inserció d'imatges i enllaços</li>
                        </ul>
                    </div>
                `;
                button.style.border = '2px solid black'
            } else if (aMostrar === "CSS") {
                contenido = `
                    <h2 class="titulo">CSS</h2>
                    <p class="descripcion">CSS (Cascading Style Sheets) és el llenguatge que dóna estil a una pàgina web. Permet personalitzar colors, fonts i dissenys.</p>
                    <h3>Principals característiques:</h3>
                    <div class="black-back">
                        <ul>
                            <li>Estilització de textos</li>
                            <li>Maquetació responsive</li>
                            <li>Animacions i transicions</li>
                        </ul>
                    </div>
                `;
                button.style.border = '2px solid black'
                
            } else if (aMostrar === "JS") {
                contenido = `
                    <h2 class="titulo">JavaScript</h2>
                    <p class="descripcion">JavaScript és un llenguatge de programació que permet afegir interactivitat i funcionalitat a una pàgina web.</p>
                    <h3>Principals característiques:</h3>
                    <div class="black-back">
                        <ul>
                            <li>Manipulació del DOM</li>
                            <li>Creació d'esdeveniments</li>
                            <li>Ús d'APIs</li>
                        </ul>
                    </div>
                `;
                button.style.border = '2px solid black'
            }

            // Actualizamos el contenido dinámico con clases
            contingutDiv.innerHTML = contenido;
        });
    });
});
