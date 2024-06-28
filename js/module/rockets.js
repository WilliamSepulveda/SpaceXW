import {getAllRockets}from "./app.js"

export const displayRockets = async()=>{
    let contenedor = document.querySelector("#contsection1")
    let rockets = await getAllRockets();
    let rocket = rockets[0];

    let namme = rocket.description;
    let country = rocket.country;
    let price = rocket.cost_per_launch;
    let fecha =rocket.first_flight;
    let wilki = rocket.wikipedia;
    
    let plantilla = `
    <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div class="conttexto">
                        <h2>${country}</h2>
                        <h1>${namme}</h1>
                    </div>
                </div>
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div class="conttexto">
                        <h2>The estimated cost per rocket launch</h2>
                        <h1>$ ${price}</h1>
                    </div>
                </div>
                </div>
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div class="conttexto">
                        <h2>The date of the first flight of the rocket</h2>
                        <h1>${fecha}</h1>
                    </div>
                </div>
                 </div>
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div class="conttexto">
                        <h2>Read more about the coete</h2>
                        <a href="${wilki}">Wikipedia</a>
                    </div>
                </div>
    `;
    
    contenedor.innerHTML= plantilla;
}
export const titleRockets = async()=>{
    let contenedor = document.querySelector("#title")
    let rockets = await getAllRockets();
    let rocket = rockets[0];

    let namme = rocket.name;
    let plantilla = `
     <div class="contTitle">
                <h1>${namme}</h1>
            </div>
    `;
    contenedor.innerHTML = plantilla;
}


export const informationRocket = async()=>{
    let contenedor = document.querySelector("#informationR")
    let rockets = await getAllRockets();
    let rocket = rockets[0];

    let typeRocket = rocket.type;
    let etapa = rocket.stages;
    let estado = rocket.active;
    let propulsores = rocket.boosters;
    let Landing_legs = rocket.landing_legs.number;
    let material = rocket.landing_legs.material;
    if (rocket.landing_legs.material !== null) {
        material = rocket.landing_legs.material;
    } else {
        material = '';
    }
    let plantilla =`
        <div class="cont_espera">
                    <h1></h1>
                </div>  
                <div class="content_information">
                    <div class="titlecontent_information">
                        <h1>INFORMATION ROCKET<br>••••••••••••••••••••••••••••</h1> 
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
                            <p>${typeRocket}</p>
                            <p>${estado}</p>    
                            <p>${etapa}</p>
                            <p>${propulsores}</p>
                            <p>${Landing_legs}</p>
                            <p>${material}</p>
                        </div>
                    </div>  
                </div>
    `;
    contenedor.innerHTML = plantilla;
}
