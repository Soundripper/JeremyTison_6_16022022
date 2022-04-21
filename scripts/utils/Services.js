class Sorter {
    static sortMedias = (elements, property, order = "desc") => {

        return elements.sort((a,b) => {
            if (a[property] === b[property]){
                return 0;
            }

            switch (order){
                case "desc" :
                    if (a[property] < b[property]){
                        return 1;
                    }
                    if (a[property] > b[property]){
                        return -1;
                    }
                    break;
                case "asc" :
                    if (a[property] > b[property]){
                        return 1;
                    }
                    if (a[property] < b[property]){
                        return -1;
                    }
                    break;
            }
        })
    }
}

class LikeService{
    totalLikes = 0;
    totalLikesDiv;
    likes = 0;
    totalLikesDiv = document.querySelector(".totalLikes");

    initLikes = (medias) =>{
        medias.forEach(media => {
            this.totalLikes += media.likes;
        });
        this.totalLikesDiv = document.querySelector(".totalLikes");
        this.renderValue();
    }

    get totalLikes() {
        return this.totalLikes;
    }

    get likes() {
        return this.likes;
    }
    
    renderValue = () => {
        this.totalLikesDiv.innerHTML = `${this.totalLikes} <i class="fa-solid fa-heart heart"></i>`;
    }

    imageLikesEventClick() {
        let totalLikes = this.totalLikes;

        const imageLikeBtn = document.querySelectorAll(".imageLikes");
        imageLikeBtn.forEach(element => {
            element.addEventListener("click", function adder(e){
                totalLikes++;
                // console.log(totalLikes);
                this.totalLikesDiv = document.querySelector(".totalLikes");
                this.totalLikesDiv.innerHTML = (totalLikes) + " " + `<i class="fa-solid fa-heart heart"></i>`;
                e.currentTarget.removeEventListener("click", adder);
            });
        });
    }  
}

class LightBoxEvent{
    displayLBox = () => {
        const imageCards = document.querySelectorAll(".imageCardButton");
        imageCards.forEach((imageCardElt, index) => {
            imageCardElt.addEventListener("click",  e => {
            displayLBox(index);
            });
        });
    }
}