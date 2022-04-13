class LikeService{
    totalLikes = 0;
    totalLikesDiv;
    likes;

    initLikes = (medias) =>{
        medias.forEach(media => {
            this.totalLikes += media.likes;
        });
        this.totalLikesDiv = document.querySelector(".totalLikes");
        this.renderValue();
    }
    // get totalLikes(){
    //     return this.totalLikes;
    // }
    // get totalLikesDiv(){
    //     return this.totalLikesDiv = document.querySelector(".totalLikes");
    // }
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