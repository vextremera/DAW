function demanarValorReal(pregunta) {
    let valor;
    do {
      valor = prompt(pregunta).trim();
      if (!isNaN(valor) && valor !== "" && isFinite(valor)) {
        return parseFloat(valor);
      }
      alert("Error: Introdueix un número real vàlid.");
    } while (true);
  }
  
  function calcularAutonomia(capacitat, consum) {
    const autonomiaTotalKm = (capacitat / consum) * 100; // Autonomia en quilòmetres
    const quilometres = Math.floor(autonomiaTotalKm);
    const metres = Math.round((autonomiaTotalKm - quilometres) * 1000);
    return [quilometres, metres];
  }
  
  function mostrarAutonomia(autonomiaArray) {
    const [quilometres, metres] = autonomiaArray;
    console.log(`L'autonomia del vehicle és de ${quilometres} quilòmetres i ${metres} metres.`);
  }
  
  function main() {
    const capacitat = demanarValorReal("Introdueix la capacitat del dipòsit en litres:");
    const consum = demanarValorReal("Introdueix el consum del vehicle en litres per cada 100 km:");
    
    const autonomiaArray = calcularAutonomia(capacitat, consum);
    mostrarAutonomia(autonomiaArray);
  }
  
  main();