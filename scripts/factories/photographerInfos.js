/* photographer-header datas factory price and totalLikes */

// let contactName = null;

function photographerDataFactory(data) {
    const { 
        name, portrait, city, country, tagline, price, 
            } = data;
    const picture = `assets/photographers/${portrait}`;

    contactName = name;
    // console.log(contactName);

    photographerHeader = document.querySelector('.photograph-header');

    const description = document.createElement('div');
    description.classList.add('description');
    photographerHeader.appendChild(description);

    const nameDiv = document.createElement('h2');
    nameDiv.textContent = name;
    description.appendChild(nameDiv);
    nameDiv.setAttribute('aria-label', name);
    nameDiv.setAttribute('tabindex', 0);

    const location = document.createElement('h4');
    location.textContent = `${city} ${country}`;
    description.appendChild(location);
    location.setAttribute('aria-label', city + country);
    location.setAttribute('tabindex', 0);

    const taglineDiv = document.createElement('h4');
    taglineDiv.className = 'h4tag';
    taglineDiv.textContent = tagline;
    description.appendChild(taglineDiv);
    taglineDiv.setAttribute('aria-label', tagline);
    taglineDiv.setAttribute('tabindex', 0);

    // Image
    const portraitDiv = document.createElement('img');
    portraitDiv.setAttribute('alt', name);
    portraitDiv.setAttribute('src', picture);
    photographerHeader.appendChild(portraitDiv);

    // Price et likes
    const priceLikesDiv = document.createElement('div');
    priceLikesDiv.className = 'priceLikesDiv';
    const priceDiv = document.createElement('h3');
    priceDiv.className = 'price';
    priceDiv.textContent = `${price} € / jour`;
    priceLikesDiv.appendChild(priceDiv);
    description.appendChild(priceLikesDiv);

    // Total likes
    const totalLikesDiv = document.createElement('h3');
    totalLikesDiv.className = 'totalLikes';
    priceLikesDiv.appendChild(totalLikesDiv);
    totalLikesDiv.setAttribute('aria-label', "Prix et j'aime");
}
