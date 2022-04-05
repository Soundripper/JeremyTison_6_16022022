function displayLBox() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    modal.setAttribute('aria-disabled', 'false');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'false');

    mainWrapper.setAttribute('aria-hidden', 'true');
    mainWrapper.setAttribute('aria-disabled', 'true');
    header.setAttribute('aria-hidden', 'true');
    header.setAttribute('aria-disabled', 'true');
    body.classList.add('no-scroll');
    document.querySelector(".closeBtn").focus();
}

function closeLBox() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    mainWrapper.setAttribute('aria-hidden', 'false');
    mainWrapper.setAttribute('aria-disabled', 'false');
    header.setAttribute('aria-hidden', 'false');
    header.setAttribute('aria-disabled', 'false');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    openModalBtn.focus();
}