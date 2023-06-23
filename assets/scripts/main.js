let header = document.querySelector('.header')
let menuBurger = document.querySelector('.menu-burger');
window.addEventListener('scroll', function() {
    if (this.pageYOffset > 50){ header.classList.add('__white-header');}
    if (this.pageYOffset < 50){ header.classList.remove('__white-header');}
  });
  menuBurger.addEventListener('click',()=>{
    menuBurger.classList.toggle('__active-burger');
  })

  var map;

  DG.then(function () {
      map = DG.map('map', {
          center: [43.26153486699917, 76.929221636255],
          zoom: 16,
      });
  
      DG.marker([43.26153486699917, 76.929221636255]).addTo(map);
  });