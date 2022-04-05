function photographerDataFactory(data) {
    console.log(data);
    const { name, portrait, city, country, tagline, price} = data[0];
    const picture = `/assets/photographers/${portrait}`;
    console.log(name);

    photographerHeader  = document.querySelector(".photograph-header");

    //////// Photograph header ///////////////////////////////////////////////
    // Description container = name + location(city, country) + tagline
    const description = document.createElement('div');
    description.classList.add("description");
    photographerHeader.appendChild(description);

    const nameDiv = document.createElement('h2');
    nameDiv.textContent = name;
    description.appendChild(nameDiv);

    const location = document.createElement('h4')
    location.textContent = city + ", "+ country;
    description.appendChild(location);

    const taglineDiv = document.createElement('h4');
    taglineDiv.className="h4tag";
    taglineDiv.textContent = tagline;
    description.appendChild(taglineDiv);

    // Image
    const portraitDiv = document.createElement('img')
    portraitDiv.setAttribute("src", picture);
    photographerHeader.appendChild(portraitDiv);

    // Price et likes
    const priceDiv = document.createElement('h3');
    priceDiv.className="price";
    priceDiv.textContent = price +"€ / jour";
    description.appendChild(priceDiv);
}