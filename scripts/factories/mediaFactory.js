function mediaFactory(media){

    const gallery = document.querySelector('.photograph-galery');
    
    const imageCard = document.createElement('div');
    imageCard.className="imageCard";
    gallery.appendChild(imageCard);
    
    if (media.hasOwnProperty("image")){
        const imageDiv = document.createElement('img');
        imageDiv.classList.add("imageThumb");
        imageDiv.setAttribute("src", `assets/photosTotal/${media.image}`); 
        imageCard.appendChild(imageDiv);
    }else if(media.hasOwnProperty("video")){
        const imageDiv = document.createElement('video');
        imageDiv.setAttribute("src", `assets/photosTotal/${media.video}`); 
        imageCard.appendChild(imageDiv);
    }
    
    const imageTitle = document.createElement('h4');
    imageTitle.className="imageTitle";
    imageTitle.textContent = media.title;
    imageCard.appendChild(imageTitle);

    const imageCards = document.querySelectorAll(".imageCard");
    // console.log(imageCards);

    imageCards.forEach((imageCardElt, index) => {
        imageCardElt.addEventListener("click",  e => {
        displayLBox(index);
        });
    });
}

