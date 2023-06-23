let header = document.querySelector('.header')
let menuBurger = document.querySelector('.menu-burger');
window.addEventListener('scroll', function() {
    if (this.pageYOffset > 50){ header.classList.add('__white-header');}
    if (this.pageYOffset < 50){ header.classList.remove('__white-header');}
  });
  menuBurger.addEventListener('click',()=>{
    menuBurger.classList.toggle('__active-burger');
  })