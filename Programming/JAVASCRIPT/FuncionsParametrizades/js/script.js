// ! OBETENIR CARACTER DDE LA A - Z
function obtenirAleatoriEntre(inici, final) {
    const codiInici = inici.charCodeAt(0);
    const codiFinal = final.charCodeAt(0);
    
    if (codiInici > codiFinal) {
      throw new Error("El caràcter inicial ha de ser anterior o igual al caràcter final.");
    }
    
    const codiAleatori = Math.floor(Math.random() * (codiFinal - codiInici + 1)) + codiInici;
    return String.fromCharCode(codiAleatori);
  }
  
  console.log(obtenirCaràcterAleatoriEntre('A', 'Z')); // Exemple: entre 'A' i 'Z'
  console.log(obtenirCaràcterAleatoriEntre('C', 'F'));



  // ! Crear un array de N números enters inicialitzat amb un valor V
  function crearArrayInicialitzat(N, V) {
    if (N < 0) {
      throw new Error("El nombre d'elements (N) ha de ser un número enter no negatiu.");
    }
  
    return Array(N).fill(V);
  }
  
  // Exemple d'ús:
  console.log(crearArrayInicialitzat(5, 3)); // [3, 3, 3, 3, 3]
  console.log(crearArrayInicialitzat(0, 7)); // []
  console.log(crearArrayInicialitzat(4, -2)); // [-2, -2, -2, -2]



  // ! Mostrar els valors d'un array
  function mostrarArray(array, enLinia, separador = " ") {
    if (enLinia) {
      console.log(array.join(separador)); // Mostra en una sola línia amb el separador indicat
    } else {
      array.forEach(element => console.log(element)); // Mostra cada element en una línia diferent
    }
  }
  
  // Exemple d'ús:
  const exempleArray = [1, 2, 3, 4, 5];
  mostrarArray(exempleArray, false);       // Mostra un valor per línia
  mostrarArray(exempleArray, true);        // Mostra tots en una línia separats per espai
  mostrarArray(exempleArray, true, "-");   // Mostra tots separats per guions

  function crearArrayInicialitzat(N, V, mostrar = false, enLinia = true, separador = " ") {
    if (N < 0) {
      throw new Error("El nombre d'elements (N) ha de ser un número enter no negatiu.");
    }
  
    const array = Array(N).fill(V);
  
    if (mostrar) {
      mostrarArray(array, enLinia, separador);
    }
  
    return array;
  }
  
  // Exemple d'ús:
  crearArrayInicialitzat(5, 3, true, true, ", ");  // Mostra: 3, 3, 3, 3, 3
  crearArrayInicialitzat(3, 7, true, false);       // Mostra cada 7 en línia diferent



  // ! Mostrar els valors d'un array bidimensional
  function mostrarArrayBidimensional(arrayBidimensional, separador = " ") {
    arrayBidimensional.forEach(fila => {
      mostrarArray(fila, true, separador); // Utilitza la funció `mostrarArray` per cada fila
    });
  }
  
  // Exemple d'ús:
  const exempleArrayBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  mostrarArrayBidimensional(exempleArrayBidimensional);    // Mostra les files separades per espais
  mostrarArrayBidimensional(exempleArrayBidimensional, ","); // Mostra les files separades per comes



// ! DEMANAR CARACTER VALID
function demanarCaracterValid(pregunta, opcionsValides) {
    let resposta;
    const opcions = Array.isArray(opcionsValides) ? opcionsValides : opcionsValides.split("");
  
    do {
      resposta = prompt(pregunta).trim();
      if (opcions.includes(resposta)) {
        return resposta;
      }
      alert(`Opció invàlida. Si us plau, introdueix una de les següents opcions: ${opcions.join(", ")}`);
    } while (true);
  }
  
  // Exemple d'ús amb un array d'opcions
  const opcioArray = demanarCaracterValid("Escull una opció (A, B o C):", ['A', 'B', 'C']);
  console.log("Has escollit l'opció:", opcioArray);
  
  // Exemple d'ús amb un string d'opcions
  const opcioString = demanarCaracterValid("Escull una opció (1, 2, 3):", "123");
  console.log("Has escollit l'opció:", opcioString);



  // ! Introduir un número enter
  function demanarEnter(pregunta) {
    let resposta;
  
    do {
      resposta = prompt(pregunta).trim();
      if (Number.isInteger(Number(resposta))) {
        return Number(resposta);
      }
      alert("Error: Si us plau, introdueix un número enter vàlid.");
    } while (true);
  }

  function demanarEnterAmbLimits(pregunta, minim, maxim) {
    if (minim > maxim) {
      [minim, maxim] = [maxim, minim]; // Intercanvia els valors si cal
    }
  
    let numero;
    do {
      numero = demanarEnter(pregunta);
      if (numero >= minim && numero <= maxim) {
        return numero;
      }
      alert(`Error: El número ha d'estar entre ${minim} i ${maxim}.`);
    } while (true);
  }

  // Demana un número enter sense límits
const numeroSenseLimits = demanarEnter("Introdueix un número enter:");
console.log("Has introduït el número:", numeroSenseLimits);

// Demana un número enter amb límits
const numeroAmbLimits = demanarEnterAmbLimits("Introdueix un número entre 10 i 20:", 10, 20);
console.log("Has introduït el número:", numeroAmbLimits);

// Exemple amb límits intercanviats
const numeroIntercanviat = demanarEnterAmbLimits("Introdueix un número entre 50 i 30:", 50, 30);
console.log("Has introduït el número:", numeroIntercanviat);