// Mettre le code JavaScript lié à la page photographer.html
let myMediasArray = [];
const params = new URLSearchParams(document.location.search);
const photographerId = params.get('id');

const getPhotographerData = async () => {
    const response = await fetch('data/photographers.json');
    const photographersData = await response.json();
    const photographerData = photographersData.photographers.filter((x) => x.id === parseInt(photographerId, 10))[0];
    const photographerMedias = photographersData.media.filter((x) => x.photographerId === parseInt(photographerId, 10));
    return { photographerData, photographerMedias };
};

// photographerDataFactory dans photographerInfos
async function init() {
    const { photographerData } = await getPhotographerData();
    photographerDataFactory(photographerData);
}

async function initMedias() {
    // totalLikes = 0;
    document.querySelector('.photograph-gallery').innerHTML = '';

    const { photographerMedias } = await getPhotographerData();

    if (sortParameter === 'Titre'){
        Sorter.sortMedias(photographerMedias, 'title', 'asc');
        // photographerMedias.sort((a,b) => (a.title > b.title) ? 1 : ((a.title < b.title) ? -1 : 0));
    }
    if (sortParameter === 'Popularité'){
        Sorter.sortMedias(photographerMedias, 'likes', 'desc');
        // photographerMedias.sort((a,b) => (a.likes > b.likes) ? -1 : ((a.likes < b.likes) ? 1 : 0));
    }
    if (sortParameter === 'Date'){
        Sorter.sortMedias(photographerMedias, 'date', 'asc');
        // photographerMedias.sort((a,b) => (a.date > b.date) ? 1 : ((a.date < b.date) ? -1 : 0));
    }
    myMediasArray = [];
    // console.log(photographerMedias);
    photographerMedias.forEach((media) => {
        mediaFactory(media);
        myMediasArray.push(media);
        // totalLikes += media.likes;
    });

    const likeService = new LikeService();
    likeService.initLikes(photographerMedias);
    likeService.imageLikesEventClick();
    // totalLikesDiv = document.querySelector(".totalLikes");
    // totalLikesDiv.innerHTML = totalLikes + " " + '<i class="fa-solid fa-heart heart"></i>';
}

init();
initMedias();
