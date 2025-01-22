let n = [9,4,6,3];
let t;

// Agafa el primer valor entre el primer i el penúltim
for (i = 0; i < n.length - 1; i++) {
  // Agafa el segon valor entre el següent al primer i l'últim
  for (j = i + 1; j < n.length; j++) {
    // Intercanviar si el primer és més gran que el segon
    if (n[i] > n[j]) {
      t = n[i];
      n[i] = n[j];
      n[j] = t;
    }
  }
}

// Mostrar els valors ja ordenats: 3, 4, 6 i 9
for (i = 0; i < n.length; i++) {
  console.log(n[i]);
}       