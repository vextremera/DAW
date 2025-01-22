const HTMLdiv = document.getElementById("resultats");

function suma(a, b) {
  return a + b;
}

function maxim(a, b) {
  return a > b ? a : b;
}

let numero1 = 5;
let numero2 = 8;

let exercicis = ["Funció suma", "Funció màxim"];

for (let i = 0; i < exercicis.length; i++) {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Solució Exercici " + (i + 1) + ": " + exercicis[i];
  HTMLdiv.appendChild(h1);

  if (i === 0) {
    let resultatSuma = suma(numero1, numero2);
    p.textContent = `La suma de ${numero1} i ${numero2} és: ${resultatSuma}.`;
  } else if (i === 1) {
    let resultatMaxim = maxim(numero1, numero2);
    p.textContent = `El número més gran entre ${numero1} i ${numero2} és: ${resultatMaxim}.`;
  }

  HTMLdiv.appendChild(p);
}
