//Mettre le code JavaScript lié à la page photographer.html

let params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');

const getPhotographerData = async () => {
    const response = await fetch("data/photographers.json");
    const photographersData = await response.json();
    const photographerData = photographersData.photographers.filter(x => x.id == photographerId);
    const photographerMedias = photographersData.media.filter(x => x.photographerId == photographerId);
    //console.log(photographerData);
    return {photographerData, photographerMedias};
}


async function init() {
    // Récupère les datas du photographe
    const {photographerData, photographerMedias} = await getPhotographerData();
    photographerDataFactory(photographerData);
    photographerMedias.forEach(media =>{
        mediaFactory(media);
        myArray.push(media);
    });
};

console.log(myArray);

init();