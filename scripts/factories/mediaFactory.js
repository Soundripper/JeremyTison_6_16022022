function mediaFactory(data){
    const {id, photographerId, title, image, video, likes, date, price} = data;

    //////// Photograph Gallery ///////////////////////////////////////////////

    const gallery = document.querySelector('.photograph-galery');
    
    // data.forEach(image => {
    //     console.log(image.image);
    //     const imageCard = document.createElement('div');
    //     imageCard.className="imageCard";
    //     gallery.appendChild(imageCard);
        
    //     const imageDiv = document.createElement('img');
    //     imageDiv.setAttribute("src", `assets/photosTotal/${image.image}`); 
    //     imageCard.appendChild(imageDiv);

    //     const imageTitle = document.createElement('h4');
    //     imageTitle.textContent = image.title;
    //     imageCard.appendChild(imageTitle);
    // });

    data.forEach(image => {
        console.log(image.image);
        const imageCard = document.createElement('div');
        imageCard.className="imageCard";
        gallery.appendChild(imageCard);

        imageCard.innerHTML = `
            <div>
                <img src="assets/photosTotal/${image.image}" alt="">
                <h4>${image.title}</h4>
            </div>
        `
    });
    
}