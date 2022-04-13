class LikeService{
    totalLikes = 0;
    totalLikesDiv;

    initLikes = (medias) =>{
        medias.forEach(media => {
            this.totalLikes += media.likes;
        });
        this.totalLikesDiv = document.querySelector(".totalLikes");
        this.renderValue();
    }
    get totalLikes(){
        return this.totalLikes;
    }
    get totalLikesDiv(){
        return this.totalLikesDiv;
    }
    incrementTotalLikes = () => {
        // console.log(this.totalLikes);
        this.totalLikes+=1;
        this.renderValue();
    }
    renderValue = () => {
        // const totalLikesDiv = document.querySelector(".totalLikes");
        this.totalLikesDiv.innerHTML = `${this.totalLikes} <i class="fa-solid fa-heart heart"></i>`;
    }
    
    // imageLikesEventClick() {
    //     const imageLikeBtn = document.querySelectorAll(".imageLikes");
    //     imageLikeBtn.forEach((imageLikeBtn) => {
    //         imageLikeBtn.addEventListener("click", function adder() {
    //             // this.incrementTotalLikes();
    //             const totalLikesDiv = document.querySelector(".totalLikes");
    //             totalLikesDiv.innerHTML = (this.totalLikes += 1) + " " + '<i class="fa-solid fa-heart heart"></i>';
    //             // imageLikes.removeEventListener("click", adder);
    //         });
    //     });
        
    // }
}