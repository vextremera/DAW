function intercalarLlistes(llista1, llista2) {
    let llistaIntercalada = [];
  
    for (let i = 0; i < llista1.length; i++) {
      llistaIntercalada.push(llista1[i]);
      llistaIntercalada.push(llista2[i]);
    }
  
    console.log("Llista 1:", llista1);
    console.log("Llista 2:", llista2);
    console.log("Llista intercalada:", llistaIntercalada);
  }
  
  let llista1 = [1, 1, 1];
  let llista2 = [2, 2, 2];
  
  intercalarLlistes(llista1, llista2);