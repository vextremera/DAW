// Demana la mida de l'array (M)
const M = parseInt(prompt("Introdueix la mida de l'array quadrat (M):"));

// Crea un array de M x M
let array = Array.from({ length: M }, () => Array(M).fill(0));

// Omple l'array amb els números de l'1 al MxM i mostra l'array
let count = 1;
for (let i = 0; i < M; i++) {
    for (let j = 0; j < M; j++) {
        array[i][j] = count++;
    }
}
console.log("Array inicial:");
console.table(array);

// Funció per mostrar una matriu a la consola
function mostrarArray(array) {
    console.table(array);
}

// Omple l'array amb 1 a la diagonal principal i números del 2 a l'M a les altres diagonals
for (let i = 0; i < M; i++) {
    array[i][i] = 1; // Diagonal principal
    for (let j = 0; j < M; j++) {
        if (i !== j) {
            array[i][j] = Math.abs(i - j) + 1;
        }
    }
}
console.log("Array amb 1 a la diagonal principal:");
mostrarArray(array);

// Suma els elements de la diagonal major
let sumaDiagonalPrincipal = 0;
for (let i = 0; i < M; i++) {
    sumaDiagonalPrincipal += array[i][i];
}
console.log("Suma de la diagonal principal:", sumaDiagonalPrincipal);

// Suma dels elements del triangle superior
let sumaTriangleSuperior = 0;
for (let i = 0; i < M; i++) {
    for (let j = i + 1; j < M; j++) {
        sumaTriangleSuperior += array[i][j];
    }
}
console.log("Suma del triangle superior:", sumaTriangleSuperior);

// Suma dels elements del triangle inferior
let sumaTriangleInferior = 0;
for (let i = 1; i < M; i++) {
    for (let j = 0; j < i; j++) {
        sumaTriangleInferior += array[i][j];
    }
}
console.log("Suma del triangle inferior:", sumaTriangleInferior);

// Omple els elements del triangle superior amb 0s
for (let i = 0; i < M; i++) {
    for (let j = i + 1; j < M; j++) {
        array[i][j] = 0;
    }
}

// Omple els elements del triangle inferior amb 0s
for (let i = 1; i < M; i++) {
    for (let j = 0; j < i; j++) {
        array[i][j] = 0;
    }
}
console.log("Array amb 0s als triangles superior i inferior:");
mostrarArray(array);

// Repeteix els passos per a la diagonal major inversa
for (let i = 0; i < M; i++) {
    array[i].fill(0); // Reinicia l'array a 0
}
for (let i = 0; i < M; i++) {
    array[i][M - 1 - i] = 1; // Diagonal inversa
    for (let j = 0; j < M; j++) {
        if (i !== M - 1 - j) {
            array[i][j] = Math.abs((M - 1 - i) - j) + 1;
        }
    }
}
console.log("Array amb 1 a la diagonal inversa:");
mostrarArray(array);

// Suma dels elements de la diagonal major inversa
let sumaDiagonalInversa = 0;
for (let i = 0; i < M; i++) {
    sumaDiagonalInversa += array[i][M - 1 - i];
}
console.log("Suma de la diagonal inversa:", sumaDiagonalInversa);

// Suma dels elements del triangle superior de la diagonal inversa
let sumaTriangleSuperiorInvers = 0;
for (let i = 0; i < M; i++) {
    for (let j = M - i; j < M; j++) {
        sumaTriangleSuperiorInvers += array[i][j];
    }
}
console.log("Suma del triangle superior (diagonal inversa):", sumaTriangleSuperiorInvers);

// Suma dels elements del triangle inferior de la diagonal inversa
let sumaTriangleInferiorInvers = 0;
for (let i = 1; i < M; i++) {
    for (let j = 0; j < M - i - 1; j++) {
        sumaTriangleInferiorInvers += array[i][j];
    }
}
console.log("Suma del triangle inferior (diagonal inversa):", sumaTriangleInferiorInvers);

// Omple els elements del triangle superior de la diagonal inversa amb 0s
for (let i = 0; i < M; i++) {
    for (let j = M - i; j < M; j++) {
        array[i][j] = 0;
    }
}

// Omple els elements del triangle inferior de la diagonal inversa amb 0s
for (let i = 1; i < M; i++) {
    for (let j = 0; j < M - i - 1; j++) {
        array[i][j] = 0;
    }
}
console.log("Array final amb 0s als triangles superior i inferior de la diagonal inversa:");
mostrarArray(array);