function show() {
  document.getElementById("intro").style.display="grid";
  setTimeout("hide()", 3000); // 5 wait, change the delay here
}

function hide() {
  document.getElementById("intro").style.display="none";
  document.getElementById("content").style.display="block";
}


const scrollToTopButton = document.getElementById('scrollToTopButton');

// Aggiungi l'evento click al pulsante per scorrere verso l'alto
/*scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});*/

const scrollToRulesButton = document.getElementById('scrollToRulesButton');
const scrollToRulesButton2 = document.getElementById('scrollToRulesButton2');

// Aggiungi l'evento click al pulsante per scorrere verso l'alto
scrollToRulesButton.addEventListener('click', () => {
  document.getElementById('rules').scrollIntoView({
    behavior: 'smooth'
  });
});

scrollToRulesButton2.addEventListener('click', () => {
  document.getElementById('rules').scrollIntoView({
    behavior: 'smooth'
  });
});


const scrollToStyleButton = document.getElementById('scrollToStyleButton');

// Aggiungi l'evento click al pulsante per scorrere verso l'alto
scrollToStyleButton.addEventListener('click', () => {
  document.getElementById('styles').scrollIntoView({
    behavior: 'smooth'
  });
});


const scrollToOverdriveButton = document.getElementById('scrollToOverdriveButton');

// Aggiungi l'evento click al pulsante per scorrere verso l'alto
scrollToOverdriveButton.addEventListener('click', () => {
  document.getElementById('overdrive').scrollIntoView({
    behavior: 'smooth'
  });
});

const scrollToPlayButton = document.getElementById('scrollToPlayButton');

// Aggiungi l'evento click al pulsante per scorrere verso l'alto
scrollToPlayButton.addEventListener('click', () => {
  document.getElementById('play').scrollIntoView({
    behavior: 'smooth'
  });
});


const checkbox = document.getElementById('theme-toggle');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.remove('cupcake');
    document.body.classList.add('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'cupcake');
    document.body.classList.remove('dark');
    document.body.classList.add('cupcake');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const drawerLinks = document.querySelectorAll('.drawer-side a');
  
  drawerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const drawerToggle = document.getElementById('my-drawer');
      if (drawerToggle) {
        drawerToggle.checked = false;
      }
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Aumenta questo valore per un ritardo maggiore prima dello scorrimento
        setTimeout(() => {
          smoothScrollTo(targetElement);
        }, 300); // Aumentato da 300ms a 500ms
      }
    });
  });

  // Funzione di scorrimento smooth personalizzata
  function smoothScrollTo(targetElement) {
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Durata in millisecondi (2 secondi)
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Funzione di easing
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});