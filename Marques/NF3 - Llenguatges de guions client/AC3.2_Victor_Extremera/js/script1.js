const HTMLdiv = document.getElementById("resultats");

// Funcions
function sumaNumeros(a, b) {
  return a + b;
}

function divisible(a, b) {
  return a % b === 0;
}

function intercanviVariables(a, b) {
  return [b, a];
}

// Variables inicials
let numero1 = 15;
let numero2 = 3;

let exercicis = [
  "Suma de dos números",
  "Comprovació de divisibilitat",
  "Intercanvi de variables",
];

// Resolució dels exercicis
for (let i = 0; i < exercicis.length; i++) {
  // Crear elements per a cada exercici
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Solució Exercici " + (i + 1) + ": " + exercicis[i];

  if (i === 0) {
    p.textContent = `La suma de ${numero1} + ${numero2} és ${sumaNumeros(
      numero1,
      numero2
    )}.`;
  } else if (i === 1) {
    if (divisible(numero1, numero2)) {
      p.textContent = `El número ${numero1} és divisible per ${numero2}.`;
    } else {
      p.textContent = `El número ${numero1} no és divisible per ${numero2}.`;
    }
  } else if (i === 2) {
    let [nouNumero1, nouNumero2] = intercanviVariables(numero1, numero2);
    p.textContent = `Després de l'intercanvi: número1 = ${nouNumero1}, número2 = ${nouNumero2}.`;
  }

  // Afegir els elements al div
  HTMLdiv.appendChild(h1);
  HTMLdiv.appendChild(p);
}
