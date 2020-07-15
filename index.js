//Variables:
let backdrop = document.querySelector('#backdrop');
let detail = document.getElementsByClassName('detail');
let popup = document.querySelector('.popup');

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

for(let i = 0; i < detail.length; i++){
    detail[i].addEventListener('click', () => {
        popup.addEventListener('click', ()=> {
            popup.classList = 'popup';
        })
        
        if(popup.classList.length === 2){
            detail[i].removeEventListener('click', ()=>{});
           
        } else{
            popup.classList.toggle('popup-active');
        }
        
    })    
}



