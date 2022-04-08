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
    const {photographerData} = await getPhotographerData();
    photographerDataFactory(photographerData);
};

async function initMedias() {
    document.querySelector('.photograph-galery').innerHTML="";
    const {photographerMedias} = await getPhotographerData();
    if(sortParameter == "Titre"){
        photographerMedias.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    }
    if(sortParameter == "Popularité"){
        photographerMedias.sort((a,b) => (a.likes > b.likes) ? 1 : ((b.likes > a.likes) ? -1 : 0));
    }
    if(sortParameter == "Date"){
        photographerMedias.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
    }
    console.log(photographerMedias);

    photographerMedias.forEach(media =>{
        mediaFactory(media);
        myMediasArray.push(media);
    });
};

console.log(myMediasArray);

init();
initMedias();