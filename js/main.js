//elementos 
const header = document.querySelector('header');
const articles = document.querySelectorAll('article');
const inicioLink = document.querySelector('a[href="#Inicio"]');
const contactoLink = document.querySelector('a[href="#Contacto"]');

// cambiar color del header al pasar el mouse
header.addEventListener('mouseover', () => {
  header.style.backgroundColor = '#F79DBE'; // Cambiar color del header al pasar el mouse
});

// cambiar el color del heaser despues de haber pasado el mouse
header.addEventListener('mouseout', () => {
  header.style.backgroundColor = '#F25C92'; //queda en color rosa
});

// cambiar color del texto de los articles al pasar el mouse
articles.forEach(article => {
  article.addEventListener('mouseover', () => {
    article.style.color = '#9173A5'; // Cambiar color del texto cuando se pasa el mouse
  });

  //volver los articles a su color original (negro)
  article.addEventListener('mouseout', () => {
    article.style.color = '#0f0f0f'; 
  });
});

// cambiar color enlace del menú "Inicio" al hacer clic
inicioLink.addEventListener('click', (event) => {
  event.preventDefault();
  inicioLink.style.backgroundColor = '#DCC3EB'; // Cambiar color de fondo 
  inicioLink.style.color = '#9173A5'; // Cambiar color del texto 
  document.querySelector(inicioLink.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
});

// cambiar color al enlace del menú "Contacto" al hacer clic 
contactoLink.addEventListener('click', (event) => {
  event.preventDefault();
  contactoLink.style.backgroundColor = '#DCC3EB'; // cambiar color de fondo 
  contactoLink.style.color = '#9173A5'; // cambiar color del texto 
  document.querySelector(contactoLink.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
});
//alerta 
function mostrarAlerta() {
    const estilosAlerta = [
      'background: linear-gradient(#C8FFFD, #bf3b6c)',
      'border: 3px solid #87E6E2',
      'color: #C8FFFD',
    ];
    alert('Esta es mi presentación personal');
  }
  
  mostrarAlerta();