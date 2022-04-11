document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
        closeLBox();
    }
    if (event.key === 'ArrowLeft') {
        prevLBox();
    }
    if (event.key === 'ArrowRight') {
        nextLBox();
    }
})