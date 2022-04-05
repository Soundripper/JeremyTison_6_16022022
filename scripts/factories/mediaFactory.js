function mediaFactory(media){
    // const {id, photographerId, title, image, video, likes, date, price} = data;

    //////// Photograph Gallery ///////////////////////////////////////////////

    const gallery = document.querySelector('.photograph-galery');
    
    const imageCard = document.createElement('div');
    imageCard.className="imageCard";
    gallery.appendChild(imageCard);
    
    if (media.hasOwnProperty("image")){
        const imageDiv = document.createElement('img');
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

    // data.forEach(media => {
    //      // console.log(media.image);
    //     const imageCard = document.createElement('div');
    //     imageCard.className="imageCard";
    //     gallery.appendChild(imageCard);

    //     imageCard.innerHTML = `
    //         <div>
    //             <img src="assets/photosTotal/${media.image}" alt="">
    //             <h4>${media.title}</h4>
    //         </div>
    //     `
    // });

}