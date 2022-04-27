let sortParameter = 'Popularité';

window.onload = () => {
  sortParameter = 'Popularité';
  document.querySelector('.dropbtn').classList.toggle('show');
};

function myDropdownFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
    document.querySelector('.dropbtn').classList.toggle('show');
    document.getElementById('Popularité').focus();
  }
  
  window.onclick = (event) => {
    if ((event.target.id === 'Titre') || (event.target.id === 'Date') || (event.target.id === 'Popularité')) {
        document.querySelector('.dropbtn').classList.toggle('show');
        document.getElementById('myDropdown').classList.toggle('show');
        document.getElementById('myDropdown').focus();
        sortParameter = event.target.id;
        document.querySelector('.dropbtn').innerHTML = `${event.target.id}`;
        // console.log(sortParameter);
        initMedias();
      }
};

const dropDown = document.querySelector('.dropbtn');
dropDown.addEventListener('click', myDropdownFunction);
