function mediaFactory(media){

    const gallery = document.querySelector('.photograph-galery');
    
    const imageCard = document.createElement('div');
    imageCard.className="imageCard";
    const imageCardButton = document.createElement('button');
    imageCardButton.className="imageCardButton";
    gallery.appendChild(imageCard);
    imageCard.appendChild(imageCardButton);
    
    if (media.hasOwnProperty("image")){
        const imageDiv = document.createElement('img');
        imageDiv.classList.add("imageThumb");
        imageDiv.setAttribute("src", `assets/photosTotal/${media.image}`); 
        imageCardButton.appendChild(imageDiv);
    }else if(media.hasOwnProperty("video")){
        const imageDiv = document.createElement('video');
        imageDiv.classList.add("imageThumb");
        imageDiv.setAttribute("src", `assets/photosTotal/${media.video}`); 
        imageCardButton.appendChild(imageDiv);
    }
    
    const imageInfos = document.createElement('div');
    imageInfos.className="imageInfos";

    const imageTitle = document.createElement('h4');
    imageTitle.className="imageTitle";
    imageTitle.textContent = media.title;

    const imageLikes = document.createElement('button');
    imageLikes.className="imageLikes";
    imageLikes.innerHTML = media.likes + '<i class="fa-solid fa-heart heart"></i>';

    imageCard.appendChild(imageInfos);
    imageInfos.appendChild(imageTitle);
    imageInfos.appendChild(imageLikes);

    const imageCards = document.querySelectorAll(".imageCardButton");
    // console.log(imageCards);

    imageCards.forEach((imageCardElt, index) => {
        imageCardElt.addEventListener("click",  e => {
        displayLBox(index);
        });
    });
}

