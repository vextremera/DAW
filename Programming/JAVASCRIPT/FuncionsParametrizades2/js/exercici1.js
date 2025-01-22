function demanarSegons() {
    let segons;
    do {
      segons = prompt("Introdueix un número de segons (enter positiu menor que 360000):").trim();
      if (Number.isInteger(Number(segons)) && segons >= 0 && segons < 360000) {
        return Number(segons);
      }
      alert("Error: Introdueix un número enter positiu menor que 360000.");
    } while (true);
  }
  
  function convertirSegonsAFormat(segons) {
    const hores = Math.floor(segons / 3600);
    const minuts = Math.floor((segons % 3600) / 60);
    const segonsRestants = segons % 60;
  
    const formatHores = String(hores).padStart(2, '0');
    const formatMinuts = String(minuts).padStart(2, '0');
    const formatSegons = String(segonsRestants).padStart(2, '0');
  
    return `${formatHores}:${formatMinuts}:${formatSegons}`;
  }
  
  function mostrarResultat(segons, formatHHMMSS) {
    console.log(`${segons} segons equivalen a ${formatHHMMSS}`);
  }
  
  function main() {
    const segons = demanarSegons();
    const formatHHMMSS = convertirSegonsAFormat(segons);
    mostrarResultat(segons, formatHHMMSS);
  }
  
  main();