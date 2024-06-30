import { getAllRockets } from "./app.js";

export const Rockets_menu = async () => {
    let contenedor8 = document.querySelector(".navigationNumbersGrid");
    contenedor8.innerHTML = "";
    let rockets = await getAllRockets();
    let number = 1;

    let cont = rockets.length;

    for (let i = 0; i < cont; i++) {
        let plantilla8 = `
            <div id="rocket-${i}" class="navigationNumber" data-index="${i}">
                ${number}
            </div>`;
        
        contenedor8.innerHTML += plantilla8;
        number++;
    }
    document.querySelectorAll(".navigationNumber").forEach(element => {
        element.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            setMenuRocket(index);
        });
    });
};

function setMenuRocket(index) {
    displayRockets(index);
}

Rockets_menu();


export const displayRockets = async (index = 0) => {
    let contenedor = document.querySelector("#contsection1");
    let contenedor2 = document.querySelector("#informationR");
    let contenedor3 = document.querySelector("#title");
    let contenedor4 = document.querySelector("#informationR2");
    let contenedor5 = document.querySelector("#contData");
    let contenedor6 = document.querySelector("#contenedorImagenes");
    let contenedor7 = document.querySelector("#diagramas");
    let contenedor8 = document.querySelector("#paggines");
    let rockets = await getAllRockets();
    let rocket = rockets[index]; 

    let plantilla = `
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>${rocket.country}</h2>
                <h1>${rocket.description}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>The estimated cost per rocket launch</h2>
                <h1>$ ${rocket.cost_per_launch}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>The date of the first flight of the rocket</h2>
                <h1>${rocket.first_flight}</h1>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>Read more about the coete</h2>
                <a href="${rocket.wikipedia}">Wikipedia</a>
            </div>
        </div>
    `;
    contenedor.innerHTML = plantilla;

    let plantilla2 = `  
        <div class="cont_espera">
         <img src="storage/image/spacex.png" alt="">
        </div>  
        <div class="content_information">
        <div class="titlecontent_information">
                <h1>INFORMATION ROCKET<br>••••••••••••••••</h1> 
            </div>
            <div class="contenido">
            <div class="contenido_hijo">
            
                    <p>Type</p>
                    <p>Rocket in service</p>
                    <p>Number of stages</p>
                    <p>Number of propellants</p>
                    <p>Landing legs</p>
                    <p>Leg material</p>
                </div>
                <div class="contenido_hijo2">
                    <p>${rocket.type}</p>
                    <p>${rocket.active}</p>    
                    <p>${rocket.stages}</p>
                    <p>${rocket.boosters}</p>
                    <p>${rocket.landing_legs.number}</p>
                    <p>${rocket.landing_legs.material || ''}</p>
                </div>
            </div>  
        </div>
    `;
    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div class="contTitle">
            <h1>${rocket.name}</h1>
        </div>
    `;
    contenedor3.innerHTML = plantilla3;

    let plantilla4 = `
        <div class="cont_espera">
        <img src="storage/image/elonj.jpg" alt="">
        </div>  
        <div class="content_information">
            <div class="titlecontent_information">
                <h1>ENGINE INFORMATION<br>•••••••••••••••••••</h1> 
            </div>
            <div class="contenido2">
                <div class="contenido_hijo">
                    <p>Type</p>
                    <p>Maximum power loss</p>
                    <p>Engine availability</p>
                    <p>Number of engines</p>
                    <p>Stage 1 fuel</p>
                    <p>Stage 2 fuel</p>
                </div>
                <div class="contenido_hijo2">
                    <p>${rocket.engines.type}</p>
                    <p>${rocket.engines.engine_loss_max}</p>    
                    <p>${rocket.engines.layout}</p>
                    <p>${rocket.engines.number}</p>
                    <p>${rocket.engines.propellant_1}</p>
                    <p>${rocket.engines.propellant_2}</p>
                </div>
            </div>  
        </div>
    `;
    contenedor4.innerHTML = plantilla4;

    let plantilla5 = `
        <div class="Data_dad">
            <div class="Data_son">
                <div class="Data_nieto">
                    <p>Rocket weight :</p>
                    <div class="containerbarra">
                        <div class="progress" style="--wth:${(rocket.mass.kg / 900000) * 50}%"></div>
                    </div>
                </div>
                <div class="Data_nieto2">
                    <p>${rocket.mass.kg} Kg</p>
                    <p>${rocket.mass.lb} Lb</p>
                </div>
            </div>
        </div>
        <div class="Data_dad">
            <div class="Data_son">
                <div class="Data_nieto">
                    <p>Low Earth Orbit :</p>
                    <div class="containerbarra">
                        <div class="barraFunction">
                            <div class="progress" style="--wth:${(rocket.mass.kg / 900000) * 50}%"></div>
                        </div>
                    </div>
                </div>
                <div class="Data_nieto2">
                    <p>${rocket.payload_weights[0].kg} Kg</p>
                    <p>${rocket.payload_weights[0].lb} Lb</p>
                </div>
            </div>
        </div>
        <div class="Data_dad">
            <div class="Data_son">
                <div class="Data_nieto">
                    <p>Rocket Height :</p>
                    <div class="containerbarra">
                        <div class="barraFunction">
                            <div class="progress" style="--wth:${(rocket.mass.kg / 900000) * 50}%"></div>
                        </div>
                    </div>
                </div>
                <div class="Data_nieto2">
                    <p>${rocket.height.meters} M</p>
                    <p>${rocket.height.feet} F</p>
                </div>
            </div>
        </div>
           <div class="Data_dad">
            <div class="Data_son">
                <div class="Data_nieto">
                    <p>Rocket diameter:</p>
                    <div class="containerbarra">
                        <div class="barraFunction">
                            <div class="progress" style="--wth:${(rocket.mass.kg / 900000) * 50}%"></div>
                        </div>
                    </div>
                </div>
                <div class="Data_nieto2">
                    <p>${rocket.diameter.meters} M</p>
                    <p>${rocket.diameter.feet} F</p>
                </div>
            </div>
        </div>
        <div class="Data_dad">
            <div class="Data_son">
                <div class="Data_nieto">
                    <p>Diameter rocket shield :</p>
                    <div class="containerbarra">
                        <div class="barraFunction">
                            <div class="progress" style="--wth:${(rocket.mass.kg / 900000) * 50}%"></div>
                        </div>
                    </div>
                </div>
                <div class="Data_nieto2">
                    <p>${rocket.second_stage.payloads.composite_fairing.diameter.meters} M</p>
                    <p>${rocket.second_stage.payloads.composite_fairing.diameter.feet} F</p>
                </div>
            </div>
        </div>
        <div class="Data_dad">
            <div class="Data_son">
                <div class="Data_nieto">
                    <p>Height rocket shield :</p>
                    <div class="containerbarra">
                        <div class="barraFunction">
                            <div class="progress" style="--wth:${(rocket.mass.kg / 900000 ) * 50}%"></div>
                        </div>
                    </div>
                </div>
                <div class="Data_nieto2">
                    <p>${rocket.second_stage.payloads.composite_fairing.height.meters} M</p>
                    <p>${rocket.second_stage.payloads.composite_fairing.height.feet} F</p>
                </div>
            </div>
        </div>
    `;
    contenedor5.innerHTML = plantilla5;

    let plantilla6 = ``;
    let images = rocket.flickr_images;

    if (images[0]) {
        for (let i = 0; i < images.length; i++) {
            plantilla6 += `<img referrerpolicy="no-referrer" src="${images[i]}"></img>`;
        }
    }

    contenedor6.innerHTML = plantilla6;

    let plantilla7 = `
        <div class="container">
            <div class="progress" style="--i:${(rocket.engines.thrust_vacuum.lbf/ 500000) * 100};--clr:#50f30a;">
                <h3>Atmospheric acceleration<span>%</span></h3>
                <h4>${rocket.engines.thrust_sea_level.kN}KN</h4>
                <h2>${rocket.engines.thrust_sea_level.lbf}lbf</h4>
            </div>
            <div class="progress less" style="--i:${(rocket.engines.thrust_vacuum.lbf/ 500000) * 100};--clr:#0ac4f3;">
                <h3>Speed in space<span>%</span></h3>
                <h4>${rocket.engines.thrust_vacuum.kN}KN</h4>
                <h2>${rocket.engines.thrust_vacuum.lbf}lbf</h2>
            </div>
        </div>
    `;
    contenedor7.innerHTML = plantilla7;

    let plantilla8 = `
        <div class="navigationNumbersGrid">
            <div id="rocket-0" class="navigationNumber" style="background-color: rgb(0, 255, 251); border-radius: 50%;">1</div>
            <div id="rocket-1" class="navigationNumber">2</div>
            <div id="rocket-2" class="navigationNumber">3</div>
            <div id="rocket-3" class="navigationNumber">4</div>
        </div>
    `;
    contenedor8.innerHTML = plantilla8;

    // Adjuntar los event listeners después de que los elementos hayan sido añadidos al DOM
    for (let i = 0; i < rockets.length; i++) {
        document.getElementById(`rocket-${i}`).addEventListener("click", function () {
            setMenuRocket(i);
        });
    }
};

// Llamada de ejemplo a la función displayRockets
displayRockets();
