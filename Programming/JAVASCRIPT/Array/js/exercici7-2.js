function intercalarLlistesMidesDiferents(llista1, llista2) {
    let llistaIntercalada = [];
    let maxLongitud = Math.max(llista1.length, llista2.length);
  
    for (let i = 0; i < maxLongitud; i++) {
      if (i < llista1.length) {
        llistaIntercalada.push(llista1[i]);
      }
      if (i < llista2.length) {
        llistaIntercalada.push(llista2[i]);
      }
    }
  
    console.log("Llista 1:", llista1);
    console.log("Llista 2:", llista2);
    console.log("Llista intercalada:", llistaIntercalada);
  }
  
  let llista1 = [1, 1, 1, 1, 1, 1];
  let llista2 = [2, 2, 2];
  
  intercalarLlistesMidesDiferents(llista1, llista2);