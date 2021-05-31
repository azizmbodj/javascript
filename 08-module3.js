// pleins de code 

let a = {
    nom : "Alain"
}

let b = {
    prenom : "DOE" 
}

function c (){
    console.log("je suis c");
}

// 1 seul export 
/* let objet = {
    nom : a,
    prenom : b,
    methode : c
}
export default objet; */ // pas besoin de destructurer dans l'import !

// alternative

export default {
    nom : a,
    prenom : b,
    methode : c
}