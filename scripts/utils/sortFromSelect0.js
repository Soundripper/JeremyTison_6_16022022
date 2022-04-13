let sortParameter = "Popularité";

window.onload = () => {
    const selectElt = document.querySelector("#sortSelectDD");
    console.log(selectElt);
    const selectDiv = document.querySelector(".sortSelect");
    const newSelect = document.createElement("button");
    newSelect.classList.add("newSelect");
    newSelect.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML;
    selectDiv.appendChild(newSelect);

    const newMenu = document.createElement("div");
    newMenu.classList.add("select-Items", "select-hide");

    for(let option of selectElt.options){
        const newOption = document.createElement("button");
        newOption.innerHTML = option.innerHTML;
        newOption.addEventListener("click", function(){
            for(let option of selectElt.options){
                if(option.innerHTML === this.innerHTML){
                    selectElt.selectedIndex = option.index;
                    sortParameter = option.value;
                    break;
                }
            }
            newSelect.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML;
            newSelect.classList.toggle("select-hide");
            newMenu.classList.toggle("select-hide");
            initMedias();
        });
        newMenu.appendChild(newOption);
    }
    selectDiv.appendChild(newMenu);

    newSelect.addEventListener("click", function(e){
        e.stopPropagation();
        newSelect.classList.toggle("select-hide");
        this.nextElementSibling.classList.toggle("select-hide");
        newMenu.firstChild.classList.add("upArrow");
    });
}