function mediaFactory(media){
    const {photographerId, title, image, video, likes, date, price} = media;
    const gallery = document.querySelector('.photograph-gallery');
    
    const imageCard = document.createElement('div');
    imageCard.className="imageCard";
    const imageCardButton = document.createElement('button');
    imageCardButton.className="imageCardButton";

    gallery.appendChild(imageCard);
    imageCard.appendChild(imageCardButton);
    imageCardButton.setAttribute("aria-label", title);
    imageCardButton.setAttribute("aria-describedby", "versGalerie");
    
    if (media.hasOwnProperty("image")){
        const imageDiv = document.createElement('img');
        imageDiv.classList.add("imageThumb");
        imageDiv.setAttribute("src", `assets/photosTotal/${image}`); 
        imageCardButton.appendChild(imageDiv);
        imageDiv.setAttribute("aria-label", title);
        imageDiv.setAttribute("aria-describedby", "versGalerie");
    }else if(media.hasOwnProperty("video")){
        const imageDiv = document.createElement('video');
        imageDiv.classList.add("imageThumb");
        const videoDiv = document.createElement('source');
        videoDiv.setAttribute("src", `assets/photosTotal/${video}#t=0.001`);
        videoDiv.setAttribute("type", "video/mp4");
        imageCardButton.appendChild(imageDiv);
        imageDiv.appendChild(videoDiv);
        videoDiv.setAttribute("aria-label", title);
        videoDiv.setAttribute("aria-describedby", "versGalerie");
    }
    
    const imageInfos = document.createElement('div');
    imageInfos.className="imageInfos";

    const imageTitle = document.createElement('h4');
    imageTitle.className="imageTitle";
    imageTitle.textContent = title;

    const imageLikes = document.createElement('button');
    imageLikes.className="imageLikes";
    imageLikes.innerHTML = likes + '<i class="fa-solid fa-heart heart"></i>';
    // const totalLikesDivAdd = document.querySelector(".totalLikes");
    imageLikes.addEventListener("click", function adder(){
        imageLikes.innerHTML = (likes + 1) + '<i class="fa-solid fa-heart heart"></i>';
        // totalLikesDivAdd.innerHTML = (totalLikes += 1) + " " + '<i class="fa-solid fa-heart heart"></i>';
        // imageLikes.removeEventListener("click", adder);
    });

    imageCard.appendChild(imageInfos);
    imageInfos.appendChild(imageTitle);
    imageInfos.appendChild(imageLikes);

    // const imageCards = document.querySelectorAll(".imageCardButton");
    // // console.log(imageCards);

    // imageCards.forEach((imageCardElt, index) => {
    //     imageCardElt.addEventListener("click",  e => {
    //     displayLBox(index);
    //     });
    // });

    const lightBoxService = new LightBoxEvent();
    lightBoxService.displayLBox();
    
}