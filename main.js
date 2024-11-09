function initDarkMode() {
    const alternarModoOscuro = document.getElementById('darkModeToggle');
    const iconoModoOscuro = document.getElementById('darkModeIcon');
    const cuerpo = document.body;
  
    const esModoOscuro = localStorage.getItem('darkMode') === 'true';
    
    if (esModoOscuro) {
      cuerpo.classList.add('dark-mode');
      updateDarkModeIcon(true);
    }
  
    alternarModoOscuro?.addEventListener('click', () => {
      const esOscuro = cuerpo.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', esOscuro);
      updateDarkModeIcon(esOscuro);
    });
  
    function updateDarkModeIcon(esOscuro) {
      if (iconoModoOscuro) {
        iconoModoOscuro.className = esOscuro ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
      }
    }
  }
  
  function initContactButton() {
    const botonCorreoDirecto = document.getElementById('directEmailBtn');
    
    if (botonCorreoDirecto) {
      botonCorreoDirecto.addEventListener('click', () => {
        window.location.href = 'ms-outlook://compose?to=info@smashbrosburgers.com';
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initContactButton();
  });
