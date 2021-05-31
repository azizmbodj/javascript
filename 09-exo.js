export function isAdulte(age){
    if(age > 0 && age <= 10){
        console.log("vous êtes un enfant");
    }
    else if(age > 10 && age <= 18){
        console.log("vous êtes un ado");
    }
    else if(age > 18 && age <= 120){
        console.log("vous êtes un adulte")
    }
    else{
        console.log("l'age mentionné n'est pas conforme");
    }
}