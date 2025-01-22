// let exercici = parseInt(prompt("Quin exercici vols?"));

// if (exercici == 4){
//     ex4();
// }
// else if (exercici == 5){
//     ex5();
// }

// function ex4(){
//     let preu = parseInt(prompt("Cuant val el teu article?"));
//     const descompte = 0.15;
//     let descompteAplicat = preu * descompte;
//     const IVA = 0.21;
//     let ivaAplicat;
    
//     let preuCalculat;
//     let preufinal;
    
//     preuCalculat = preu - descompteAplicat;
//     ivaAplicat = preuCalculat * IVA;
//     preufinal = preuCalculat + ivaAplicat;
    
//     alert(`Tu articulo con el descuento seria de ${preuCalculat} i amb l'iva aplicat seria de ${preufinal}`);
// }

// function ex5(){
//     let base;
//     let altura;
//     let radi;
    
//     const PI = Math.PI;
    
//     let hipotenusa;
//     let area;
    
//     alert("Anem a calcular l'hipotenusa d'un triangle...")
//     base = parseInt(prompt("Quina es la base en cm?"));
//     altura = parseInt(prompt("i l'alçada?"));
    
//     hipotenusa = Math.hypot(base,altura);
//     alert(`L'hipotenusa d'aquest triangle és ${hipotenusa} cm`);
    
//     radi = parseInt(prompt("Ara per l'area d'un cercle... Donem el radi en cm"));
//     area = PI * Math.pow(radi,2);
    
//     alert(`L'area d'aquest cercle és ${area} cm2`);
// }

// * STRINGS ------------------------------------

function elegirEjercicio() {

    // - Agafem el valor del SELECTOR de l'exercici
    const SELECCION = document.getElementById("selector").value;

    let url = "";
    let exerciciActual = 0;

    /* 
    * Depenent l'opció escollida, et porta a una pàgina o una altre, 
    * i guarda a exerciciActual el numero de l'exercici escollit 
    */
    switch (SELECCION) {
        case "ex1": 
            url = "/html/exercicis-escrit.html"; 
            exerciciActual = 1; 
            break;
        case "ex2": 
            url = "/html/exercicis-escrit.html"; 
            exerciciActual = 2; 
            break;
        case "ex3": 
            url = "/html/exercicis-escrit.html"; 
            exerciciActual = 3; 
            break;
        case "ex4": 
            url = "/html/exercicis-escrit.html"; 
            exerciciActual = 4; 
            break;
        case "ex5": 
            url = "/html/exercicis-escrit.html"; 
            exerciciActual = 5; 
            break;
        case "ex6": 
            url = "/html/exercicis-escrit.html"; 
            exerciciActual = 6; 
            break;
        case "ex7": 
            url = "/html/exercicis-escrit.html"; 
            exerciciActual = 7; 
            break;
    }

    // - Guardem l'exercici a localStorage...
    localStorage.setItem("exerciciActual", exerciciActual);

    // - Cambiem l'iframe d'index.html a la pagina corresponent
    if (url !== "" && window.parent) {
        window.parent.document.getElementById("iframe").src = url;
    }
}

window.onload = function() {
    
    const exerciciActual = localStorage.getItem("exerciciActual");
    const textElement = document.getElementById("referencia-texto");

    // Cambiar el contenido del texto y el ejercicio según la selección
    switch (parseInt(exerciciActual)) {
        case 1: textElement.textContent = "Exercici 1: Llargada de lletres"; break;
        case 2: textElement.textContent = "Exercici 2: Posició de la lletra"; break;
        case 3: textElement.textContent = "Exercici 3: Substrings de la cadena"; break;
        case 4: textElement.textContent = "Exercici 4: Capitalitzar nom i cognom"; break;
        case 5: textElement.textContent = "Exercici 5: Inclou paraula 'Hola' en la frase"; break;
        case 6: textElement.textContent = "Exercici 6: Comença amb paraula 'Hola'"; break;
        case 7: textElement.textContent = "Exercici 7: Posició de paraula repetida"; break;
        default: textElement.textContent = "Selecciona un exercici.";
    }

    // Gestionar el botón de aceptar el ejercicio
    document.getElementById("accept-button").addEventListener("click", function() {
        const inputText = document.getElementById("input-text").value;
        
        // Denegar el input si no hay texto
        if (!inputText) {
            alert("Per favor, introdueix un text.");
            return;
        }

        // Ejecutar el ejercicio seleccionado
        switch (parseInt(exerciciActual)) {
            case 1: stringsEx1(); break;
            case 2: stringsEx2(); break;
            case 3: stringsEx3(); break;
            case 4: stringsEx4(inputText); break;  // Ex4 necesita inputText
            case 5: stringsEx5(inputText); break;  // Ex5 necesita inputText
            case 6: stringsEx6(inputText); break;  // Ex6 necesita inputText
            case 7: stringsEx7(inputText); break;  // Ex7 necesita inputText
            default: alert("No s'ha seleccionat cap exercici.");
        }
    });

    // Botón de rechazar: Volver a la página de selección
    document.getElementById("reject-button").addEventListener("click", function() {
        window.parent.document.getElementById('iframe').src = 'exercicis-select.html';
    });
}

    // - CONSTANT PER FER ELS EXERCICIS
    // ? nom
    // ? cognom

    // ? frase
    const LLETRES = "TRWAGMYFPDXBNJZSQVHLCKE";

    function stringsEx1(){
    // !EXERCICI 1
        let largo = LLETRES.length;
        alert(largo);
        }

        function stringsEx2(){
        // !EXERCICI 2
        let position = LLETRES.charAt(9);
        alert(position);
        }

        function stringsEx3(){
        // !EXERCICI 3
        let cadena1 = LLETRES.substring(10,20);
        let cadena2 = LLETRES.substring(10);
        alert(cadena1);
        alert(cadena2);
    }

    function stringsEx4(){
    // !EXERCICI 4
        let nom = prompt("Escriu un nom");
        let cognom = prompt("Escriu un cognom");
        let nomPrimera = nom.charAt(0).toUpperCase();
        let nomSegona = nom.substring(1).toLowerCase();

        let nomCorregit = nomPrimera+nomSegona;

        let cognomPrimera = cognom.charAt(0).toUpperCase();
        let cognomSegona = cognom.substring(1).toLowerCase();

        let cognomCorregit = cognomPrimera+cognomSegona;
        alert(`El teu nom és ${nomCorregit} ${cognomCorregit}`);
    }

    function stringsEx5(){
    // !EXERCICI 5
        let frase = prompt("Escriu una frase aquí");
        let paraula = "Hola";

        let fraseBona = frase.toLowerCase();
        let paraulaBona = paraula.toLowerCase();

        let inclou = fraseBona.includes(paraulaBona);
        if (inclou == true) {
        alert("La teva frase SI conté la paraula.")
        }
        else {
        alert("La frase NO inclou res.")
        }
    }

    function stringsEx6(){
    // !EXERCICI 6
        let frase2 = prompt("Escriu una frase aquí");
        let paraula2 = "Hola";

        let fraseBona2 = frase2.toLowerCase();
        let paraulaBona2 = paraula2.toLowerCase();

        let comensa = fraseBona2.startsWith(paraulaBona2);
        console.log(comensa);

        if (comensa == true) {
        alert("La frase SI comença amb aquesta paraula");
        }
        else {
        alert("La frase NO inclou res.");
        }
    }

    function stringsEx7(){
    // !EXERCICI 7
        let escriuFrase = prompt("Dime una frase");
        let escriuFraseBona = escriuFrase.toLowerCase();
        let paraulaEscpecifica = "hola";

        let iniciParaulaRepe = escriuFraseBona.indexOf(paraulaEscpecifica);
        let finalParaulaRepe = escriuFraseBona.lastIndexOf(paraulaEscpecifica);

        let finalDeTot = finalParaulaRepe + paraulaEscpecifica.length;

        alert(`La paraula comença a repetir-se a la posició ${iniciParaulaRepe} i acaba a la ${finalDeTot}`);
    }

    // % CONDICIONALS

    //! 1 - Calcular preu final botiga on-line
    function condicionalEx1(){
        const DESCOMPTECONDICIONAL = 0.1;
        const PREUAFEGIT = 5;

        let preuCondicionalEx1 = parseInt(prompt("Introdueix el preu del teu article"));

        if(preuCondicionalEx1 < 20){
            let preuCondicionalNouEx1 = preuCondicionalEx1+PREUAFEGIT;
            alert(`l'article val ${preuCondicionalNouEx1} €`);
        }
        else if (preuCondicionalEx1 >= 500){
            let preuCondicionalRestarEx1 = preuCondicionalEx1*DESCOMPTECONDICIONAL;
            let preuCondicionalNouEx1 = preuCondicionalEx1-preuCondicionalRestarEx1;
            alert(`l'article val ${preuCondicionalNouEx1} €`);
        }
    }
    
    function condicionalEx2(){
        const CONTRASENYA = "holabuenosdias123";
        let constrasenyaUsuari = prompt("Introdueix una contrasenya");

        if (CONTRASENYA === constrasenyaUsuari){ 
            alert("Constrasenya CORRECTA");
        }
        else { 
            alert("MEC");
        }
    }
    function condicionalEx3(){
        let numero1Condicionals = parseInt(prompt("Escribe el primer numero"));
        let numero2Condicionals = parseInt(prompt("Escribe el segundo numero"));

        if(numero1Condicionals % numero2Condicionals === 0 || numero2Condicionals % numero1Condicionals === 0){
            alert("Tus numeros son multiplos");
        }
        else{
            alert("no");
        }
    }

    function condicionalEx4(){
        let numeroEnter = parseInt(prompt("Escriu un numero"));

        if(numeroEnter === 0){
            alert("????zero es zero, que intentas????");
        }
        else if(numeroEnter < 0){
            alert("El teu numero es negatiu");
        }
        else{
            alert("positiu")
        }
    }   

    function condicionalEx5(){
        let edatCondicionals = parseInt(prompt("Que edat tens en numeros entersssssSSSSSssssssss"));

        if(edatCondicionals >= 18 && edatCondicionals < 80){
            alert("Pots conduir un cotxe");
        }
        if(edatCondicionals <= 16 || edatCondicionals >= 65){
            alert("No estàs en edat de treball");
        }
        if(edatCondicionals < 3){
            alert("Que haces aqui? SUS");
        }
        if(edatCondicionals >= 18 && edatCondicionals <= 24){
            alert("Pots estudiar un CFGS");
        }
    }

    function condicionalEx6() {
        let numero1Enter = parseInt(prompt("Digues un numero"));
        let numero2Enter = parseInt(prompt("Digues un altre numero"));
        let numero3Enter = parseInt(prompt("Digues un altre més"));

        if (numero3Enter > numero2Enter && numero3Enter > numero1Enter){
            alert(`El número més gran és ${numero3Enter}`);
        }
        else if (numero2Enter > numero1Enter && numero2Enter > numero3Enter){
            alert(`El número més gran és ${numero2Enter}`);
        }
        else if (numero1Enter > numero2Enter && numero1Enter > numero3Enter){
            alert(`El número més gran és ${numero1Enter}`);
        }
        else if (numero1Enter == numero2Enter || numero1Enter == numero3Enter || numero2Enter == numero3Enter){
            alert(`Hi han dos números iguals`);
        }
    }

    function condicionalEx7(){
        let anyCondicionals = parseInt(prompt("Escriu un any"));

        if((anyCondicionals % 400 === 0) || (anyCondicionals % 4 === 0 && anyCondicionals % 100 !== 0)){
            alert(`SIISISISISISIS`);
        }
        else{
            alert(`nononononono`);
        }
    }

    // !EXERCICI 8
    // * ALTRE DOCUMENT

    // !EXERCICI 9
    // * ALTRE DOCUMENT