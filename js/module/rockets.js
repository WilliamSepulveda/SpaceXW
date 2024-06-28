import {getAllRockets}from "./app.js"

export const displayRockets = async()=>{
    let contenedor = document.querySelector("#contsection1");
    let contenedor2 = document.querySelector("#informationR");
    let contenedor3 = document.querySelector("#title");
    let contenedor4 = document.querySelector("#informationR2");
    let contenedor5 = document.querySelector("#contData");
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
    let plantilla2 =`
        <div class="cont_espera">
                    <h1></h1>
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
    contenedor2.innerHTML = plantilla2;


    let namme1 = rocket.name;
    let plantilla3 = `
     <div class="contTitle">
                <h1>${namme1}</h1>
            </div>
    `;
    contenedor3.innerHTML = plantilla3;

    let typeVersion = rocket.engines.type;
    let loss_power =rocket.engines.engine_loss_max;
    let disposicion = rocket.engines.number;
    let propulsor = rocket.engines.propellant_1;
    let propulsor2 = rocket.engines.propellant_2;
    let layout = rocket.engines.layout;
    
    let plantilla4 =`
        <div class="cont_espera">
                    <h1></h1>
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
                            <p>${typeVersion}</p>
                            <p>${loss_power}</p>    
                            <p>${layout}</p>
                            <p>${disposicion}</p>
                            <p>${propulsor}</p>
                            
                            <p>${propulsor2}</p>
                        </div>
                    </div>  
                </div>
                
    `;
    contenedor4.innerHTML = plantilla4;
    let masa = rocket.mass.kg;
    let masaLb = rocket.mass.lb;
    let thrustSecondStage = rocket.payload_weights[0].kg;
    let thrustSecondStageLb =rocket.payload_weights[0].lb;
    let metersM = rocket.height.meters;
    let meterssF = rocket.height.feet;
    // console.log(rocket.second_stage.payloads.composite_fairing.diameter.meters)
    let diametro =rocket.second_stage.payloads.composite_fairing.diameter.meters;
    let diametroF = rocket.second_stage.payloads.composite_fairing.diameter.feet;
    let diametro1 =rocket.second_stage.payloads.composite_fairing.height.meters;
    let diametro1F = rocket.second_stage.payloads.composite_fairing.height.feet;
    let masaKg = rocket.mass.kg;
    let maxWeight = 90000;
    let porcentaje = (masaKg / maxWeight) * 100;
    let plantilla5 =`
    <div class="Data_dad">
                    <div class="Data_son">
                        <div class="Data_nieto">
                            <p>Rocket weight </p>
                               <div class="containerbarra">
                                <div class="progress" style="--wth:${porcentaje}%">
                                </div>
                            </div>

                        </div>
                        <div class="Data_nieto2">
                            <p>${masa} Kg</p>
                             <p>${masaLb} Lb</p>
                        </div>
                    </div>
                </div>
                 <div class="Data_dad">
                    <div class="Data_son">
                        <div class="Data_nieto">
                            <p>Low Earth Orbit : </p>
                               <div class="containerbarra">
                                <div class="barraFunction">
                                    <div class="progress" style="--wth:${porcentaje}%"></div>
                                </div>
                            </div>

                        </div>
                        <div class="Data_nieto2">
                            <p>${thrustSecondStage} Kg</p>
                             <p>${thrustSecondStageLb} Lb</p>
                        </div>
                    </div>
                </div>
                   <div class="Data_dad">
                    <div class="Data_son">
                        <div class="Data_nieto">
                            <p>Rocket Height :</p>
                               <div class="containerbarra">
                               <div class="barraFunction">
                                    <div class="progress" style="--wth:${porcentaje}%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="Data_nieto2">
                            <p>${metersM} M</p>
                             <p>${meterssF} F</p>
                        </div>
                    </div>
                </div>
                   <div class="Data_dad">
                    <div class="Data_son">
                        <div class="Data_nieto">
                            <p>Rocket diameter :</p>
                               <div class="containerbarra">
                                <div class="barraFunction">
                                    <div class="progress" style="--wth:${porcentaje}%"></div>
                                </div>
                            </div>

                        </div>
                        <div class="Data_nieto2">
                            <p>${diametro} M</p>
                             <p>${diametroF} F</p>
                        </div>
                    </div>
                </div>
                  <div class="Data_dad">
                    <div class="Data_son">
                        <div class="Data_nieto">
                            <p>Diameter rocket shield:</p>
                               <div class="containerbarra">
                               <div class="barraFunction">
                                    <div class="progress" style="--wth:${porcentaje}%"></div>
                                </div>
                            </div>

                        </div>
                        <div class="Data_nieto2">
                            <p>${diametro} M</p>
                             <p>${diametroF} F</p>
                        </div>
                    </div>
                </div>
                  </div>
                  <div class="Data_dad">
                    <div class="Data_son">
                        <div class="Data_nieto">
                            <p>Height rocket shield:</p>
                               <div class="containerbarra">
                                <div class="barraFunction">
                                    <div class="progress" style="--wth:${porcentaje}%"></div>
                                </div>
                            </div>

                        </div>
                        <div class="Data_nieto2">
                            <p>${diametro1} M</p>
                             <p>${diametro1F} F</p>
                        </div>
                    </div>
                </div>

    
    `;
    contenedor5.innerHTML = plantilla5;


}

  