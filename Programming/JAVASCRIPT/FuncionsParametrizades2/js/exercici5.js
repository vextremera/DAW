function esAnyDeTraspas(any) {
    try {
        if ((any % 4 === 0 && any % 100 !== 0) || (any % 400 === 0)) {
            return true; // Any de traspàs
        } else {
            return false; // Any no de traspàs
        }
    } catch (error) {
        console.error("Error en la funció esAnyDeTraspas:", error.message);
        return false;
    }
}

// Funció per obtenir el nombre de dies d'un mes
function diesDelMes(mes, any) {
    try {
        if (mes < 1 || mes > 12) {
            throw new Error("El mes ha de ser un número entre 1 i 12");
        }

        // Mesos amb 31 dies
        const mesos31Dies = [1, 3, 5, 7, 8, 10, 12];

        // Mesos amb 30 dies
        const mesos30Dies = [4, 6, 9, 11];

        // Febrer (mes 2)
        if (mes === 2) {
            // Comprovar si és any de traspàs
            if (esAnyDeTraspas(any)) {
                return 29; // Any de traspàs
            } else {
                return 28; // Any no de traspàs
            }
        }

        // Si el mes té 31 dies
        if (mesos31Dies.includes(mes)) {
            return 31;
        }

        // Si el mes té 30 dies
        if (mesos30Dies.includes(mes)) {
            return 30;
        }

    } catch (error) {
        console.error("Error en la funció diesDelMes:", error.message);
        return -1; // En cas d'error retorna -1
    }
}

function main() {
    try {
        const mes = parseInt(prompt("Introdueix el número del mes (1-12):").trim());
        const any = parseInt(prompt("Introdueix l'any:").trim());

        const dies = diesDelMes(mes, any);

        if (dies === -1) {
            console.log("Error: El mes ha de ser un número entre 1 i 12.");
        } else {
            console.log(`El mes ${mes} de l'any ${any} té ${dies} dies.`);
        }
    } catch (error) {
        console.error("Ha ocorregut un error:", error.message);
    }
}

main();