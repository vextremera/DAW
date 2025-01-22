// ! NIF de persones
// * Senzill: 8 dígits i una lletra majúscula
const nifSenzill = /^\d{8}[A-Z]$/;

// * K, L, M, X, Y o Z, 7 dígits i una lletra majúscula que no sigui I, O o U
const nifEspecial = /^[KLMXYZ]\d{7}[A-HJ-NP-TV-Z]$/;

// ! Matrícula d'un cotxe
// & Senzill: 4 dígits, un guió i 3 lletres majúscules
const matriculaSenzilla = /^\d{4}-[A-Z]{3}$/;

// & O bé (1 o 2 lletres majúscules, un guió, 4 dígits, un guió i 1 o 2 lletres majúscules) o el format anterior
const matriculaComplexa = /^([A-Z]{1,2}-\d{4}-[A-Z]{1,2})|(\d{4}-[A-Z]{3})$/;

// ! Adreça de correu electrònic
// * Del SaPa (professors: paraula amb lletres minúscules i pot incloure números al final)
const correuProfesor = /[a-zA-Z]{1}\.[a-zA-Z]*@sapalomera.cat/

//  * Adreces d'alumnes (a més, porten una lletra minúscula i un punt al principi)
const correuAlumne = /^[a-z]\.[a-z]+\d*$/;

// * Qualsevol adreça de correu electrònic
const correuGeneral = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// ! Número
// & Senzill: enter positiu o negatiu
const numeroEnter = /^-?\d+$/;

// & Positiu o negatiu, amb o sense decimals
const numeroDecimal = /^-?\d+(\.\d+)?$/;

// ! Data
// * Senzill: un o dos dígits pel dia, guió, un o dos pel mes, guió i dos o quatre dígits per l'any
const dataSenzilla = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{2}|\d{4})$/;

// * Data amb separadors \
const dataSeparada = /^(0[1-9]|[12][0-9]|3[01])\(0[1-9]|1[0-2])\(d{2}\|d{4})$/;

// * Paraula pel dia de la setmana, una coma i un espai, un o dos dígits pel dia, la paraula " de ", una paraula pel mes, la paraula " de " i 4 dígits per l'any.
const dataDiaSetmana = /^(lunes|martes|miércoles|jueves|viernes|sábado|domingo),\s(0[1-9]|[12][0-9]|3[01])\sde\s(janvier|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)\sde\s\d{4}$/;

// ! Expressió d'un bucle
const bucleFor = /^for\s?\(\s?.*;.*;.*\)\s?{.*}$/;

// ! Definició d'un array de números enters, reals o text
const arrayDefinicio = /^[a-zA-Z_]\w*\[\]\s?[a-zA-Z_]\w*\[\d*\]$/;

// ! Text
// & Que comenci amb ABC i acabi amb 789
const textABC789 = /^ABC.*789$/;

// & Que comenci amb A, B o C i acabi amb 7, 8 o 9
const textABC7_9 = /^[ABC].* [789]$/;