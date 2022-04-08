let sortParameter = null;

const sortBtn = document.querySelector(".sortButton");

const listToModify = document.querySelector("ul");
let listItemsToShuffle = listToModify.querySelectorAll("li");

let hrItems = listToModify.querySelectorAll("hr");
hrItems.forEach((element) => {
    element.style.display = "none";
});

let first = listItemsToShuffle[0];
let second = listItemsToShuffle[1];
let third = listItemsToShuffle[2];
second.style.display = "none";
third.style.display = "none";

const hideDropDownMenu = () => {
    second.style.display = "none";
    third.style.display = "none";
    hrItems.forEach((element) => {
        element.style.display = "none";
    });
}

const showDropDownMenu = () => {
    second.style.display = "block";
    third.style.display = "block";
    hrItems.forEach((element) => {
        element.style.display = "block";
    });
}

listItemsToShuffle.forEach((element, index)=> {
    listItemsToShuffle = listToModify.querySelectorAll("li");
    element.addEventListener("click", e => {
        listToModify.prepend(listItemsToShuffle[index]);
        listItems = listToModify.querySelectorAll("li");
        first = listItems[0];
        second = listItems[1];
        third = listItems[2];
        console.log(e.target.textContent);
        sortParameter = e.target.textContent;
        initMedias();
    });
});

sortBtn.addEventListener("mouseover", e => {
    showDropDownMenu();
});
sortBtn.addEventListener("focus", e => {
    showDropDownMenu();
});
sortBtn.addEventListener("mouseout", e => {
    hideDropDownMenu();
});
sortBtn.addEventListener("focusout", e => {
    hideDropDownMenu();
});



