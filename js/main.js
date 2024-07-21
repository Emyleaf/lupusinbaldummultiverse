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
