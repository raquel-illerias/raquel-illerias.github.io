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


// ================ FADE BUTTON ===============

const fadeButton = document.getElementById('fade-btn')
const discountHidden = document.getElementById('discount')

function fadeDown() {
  if (discountHidden.style.display === 'none') {
    discountHidden.style.display = 'block'
    discountHidden.scrollIntoView();
  }
  else {
    discountHidden.style.display = 'none'
  }
}

fadeButton.addEventListener('click', fadeDown)
