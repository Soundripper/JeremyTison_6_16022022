function mediaFactory(media){
    const { 
        title, image, video, likes,
    } = media;
    const gallery = document.querySelector('.photograph-gallery');
    
    const imageCard = document.createElement('div');
    imageCard.className = 'imageCard';
    const imageCardButton = document.createElement('button');
    imageCardButton.className = 'imageCardButton';

    gallery.appendChild(imageCard);
    imageCard.appendChild(imageCardButton);
    imageCardButton.setAttribute('aria-label', title);
    imageCardButton.setAttribute('aria-describedby', 'versGalerie');
    
    if (media.hasOwnProperty('image')){
        const imageDiv = document.createElement('img');
        imageDiv.classList.add('imageThumb');
        imageDiv.setAttribute('src', `assets/photosTotal/${image}`); 
        imageCardButton.appendChild(imageDiv);
        imageDiv.setAttribute('aria-label', title);
        imageDiv.setAttribute('aria-describedby', 'versGalerie');
    } else if (media.hasOwnProperty('video')){
        const imageDiv = document.createElement('video');
        imageDiv.setAttribute('aria-label', title);
        imageDiv.setAttribute('aria-describedby', 'versGalerie');
        imageDiv.classList.add('imageThumb');
        imageDiv.setAttribute('src', `assets/photosTotal/${video}#t=0.1`);
        imageDiv.setAttribute('webkit-playsinline', 'webkit-playsinline');
        imageDiv.setAttribute('type', 'video/mp4');
        // imageDiv.setAttribute("controls", "true");
        imageDiv.setAttribute('muted', 'true');
        imageCardButton.appendChild(imageDiv);
    }
    const imageInfos = document.createElement('div');
    imageInfos.className = 'imageInfos';
    const imageTitle = document.createElement('h4');
    imageTitle.className = 'imageTitle';
    imageTitle.textContent = title;
    const imageLikes = document.createElement('button');
    imageLikes.className = 'imageLikes';
    imageLikes.innerHTML = `${likes} <i class="fa-solid fa-heart heart"></i>`;
    imageLikes.setAttribute('aria-label', 'cœurs');
    imageLikes.addEventListener('click', () => {
        imageLikes.innerHTML = `${likes + 1} <i class="fa-solid fa-heart heart"></i>`;
    });

    imageCard.appendChild(imageInfos);
    imageInfos.appendChild(imageTitle);
    imageInfos.appendChild(imageLikes);
    
    const lightBoxService = new LightBoxEvent();
    lightBoxService.displayLBox();
}
