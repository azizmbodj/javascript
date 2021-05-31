export let a = {
    prenom : "Alain",
    nom : "Dupont",
    competences : ["js", "bricolage", "cuisine"]
}
export function calcul(){
    return 2 + 3;
}
// pour utiliser les codes stockés dans le fichier 07-toto.js 

// il faut explicement dire ce que l'on veut exporter 
// il faut ajouter avant la création fonction / variable export 

let jours = ["lundi", "mardi"];

// étant donné que la variable jours n'a pas le mot clé export => LOCAL => disponible QUE dans le fichier 07-toto.js ET ne peut pas être utilisée ailleurs 