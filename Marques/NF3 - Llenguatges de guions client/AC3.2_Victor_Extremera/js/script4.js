const HTMLdiv = document.getElementById("resultats");

function trobarMaxim(array) {
  return Math.max(...array);
}

function ordenarArray(array) {
  return array.slice().sort((a, b) => a - b); // slice duplica l'array per no modificar el princiapl i sort, l'ordena de menys a més
}

let numeros = [7, 12, 5, 22, 9, 1];

let exercicis = ["Màxim d'un array", "Ordenar un array"];

// * dibuixar l'html
for (let i = 0; i < exercicis.length; i++) {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Solució Exercici " + (i + 1) + ": " + exercicis[i];
  HTMLdiv.appendChild(h1);

  if (i === 0) {
    // trobar número més gran
    let maxim = trobarMaxim(numeros);
    p.textContent = `L'array és: [${numeros.join(
      ", "
    )}]. El valor més alt és: ${maxim}.`;
  } else if (i === 1) {
    // ordenar l'array
    let ordenat = ordenarArray(numeros);
    p.textContent = `L'array original és: [${numeros.join(
      ", "
    )}]. L'array ordenat és: [${ordenat.join(", ")}].`;
  }

  HTMLdiv.appendChild(p);
}
