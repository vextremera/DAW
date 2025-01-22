const HTMLdiv = document.getElementById("resultats");

// Funcions
function classificarEdat(edat) {
  if (edat <= 12) return "Infantil";
  else if (edat <= 18) return "Jove";
  else if (edat <= 64) return "Adult";
  else return "Sènior";
}

function esNumeroPerfecte(num) {
  let sumaDivisors = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sumaDivisors += i;
    }
  }
  return sumaDivisors === num;
}

let edatAdult = 25;
let edatJove = 16;
let edatInfantil = 11;
let numero = 28;

let exercicis = ["Classificació d'edats", "Número perfecte"];

for (let i = 0; i < exercicis.length; i++) {
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const p = document.createElement("p");

  h1.textContent = "Solució Exercici " + (i + 1) + ": " + exercicis[i];

  if (i === 0) {
    let edatsArray = [
      `L'edat ${edatAdult} es classifica com a "${classificarEdat(
        edatAdult
      )}".`,
      `L'edat ${edatJove} es classifica com a "${classificarEdat(edatJove)}".`,
      `L'edat ${edatInfantil} es classifica com a "${classificarEdat(
        edatInfantil
      )}".`,
    ];
    edatsArray.forEach((edat) => {
      const p = document.createElement("p");
      p.textContent = edat;
      div.appendChild(p);
    });
  } else if (i === 1) {
    if (esNumeroPerfecte(numero)) {
      p.textContent = `El número ${numero} és perfecte.`;
    } else {
      p.textContent = `El número ${numero} no és perfecte.`;
    }
  }

  HTMLdiv.appendChild(h1);
  HTMLdiv.appendChild(div);
  HTMLdiv.appendChild(p);
}
