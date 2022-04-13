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
    const {photographerData, photographerMedias} = await getPhotographerData();
    photographerDataFactory(photographerData);
    // const likeService = new LikeService();
    // likeService.initLikes(photographerMedias);
    // likeService.renderValue();
};

async function initMedias() {
    totalLikes = 0;
    document.querySelector('.photograph-galery').innerHTML="";

    const {photographerMedias} = await getPhotographerData();

    if(sortParameter == "Titre"){
        photographerMedias.sort((a,b) => (a.title > b.title) ? 1 : ((a.title < b.title) ? -1 : 0));
    }
    if(sortParameter == "Popularité"){
        photographerMedias.sort((a,b) => (a.likes > b.likes) ? -1 : ((a.likes < b.likes) ? 1 : 0));
    }
    if(sortParameter == "Date"){
        photographerMedias.sort((a,b) => (a.date > b.date) ? 1 : ((a.date < b.date) ? -1 : 0));
    }
    myMediasArray = [];
    console.log(photographerMedias);
    photographerMedias.forEach(media =>{
        mediaFactory(media);
        myMediasArray.push(media);
        totalLikes += media.likes;
    });
    totalLikesDiv = document.querySelector(".totalLikes");
    totalLikesDiv.innerHTML = totalLikes + " " + '<i class="fa-solid fa-heart heart"></i>';
};

init();
initMedias();