class Sorter {
    static sortMedias = (elements, property) => {
        return elements.sort((a,b) => {
            if (a[property] > b[property]){
                return 1;
            }
            if (a[property] < b[property]){
                return -1;
            }
            return 0;
        })
    }
}

class LikeService{
    totalLikes = 0;
    totalLikesDiv;
    likes = 0;

    initLikes = (medias) =>{
        medias.forEach(media => {
            this.totalLikes += media.likes;

            this.likes = media.likes;
            console.log(this.likes);
        });
        this.totalLikesDiv = document.querySelector(".totalLikes");
        this.renderValue();
    }

    // get totalLikes() {
    //     return this.totalLikes;
    // }

    // get likes() {
    //     return this.likes;
    // }
    
    renderValue = () => {
        this.totalLikesDiv.innerHTML = `${this.totalLikes} <i class="fa-solid fa-heart heart"></i>`;
    }

    imageLikesEventClick() {
        let totalLikes = this.totalLikes;

        // let likes = this.likes;
        // console.log(likes);

        const imageLikeBtn = document.querySelectorAll(".imageLikes");
        imageLikeBtn.forEach(element => {
            element.addEventListener("click", function adder(e){
                totalLikes++;
                // console.log(totalLikes);
                this.totalLikesDiv = document.querySelector(".totalLikes");
                this.totalLikesDiv.innerHTML = (totalLikes) + " " + `<i class="fa-solid fa-heart heart"></i>`;
                
                // console.log(this.likes);
                // e.currentTarget.innerHTML = (likes + 1) + '<i class="fa-solid fa-heart heart"></i>';

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