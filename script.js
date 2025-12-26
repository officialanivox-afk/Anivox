const portal = document.querySelector('.portal-wrapper');
const button = document.querySelector('.enter-btn');

function enterWorld() {
  portal.style.transform = 'scale(1.3)';
  portal.style.boxShadow = '0 0 150px #00ffe0';

  setTimeout(() => {
    window.location.href = "world.html";
  }, 700);
}

portal.addEventListener('click', enterWorld);
button.addEventListener('click', enterWorld);
