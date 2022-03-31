function photographerFactory(data) {
    // ajout city, country, tagline, price
    const { name, portrait, city, country, tagline, price, id} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        const a = document.createElement( 'a' );
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        console.log(name);

        // ajout link to photographer page
        article.appendChild(a);
        a.href = "photographer.html?Id=" + id;
        a.appendChild(img);
        a.appendChild(h2);

        // ajout h4 h4tag h4price
        const h4 = document.createElement( 'h4' );
        h4.textContent = city + ", " + country;
        article.appendChild(h4);

        const h4tag = document.createElement( 'h4' );
        h4tag.className="h4tag";
        h4tag.textContent = tagline;
        article.appendChild(h4tag);

        const h4price = document.createElement( 'h4' );
        h4price.className="h4price";
        h4price.textContent = price + "€/jour";
        article.appendChild(h4price);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}