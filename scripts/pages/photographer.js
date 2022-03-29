//Mettre le code JavaScript lié à la page photographer.html

let params = new URLSearchParams(document.location.search);
const id = params.get('Id');
console.log(id);
