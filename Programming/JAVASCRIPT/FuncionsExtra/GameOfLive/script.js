let taulaBidimensional = []

// Funció per crear una taula de 10x10 amb numeros 0
function generarTaula() {
    for (let i = 0; i < 10; i++) {
      let fila = []
      for (let j = 0; j < 10; j++) {
        // fila.push(Math.floor(Math.random() * 2))
        fila.push(0)
      }
      taulaBidimensional.push(fila)
    }
    mostrarGeneracio();
  }

//Funcio per afegir 20(1) a la taula de 0
  function afegir1s() {
    for (let i = 0; i < 40; i++) {
      let fila = Math.floor(Math.random() * 10)
      let columna = Math.floor(Math.random() * 10)
      taulaBidimensional[fila][columna] = 1
    }

    netejarBordesExteriors();
    mostrarGeneracio();
  }

  function netejarBordesExteriors(){
    for (let i = 0; i < 10; i++) {
      taulaBidimensional[0][i] = 0;
      taulaBidimensional[9][i] = 0;
      taulaBidimensional[i][0] = 0;
      taulaBidimensional[i][9] = 0;
    }
  }

  //si un 1 esta sol s ha de treure
  function crearGeneracio(){
    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        if (taulaBidimensional[i][j] == 1 && contarVirus(i, j) < 2 || contarVirus(i, j) > 3) {
          taulaBidimensional[i][j] = 0;
        }
        else if (taulaBidimensional[i][j] == 0 && contarVirus(i, j) == 3) {
          taulaBidimensional[i][j] = 1;
        }
      }
    }
    mostrarGeneracio();
  }

  function contarVirus(fila, columna) {
    let virus = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i!== 0 || j!== 0) {
          virus += taulaBidimensional[fila + i][columna + j];
        }
      }
    }
    return virus;
  }

  function mostrarGeneracio() {
    console.log(taulaBidimensional);
  }

  //al pulsar start button
  document.getElementById("start").addEventListener("click", function() {
    //comprovar si hay algun 1
    if (taulaBidimensional.some(fila => fila.some(cell => cell === 1))) {
    }
    else {
        generarTaula();
    }
  });

  document.getElementById("next").addEventListener("click", function() {
    //comprovar si todos los elementos de taula son 0
    if (taulaBidimensional.every(fila => fila.every(cell => cell === 0))) {
      afegir1s();
    }
    else {
      crearGeneracio();
    }
  });

  document.getElementById("clear").addEventListener("click", function() {
    taulaBidimensional = [];
    mostrarGeneracio();
  });