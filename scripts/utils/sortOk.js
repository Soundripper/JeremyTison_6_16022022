let sortParameter = null;

const sortBtn = document.getElementById("sortSelectDD");

function getSortValue(){
    sortParameter = sortBtn.value;
    initMedias();
}

