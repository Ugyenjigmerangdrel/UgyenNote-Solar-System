//Variables:
let backdrop = document.querySelector('#backdrop');

function init(){
    let widthValue = window.innerWidth;
    let heightValue = window.innerHeight;
    backdrop.style.width = `${widthValue}px`;
    backdrop.style.height = `${heightValue}px`;
}
init();

window.addEventListener('resize', () => {
    init();
})

