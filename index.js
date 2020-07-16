//Variables:
let backdrop = document.querySelector('#backdrop');
let detail = document.getElementsByClassName('detail');
let popup = document.querySelector('.popup');

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
        popup.addEventListener('click', ()=> {
            popup.classList = 'popup';
        })
        //Checks how many classes are there and if the number of class values equal to the conditional value i block the functionality of background div events.
        if(popup.classList.length === 2){
            detail[i].removeEventListener('click', ()=>{});
           
        } else{
            popup.classList.toggle('popup-active');

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
                    equa.textContent = equaRadius;
                    polar.textContent =polarRadius;
                    gravityV.textContent =gravity;
                    masses.textContent = mass.massValue + ' to the power ' + mass.massExponent;
                    perihelionV.textContent =perihelion;
                    aphelionV.textContent = aphelion;
                    revolution.textContent = sideralOrbit;
                    rotation.textContent = sideralRotation;
                    densityV.textContent = density;
                    escapeV.textContent = escape;
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


            switch(planet){
                case "sun":
                    dataEachplanet('sun');
                    break;
                case "mercury":
                    dataEachplanet('mercury');
                    
                    break;
                case "venus":
                    dataEachplanet('venus');
                    break;
                case "earth":
                    dataEachplanet('earth');
                    break;
                case "mars":
                    dataEachplanet('mars');
                    break;
                case "jupiter":
                    dataEachplanet('jupiter');
                    break;
                case "saturn":
                    dataEachplanet('saturn');
                    break;
                case "uranus":
                    dataEachplanet('uranus');
                    break;
                case "neptune":
                    dataEachplanet('neptune');
                    break;
            }
            
        }
        
    })    
}



