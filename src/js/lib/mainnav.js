export function init() {
    const button = document.querySelector("#hamburger");

    button.addEventListener("click", e => {
        console.log(button.classList)
        if(button.classList.contains('closed')) {
            button.classList.remove('closed');
            button.classList.add('open');  
        } else {
            button.classList.remove('open');
            button.classList.add('closed'); 
        }
    });
}
