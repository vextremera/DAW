function exercici6(){
    function checkOrder(arr) {
        let ascending = true;
        let descending = true;
        let constant = true;
    
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                ascending = false;
            }
            if (arr[i] < arr[i + 1]) {
                descending = false;
            }
            if (arr[i] !== arr[i + 1]) {
                constant = false;
            }
        }

        if (constant) {
            return "La llista és constant (tots els elements són iguals)."; //CONSTANT
        } 
        else if (ascending) {
            return "La llista està ordenada de més petit a més gran."; // ASCENDENT
        } 
        else if (descending) {
            return "La llista està ordenada de més gran a més petit."; // DESCENDENT
        } 
        else {
            return "La llista no està ordenada."; // NO ORDENADA
        }
    }

    let list1 = [1, 2, 3, 4, 5];
    let list2 = [5, 4, 3, 2, 1];
    let list3 = [3, 1, 4, 2, 5];
    let list4 = [5, 5, 5, 5, 5];
    
    console.log(checkOrder(list1));
    console.log(checkOrder(list2));
    console.log(checkOrder(list3));
    console.log(checkOrder(list4));
}

exercici6();