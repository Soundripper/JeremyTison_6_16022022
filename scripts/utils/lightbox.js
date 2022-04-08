const closeLightBox = document.querySelector(".lightbox__close");
closeLightBox.addEventListener("click", event => {
    closeLBox();
});

const nextLightBox = document.querySelector(".lightbox__next");
nextLightBox.addEventListener("click", event => {
    nextLBox();
});

const prevLightBox = document.querySelector(".lightbox__prev");
prevLightBox.addEventListener("click", event => {
    prevLBox();
});

const imageToDisplay = document.querySelector(".imageBox");
const videoToDisplay = document.querySelector(".videoBox");
const textToDisplay = document.querySelector(".imageTitleBox");

indexCurrent = null;
myMediasArray = [];

function displayLBox(index) {
    console.log(index);
    const lightbox = document.getElementById("lightbox");
	lightbox.style.display = "flex";
    indexCurrent = index;
    refreshLBox(indexCurrent);

    lightbox.setAttribute('aria-disabled', 'false');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-hidden', 'false');
    mainWrapper.setAttribute('aria-hidden', 'true');
    mainWrapper.setAttribute('aria-disabled', 'true');
    header.setAttribute('aria-hidden', 'true');
    header.setAttribute('aria-disabled', 'true');
    body.classList.add('no-scroll');
    // document.querySelector(".closeBtn").focus();
}

function refreshLBox(indexCurrent){
    if(myMediasArray[indexCurrent].image){
        imageToDisplay.style.display = "block";
        imageToDisplay.src = "assets/photosTotal/" + myMediasArray[indexCurrent].image;
        videoToDisplay.style.display = "none";
    }else if(myMediasArray[indexCurrent].video){
        videoToDisplay.style.display = "block";
        videoToDisplay.src = "assets/photosTotal/" + myMediasArray[indexCurrent].video;
        imageToDisplay.style.display = "none";
    }    
    textToDisplay.textContent = myMediasArray[indexCurrent].title;
}

function closeLBox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    index = null;

    lightbox.setAttribute('aria-modal', 'false');
    mainWrapper.setAttribute('aria-hidden', 'false');
    mainWrapper.setAttribute('aria-disabled', 'false');
    header.setAttribute('aria-hidden', 'false');
    header.setAttribute('aria-disabled', 'false');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.setAttribute('aria-disabled', 'true');
    body.classList.remove('no-scroll');
    // openModalBtn.focus();
}

function nextLBox(){
    if(indexCurrent >= myMediasArray.length -1){
        indexCurrent = 0;
        console.log(indexCurrent);
    }else{
        indexCurrent += 1;
        console.log(indexCurrent);
    }
    refreshLBox(indexCurrent);
}

function prevLBox(){
    if(indexCurrent <= 0) {
        indexCurrent = myMediasArray.length -1;
        console.log(indexCurrent);
    }else{
        indexCurrent -= 1;
        console.log(indexCurrent);
    }
    refreshLBox(indexCurrent);
}


