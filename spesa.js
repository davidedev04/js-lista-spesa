
let listaUl = document.getElementById("lista_spesa")

// creiamo un array con gli ingredienti dentro
const spesa = ["pomodori", "patate", "cipolle", "sottilette", "tonno", "patatine", "merendine"];
console.log(spesa);

let i = 0;

// facciamo un ciclo per creare la lista

let ingrediente;

do {

    let ingrediente = spesa[i];

    console.log(ingrediente);

    i++;


    // creiamo un li 
    const ingredienteLi = document.createElement("li");

    // aggiungiamoli il contenuto
    ingredienteLi.append(ingrediente);

    // aggiungiamo l'li all'ul
    listaUl.append(ingredienteLi);


} while (i < spesa.length);
