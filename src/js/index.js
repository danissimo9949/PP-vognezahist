
import reveal_main from './modules/scroll-rev-main.js';
import mobileNav from './modules/mobile-nav.js';

reveal_main();
mobileNav();


document.addEventListener("DOMContentLoaded", function () {
  const fireElement = document.querySelector(".banner__title__fire");
  
  fireElement.addEventListener("animationend", function () {
      
      fireElement.remove();
  });
});
