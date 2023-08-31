import ScrollReveal from 'scrollreveal';

function reveal_main(){
  ScrollReveal({
    distance: '100px',
    delay: 2400,
    reset: false
  })
  
  ScrollReveal().reveal('.header__main-navigation', {
    origin: 'top',
    delay: 300,
    mobile: false
  })
  
  ScrollReveal().reveal('.header__additional-info', {
    origin: 'top',
    delay: 300,
    mobile: false
  })
  
  ScrollReveal().reveal('.header__contacts', {
    origin: 'top',
    delay: 300,
    mobile: false
  })
  
  ScrollReveal().clean('.nav-icon')
  ScrollReveal().clean('.mobile-nav')
  
  
  ScrollReveal().reveal('.banner__button', {
    origin: 'bottom',
    delay: 500,
    mobile: false
  })
  
  ScrollReveal().reveal('.banner__titles', {
    origin: 'left',
    delay: 500,
    mobile: false
  })
}

export default reveal_main;