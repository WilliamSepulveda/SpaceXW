import { dragons } from "./app.js";

export const Capsulesmenu = async () => {
    let contenedor3 = document.querySelector(".navigationNumbersGrid");
    contenedor3.innerHTML = "";
    let capsules = await dragons();
    let number = 1; 

    capsules.forEach((capsule, index) => {
        let plantilla3 = `
            <div id="capsule-${index}" class="navigationNumber" data-index="${index}">
                ${number}
            </div>`;
        
        contenedor3.innerHTML += plantilla3;
        number++;
    });

    document.querySelectorAll(".navigationNumber").forEach(element => {
        element.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            setMenuCapsule(index);
        });
    });
};

function setMenuCapsule(index) {
    Dragonsmaquetacion(index);
}

export const Dragonsmaquetacion = async (index = 0) => {
    let dragones = await dragons(); 
    let dragon = dragones[index]; 

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";
//---------------------------------------------heat_shilt-----------------------------// 
    let titulo = dragon.name;
    let material = dragon.heat_shield.material;
    let size_meters = dragon.heat_shield.size_meters;
    let temp_degrees = dragon.heat_shield.temp_degrees;
    let dev_partner = dragon.heat_shield.dev_partner;
    let more_info = dragon.wikipedia;
//--------------------------------------------launch charge-----------------------------//
    let mass_kg = dragon.launch_payload_mass.kg;
    let mass_lb = dragon.launch_payload_mass.lb;

//--------------------------------------------------launch_payload ---------------------//
    let cubic_meters = dragon.launch_payload_vol.cubic_meters;
    let cubic_feet = dragon.launch_payload_vol.cubic_feet;
//----------------------------------------------------trunk_info------------------------//
    let cubic_meters2 = dragon.trunk.trunk_volume.cubic_meters; 
    let cubic_feet2 = dragon.trunk.trunk_volume.cubic_feet;
    let solar_array = dragon.trunk.cargo.solar_array;
    let unpressurized_cargo = dragon.trunk.cargo.unpressurized_cargo;
    let meters = dragon.height_w_trunk.meters;
    let feet = dragon.height_w_trunk.feet;
    let meters2 = dragon.diameter.meters;
    let feet2 = dragon.diameter.feet;
//-------------------------------------------general_info-------------------------------//
    let name = dragon.name;
    let type = dragon.type;
    let active = dragon.active;
    let crew_capacity = dragon.crew_capacity;
    let sidewall_angle_deg = dragon.sidewall_angle_deg;
    let orbit_duration_yr = dragon.orbit_duration_yr;
    let dry_mass_kg = dragon.dry_mass_kg;
    let dry_mass_lb = dragon.dry_mass_lb;
//--------------------------------------------images----------------------------//
    let images = dragon.flickr_images;
    


    let plantilla1 = `
        <div class="mGS1Section">
            <div class="contDescription">
                <img src="storage/image/1356479.png">
            </div>
          <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>name</h2>
                <p>↑</p>
                <h1>${name}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>type</h2>
                <h1> ${type}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>crew_capacity</h2>
                <h1>${crew_capacity}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>sidewall_angle_deg</h2>
                <h1>${sidewall_angle_deg}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>orbit_duration</h2>
                <h1>${orbit_duration_yr}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>dry_mass_kg</h2>
                <h1>${dry_mass_kg}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>dry_mass_lb</h2>
                <h1>${dry_mass_lb}</h1>
            </div>
        </div>
    </div>`;
    
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
    <div id="title" class="mGS2Section">
        <div class="contTitle">
            <h1>${titulo}</h1>
        </div>
    </div>
    <div id="diagramas" class="mGS2Section">
        <div class="container">
            <div class="progress" style="--i:85;--clr:#50f30a;">
                <h3>launch_charge<span>%</span></h3>
                <h4>${mass_kg}Kg</h4>
                <h3>launch_charge<span>%</span></h3>
                <h2>${mass_lb}Lb</h2>
            </div>
            <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                <h3>launch_payload <span>%</span></h3>
                <h4>${cubic_meters}M</h4>
                <h2>${cubic_feet}FT</h2>
            </div>
        </div>
    </div>
    <div id="mGS2SGrid" class="mGS2Section">
        <div class="mGS2SGGridSection">
            <div id="informationR" class="information_rocket">
                <div class="cont_espera">
                    <img src="storage/image/spacex.png" alt="">
                </div>
                <div class="content_information">
                     <div class="titlecontent_information">
                    <h1>heat shild <br>••••••••••••••</h1>
                </div>
                    <div class="contenido">
                        <div class="contenido_hijo">
                            <p>Material</p>
                            <p>size_meters</p>  
                            <p>temp_degrees</p>                         
                            <p>dev_partner</p>
                            <p>more info</p>                           
                        </div>
                        <div class="contenido_hijo2">
                            <p>${material}</p>
                            <p>${size_meters}</p>
                            <p>${temp_degrees}</p>
                            <p>${dev_partner}</p>
                            <p></p>
                            <a href="${more_info}" target="_blank">Open</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mGS2SGGridSection">
            <div class="contenedorimg_dad">
                <div id="contenedorImagenes" class="contenedorimg_son">
                ${images.map(image => `<img src="${image}" alt="Dragon image">`).join('')}
                </div>
            </div>
        </div>
        <div id="informationR2" class="mGS2SGGridSection">
            <div class="cont_espera">
                <img src="storage/image/elonj.jpg" alt="">
            </div>
            <div class="content_information">
                <div class="titlecontent_information">
                    <h1>trunk_info<br>••••••••••••••</h1>
                </div>
                <div class="contenido2">
                    <div class="contenido_hijo">
                        <p>cubic_meters</p>
                        <p>cubic_feet</p>
                        <p>solar_array</p>
                        <p>unpressurized_cargo</p>
                        <p>meters_trunk</p>
                        <p>feet_trunk</p>  
                        <p>meter_diameter</p>                         
                        <p>feet_diameter</p> 
                    </div>
                    <div class="contenido_hijo2">
                        <p>${cubic_meters2}</p>
                        <p>${cubic_feet2}</p>
                        <p>${solar_array}</p>
                        <p>${unpressurized_cargo}</p>
                        <p>${meters}</p>
                        <p>${feet}</p>
                        <p>${meters2}</p>
                        <p>${feet2}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mGS2Section">
    <div class="footer_dad">
        <div class="footer_son">
            <li id="rocket" onclick="rockets()">
                <a class="select" href="#">
                    <img src="storage/image/cohete.png">
                    <span>Rockets</span>
                </a>
            </li>
            <li id="rocket" onclick="capsules()">
                <a class="select" href="#">
                    <img src="storage/image/capsula-espacial.png">
                    <span>Capsules</span>
                </a>
            </li>
           <li id="rocket" onclick="botoncrews()">
                <a class="select" href="#">
                    <img src="storage/image/tripulacion.png">
                        <span>Crews</span>
                </a>
            </li>
            <li id="rocket" >
                <a class="select" href="#">
                    <img src="storage/image/spaceship-26556_1280.png">
                    <span>Launches</span>
                </a>
            </li>
            <li id="rocket">
                <a class="select" href="#">
                    <img src="storage/image/dragon_5169265.png">
                    <span>Dragons</span>
                </a>
            </li>
            <li id="rocket" onclick="company()">
                <a class="select" href="#">
                     <img src="storage/image/office-building_4300059.png">
                    <span>Company</span>
                </a>
            </li>
            <li id="rocket" onclick="Ships()">
                <a class="select" href="#">
                    <img src="storage/image/logistics_997566.png">
                    <span>Ships</span>
                </a>
            </li>
            <li id="rocket" onclick="Landpads()">
                <a class="select" href="#">
                    <img src="storage/image/map_3702101.png">
                    <span>landingpad</span>
                 </a>
             </li>
        </div>
    </div>
</div>`;
    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div class="mGS3Section">
            <div class="contimage">
                <img  id="dragon" src="storage/image/dragon_5169265.png">
                <h3>Dragons</h3>
            </div>
        </div>
        <div class="navigationNumbersDiv">
            <div class="navigationNumbersContainer">
                <div class="navigationNumbersGrid">
                    <!-- Botones de navegación -->
                </div>
            </div>
        </div>`;

    contenedor3.innerHTML = plantilla3;
    let navigationNumbersGrid = contenedor3.querySelector(".navigationNumbersGrid");
    navigationNumbersGrid.innerHTML = ""; 

    dragones.forEach((dragon, idx) => {
        let button = document.createElement("div");
        button.classList.add("navigationNumber");
        button.textContent = `${idx + 1}`;
        button.addEventListener("click", () => {
            Dragonsmaquetacion(idx); 
        });
        navigationNumbersGrid.appendChild(button);
    });
};