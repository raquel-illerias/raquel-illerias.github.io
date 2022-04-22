const menuIcon = document.querySelector('.burger-menu');
const myNav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    if(myNav.style.display === 'none') {
        myNav.style.display ='flex';}
        else {
            myNav.style.display = 'none';
        }
});