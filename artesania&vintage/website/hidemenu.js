const menuIcon = document.querySelector('.burger-menu');
const myNav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    if(myNav.style.display === 'none') {
        myNav.style.display ='flex';}
        else {
            myNav.style.display = 'none';
        }
});


const catIcon = document.querySelector('.dropdown-cat');
const dropCon = document.querySelector('.dropdown-container');

catIcon.addEventListener('click', () => {
    if(dropCon.style.display === 'none') {
        dropCon.style.display ='flex';}
        else {
            dropCon.style.display = 'none';
        }
});