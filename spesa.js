
const listaUl = document.querySelector(".lista_spesa")

// creiamo un array con gli ingredienti dentro
const spesa = ["pomodori", "patate", "cipolle", "sottilette", "tonno", "patatine", "merendine"];
console.log(spesa);

let i = 0;

// facciamo un ciclo per creare la lista



do {
    let ingrediente = spesa[i];
    console.log(ingrediente);
    i++;
    

} while (i < spesa.length);
