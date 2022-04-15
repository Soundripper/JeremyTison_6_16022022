const body = document.querySelector("body");
const openModalBtn = document.querySelector(".contact_button");
const header = document.querySelector('header');
const mainWrapper = document.getElementById('main');
const modal = document.getElementById("contact_modal");
const modalTitle = document.querySelector(".modal-title");
const modalCloseBtn = document.querySelector(".closeBtn");

const contactNameDiv = document.querySelector(".contactName");

function displayModal() {
	modal.style.display = "block";

    contactNameDiv.innerHTML = contactName;
    trapFocusContact();
    // modal.setAttribute('aria-disabled', 'false');
    // modal.setAttribute('aria-modal', 'true');
    // modal.setAttribute('aria-hidden', 'false');

    // mainWrapper.setAttribute('aria-hidden', 'true');
    // mainWrapper.setAttribute('aria-disabled', 'true');
    // header.setAttribute('aria-hidden', 'true');
    // header.setAttribute('aria-disabled', 'true');
    body.classList.add('no-scroll');
    document.querySelector(".closeBtn").focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    // mainWrapper.setAttribute('aria-hidden', 'false');
    // mainWrapper.setAttribute('aria-disabled', 'false');
    // header.setAttribute('aria-hidden', 'false');
    // header.setAttribute('aria-disabled', 'false');
    // modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    openModalBtn.focus();
}

const submitClick = () =>{
    const formFirstName = document.getElementById("prenom");
    console.log("Prénom : " + formFirstName.value);
    const formLastName = document.getElementById("nom");
    console.log("Nom : " + formLastName.value);
    const formEmail = document.getElementById("email");
    console.log("E-Mail : " + formEmail.value);
    const formMessage = document.getElementById("message");
    console.log("Message : " + formMessage.value);
    closeModal();
};


