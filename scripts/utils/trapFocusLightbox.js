function trapFocusLightbox() {
  // add all the elements inside modal which you want to make focusable
  const  lBfocusableElements =
      // 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      'button, img';
  const lightboxFocus = document.querySelector('#lightbox'); // select the modal by it's id

  const lBfirstFocusableElement = lightboxFocus.querySelectorAll(lBfocusableElements)[0]; // get first element to be focused inside modal
  const lBfocusableContent = lightboxFocus.querySelectorAll(lBfocusableElements);
  const lBlastFocusableElement = lBfocusableContent[lBfocusableContent.length - 1]; // get last element to be focused inside modal

  document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === lBfirstFocusableElement) {
        lBlastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lBlastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        lBfirstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  lBfirstFocusableElement.focus();
}