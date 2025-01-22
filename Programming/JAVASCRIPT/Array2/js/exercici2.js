let frase = prompt("Escriu una frase").toUpperCase();
let moure = parseInt(prompt("escriu el número de posicions pel cifratge cesar"))
let arrayFrase = frase.split("")

let cryptFrase = "";

// console.log(arrayFrase);

const lletres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for(j = 0; j < arrayFrase.length; j++){
    let trobarLletra = lletres.indexOf(arrayFrase[j])

    if(trobarLletra == -1){
        cryptFrase  += arrayFrase[j];
    }
    else{
        let newPosition = (trobarLletra + moure) % 26;
        cryptFrase += lletres[newPosition];
    }
}

console.log(cryptFrase);
