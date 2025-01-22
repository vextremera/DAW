const HTMLdiv = document.getElementById("resultats");

function generarTaulaMultiplicar(num) {
  let taula = [];
  for (let i = 1; i <= 10; i++) {
    taula.push(`${num} x ${i} = ${num * i}`);
  }
  return taula;
}

function esPrimer(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function llistarNombresPrimers(limit) {
  let primers = [];
  for (let i = 1; i <= limit; i++) {
    if (esPrimer(i)) primers.push(i);
  }
  return primers;
}

let numeroTaula = parseInt(
  prompt("Digues el número per la taula de multiplicar")
);
let limitPrimers = 20; // limit del numbres primers

let exercicis = ["Taula de multiplicar", "Números primers"];

// * dibuixar html
for (let i = 0; i < exercicis.length; i++) {
  const h1 = document.createElement("h1");
  const div = document.createElement("div");

  h1.textContent = "Solució Exercici " + (i + 1) + ": " + exercicis[i];
  HTMLdiv.appendChild(h1);

  if (i === 0) {
    // taula de multiplicar amb número dit
    let taula = generarTaulaMultiplicar(numeroTaula);
    taula.forEach((linia) => {
      div.innerHTML += linia + "<br>";
    });
    HTMLdiv.appendChild(div);
  } else if (i === 1) {
    // llistar numeros primers
    let primers = llistarNombresPrimers(limitPrimers);
    div.textContent = `Els nombres primers entre 1 i ${limitPrimers} són: ${primers.join(
      ", "
    )}.`;
    HTMLdiv.appendChild(div);
  }
}
