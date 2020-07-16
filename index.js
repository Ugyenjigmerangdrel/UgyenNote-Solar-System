//Variables:
let backdrop = document.querySelector('#backdrop');
let detail = document.getElementsByClassName('detail');
let popup = document.querySelector('.popup');
let dataColor = document.querySelectorAll('.popuptext');
let toggler = document.querySelector('.toggle-burger')

//Popup elements variables
let name = document.querySelector('.name');
let equa = document.querySelector('.equaradius');
let polar = document.querySelector('.polarradius');
let gravityV = document.querySelector('.gravity');
let masses = document.querySelector('.mass');
let perihelionV = document.querySelector('.perihelion');
let aphelionV = document.querySelector('.aphelion');
let revolution = document.querySelector('.revolution');
let rotation = document.querySelector('.rotation');
let densityV = document.querySelector('.density');
let escapeV = document.querySelector('.escapevel')
let moonsCount = document.querySelector('.moons');
let disby = document.querySelector('.disby');
let disdate = document.querySelector('.disdate');

//Functions for resize values for containers
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
//Events Handling for the div elements
for(let i = 0; i < detail.length; i++){
    detail[i].addEventListener('click', () => {
        toggler.addEventListener('click', ()=> {
            popup.classList = 'popup';
            toggler.classList = 'toggle-burger';
            toggler.style.animation = '';
        })
        //Checks how many classes are there and if the number of class values equal to the conditional value i block the functionality of background div events.
        if(popup.classList.length === 2){
            detail[i].removeEventListener('click', ()=>{});
           
        } else{
            popup.classList.toggle('popup-active');
            toggler.classList.toggle('toggle')
            toggler.style.animation = 'burger';
            //Variables
            var planet = detail[i].id;
            var planetaryAPi;
            //Functions for api calls and data utilisation
            function apicall() {
                fetch(planetaryAPi)
                .then(response => {
                    return response.json();
                })

                .then(data => {
                    console.log(data);
                    const {englishName, moons, gravity, equaRadius, escape, polarRadius, perihelion, aphelion, sideralOrbit, sideralRotation, discoveredBy, discoveryDate, density, mass,} = data;

                    console.log(mass.massValue)

                    //Data Insertion
                    name.textContent = englishName;
                    equa.textContent = equaRadius + ' km';
                    polar.textContent =polarRadius + ' km';
                    gravityV.innerHTML = gravity + ' ms' + '<sup>-2</sup>';
                    masses.innerHTML = mass.massValue + ' x ' + ` 10<sup>${mass.massExponent}</sup> kg`;
                    perihelionV.textContent =perihelion + ' km';
                    aphelionV.textContent = aphelion + ' km';
                    revolution.textContent = sideralOrbit + '  earth days';
                    rotation.textContent = sideralRotation + '  hours';
                    densityV.innerHTML = density + ' gm<sup>-3</sup>';
                    escapeV.textContent = escape/1000 + ' km/s';
                    if(moons != null){
                        moonsCount.textContent = moons.length;
                    } else{
                        moonsCount.textContent=  0;
                    }
                    if(discoveredBy != ""){
                        disby.textContent = discoveredBy;
                    } else{
                        disby.textContent = "Unknown";
                    }
                    
                    if(discoveryDate != ""){
                        disdate.textContent = discoveryDate;
                    } else{
                        disdate.textContent = "Unknown";
                    }
                })
            }
            //DOM content manipulation function:
            
            function dataEachplanet(planet){
                planetaryAPi= `https://api.le-systeme-solaire.net/rest/bodies/${planet}`;
                apicall();
                
            }

            function changeDc(color){
                for(var i = 0; i < dataColor.length; i++){
                    dataColor[i].style.color = color;
                }
            }

            //Data Call Conditions
            switch(planet){
                case "mercury":
                    dataEachplanet('mercury');
                    changeDc('#9e9e9d');
                    break;
                case "venus":
                    dataEachplanet('venus');
                    changeDc('#ff860d');
                    break;
                case "earth":
                    dataEachplanet('earth');
                    changeDc('#0dffff');
                    break;
                case "mars":
                    dataEachplanet('mars');
                    changeDc('#ff4a0d');
                    break;
                case "jupiter":
                    dataEachplanet('jupiter');
                    changeDc('#ffc061');
                    break;
                case "saturn":
                    dataEachplanet('saturn');
                    changeDc('#f240ff');
                    break;
                case "uranus":
                    dataEachplanet('uranus');
                    changeDc('#0bd9c1');
                    break;
                case "neptune":
                    dataEachplanet('neptune');
                    changeDc('#0b83d9');
                    break;
            }
            
        }
        
    })    
}



