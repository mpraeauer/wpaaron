// import * as MainNav from './lib/mainnav.js';
// window.MainNav = MainNav;

const button = document.querySelector("#hamburger");

function init() {
        if(button.classList.contains('closed')) {
            button.classList.remove('closed');
            button.classList.add('open');  
        } else {
            button.classList.remove('open');
            button.classList.add('closed'); 
        }
}
button.addEventListener("click",init)