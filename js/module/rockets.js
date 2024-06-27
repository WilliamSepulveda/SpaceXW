import {getAllRockets}from "./app.js"

export const displayRockets = async()=>{
    let contenedor = document.querySelector("#contsection1")
    let rockets = await getAllRockets();
    let rocket = rockets[0];

    let namme = rocket.description;
    let country = rocket.country;
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
    `;
    contenedor.innerHTML= plantilla;
    
}

export const displayRockets1 = async()=>{
    let contenedor = document.querySelector("#contsection1")
    let rockets = await getAllRockets();
    let rocket = rockets[0];

    let namme = rocket.description;
    let country = rocket.country;
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
    `;
    contenedor.innerHTML= plantilla;
    
}