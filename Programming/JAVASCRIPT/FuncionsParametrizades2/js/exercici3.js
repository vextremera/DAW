function esAnyDeTraspas(any) {
    if ((any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0)) {
      return true;  // Any de traspàs
    }
    return false;  // No és any de traspàs
  }
  
  function mostrarResultat(any, esTraspas) {
    if (esTraspas) {
      console.log(`L'any ${any} és any de traspàs.`);
    } else {
      console.log(`L'any ${any} NO és any de traspàs.`);
    }
  }
  
  function main() {
    const any = parseInt(prompt("Introdueix un any:").trim());
    const esTraspas = esAnyDeTraspas(any);
    mostrarResultat(any, esTraspas);
  }
  
  main();