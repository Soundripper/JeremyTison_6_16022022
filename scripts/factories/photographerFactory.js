function photographerFactory(data) {
    // ajout city, country, tagline, price
    const {name, portrait, city, country, tagline, price, id} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        const a = document.createElement( 'a' );
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        // ajout link to photographer page
        article.appendChild(a);
        a.href = "photographer.html?id=" + id;
        a.appendChild(img);
        a.appendChild(h2);

        // ajout h4 h4tag h4price
        const h4 = document.createElement( 'h4' );
        h4.textContent = city + ", " + country;
        article.appendChild(h4);
        h4.setAttribute("aria-label", city + country);
        h4.setAttribute("tabindex", 0);

        const h4tag = document.createElement( 'h4' );
        h4tag.className="h4tag";
        h4tag.textContent = tagline;
        article.appendChild(h4tag);
        h4tag.setAttribute("aria-label", tagline);
        h4tag.setAttribute("tabindex", 0);

        const h4price = document.createElement( 'h4' );
        h4price.className="h4price";
        h4price.textContent = price + "€/jour";
        article.appendChild(h4price);
        h4price.setAttribute("aria-label", price + "euros");
        h4price.setAttribute("tabindex", 0);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}
