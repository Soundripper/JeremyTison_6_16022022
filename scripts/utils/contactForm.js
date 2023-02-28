const body = document.querySelector('body');
const openModalBtn = document.querySelector('.contact_button');
const modal = document.getElementById('contact_modal');

function displayModal() {
    modal.style.display = 'block';
    const contactNameDiv = document.querySelector('.contactName');
    contactNameDiv.innerHTML = contactName;
    trapFocusContact();
    body.classList.add('no-scroll');
    document.querySelector('.closeBtn').focus();
}

function closeModal() {
    modal.style.display = 'none';
    body.classList.remove('no-scroll');
    openModalBtn.focus();
}

const submitClick = () => {
    const formFirstName = document.getElementById('prenom');
    console.log(`Prénom : ${formFirstName.value}`);
    const formLastName = document.getElementById('nom');
    console.log(`Nom : ${formLastName.value}`);
    const formEmail = document.getElementById('email');
    console.log(`E-Mail : ${formEmail.value}`);
    const formMessage = document.getElementById('message');
    console.log(`Message : ${formMessage.value}`);
    closeModal();
};

const submitButton = document.querySelector('.submit_button');
submitButton.addEventListener('click', submitClick);

const contactbutton = document.querySelector('.contact_button');
contactbutton.addEventListener('click', displayModal);
