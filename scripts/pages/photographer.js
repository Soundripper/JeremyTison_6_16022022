//Mettre le code JavaScript lié à la page photographer.html

let params = new URLSearchParams(document.location.search);
const photographerId = params.get('Id');
console.log(photographerId);

const getPhotographerData = async () => {
    const response = await fetch("data/photographers.json");
    const photographersData = await response.json();
    const photographerData = photographersData.photographers.filter( x => x.id == photographerId);
    //console.log(photographerData);
    return photographerData;
}

async function init() {
    // Récupère les datas du photographe
    const photographerData = await getPhotographerData();
    console.log(photographerData);
    photographerDataFactory(photographerData);
};

init();