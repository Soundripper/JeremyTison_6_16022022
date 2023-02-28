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
    document.querySelector('.photograph-gallery').innerHTML = '';

    const { photographerMedias } = await getPhotographerData();

    if (sortParameter === 'Titre'){
        Sorter.sortMedias(photographerMedias, 'title', 'asc');
    }
    if (sortParameter === 'Popularité'){
        Sorter.sortMedias(photographerMedias, 'likes', 'desc');
    }
    if (sortParameter === 'Date'){
        Sorter.sortMedias(photographerMedias, 'date', 'asc');
    }
    myMediasArray = [];
    photographerMedias.forEach((media) => {
        mediaFactory(media);
        myMediasArray.push(media);
    });

    const likeService = new LikeService();
    likeService.initLikes(photographerMedias);
    likeService.imageLikesEventClick();
}

init();
initMedias();
