// ================ NAV BAR + LOGO ===============
const openMenuButton = document.getElementById('open-menu')
const closeMenuButton = document.getElementById('close-menu')
const navMenu = document.getElementById('navigation-menu')
const homeLogoButton = document.getElementById('home-logo')

function openMenu() {
  navMenu.style.display = 'flex'
  navMenu.style.height = `${window.innerHeight}px`
}

function closeMenu() {
    navMenu.classList.toggle('close')
   setTimeout(() => {
   navMenu.classList.toggle('close')
    navMenu.style.display = 'none'
   }, 340)

}


openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
homeLogoButton.addEventListener('click', () => window.scrollTo(0,0))

// =============== SWIPER API ============
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay :{
      delay:3500,
      disableOnInteraction:false,
  },
  pagination: {
      el: '.swiper-pagination',
      progressbarFillClass: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }, 
});