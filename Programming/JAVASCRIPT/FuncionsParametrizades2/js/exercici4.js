function obtenirDiaDeLaSetmana(numero) {
    try {
      // Comprova que el número estigui entre 1 i 7
      if (isNaN(numero) || numero < 1 || numero > 7) {
        throw new Error("El dia ha d’estar entre 1 i 7");
      }
  
      // Retorna el dia de la setmana corresponent al número
      switch (numero) {
        case 1: return "Dilluns";
        case 2: return "Dimarts";
        case 3: return "Dimecres";
        case 4: return "Dijous";
        case 5: return "Divendres";
        case 6: return "Dissabte";
        case 7: return "Diumenge";
      }
    } catch (error) {
      // Si es llança un error, retorna el missatge d'error
      return error.message;
    }
  }
  
  function main() {
    let numero;
    let dia;
  
    // Bucle per demanar el número fins que sigui vàlid
    while (true) {
      numero = parseInt(prompt("Introdueix un número entre 1 i 7:").trim());
      
      // Obtenir el dia corresponent
      dia = obtenirDiaDeLaSetmana(numero);
  
      // Si és un dia vàlid, trenca el bucle
      if (dia !== "El dia ha d’estar entre 1 i 7") {
        break;
      } else {
        // Si és invalid, mostrar el missatge d'error
        console.log(dia);
      }
    }
  
    // Mostra el dia de la setmana
    console.log("El dia de la setmana és: " + dia);
  }
  
  main();