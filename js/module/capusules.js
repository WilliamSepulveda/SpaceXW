import { getAllCapsules } from "./app.js"

export const capsulesmaquetacion  = async()=>{
    let capsules = await getAllCapsules();
    let capsule = capsules[0];

    let contenedor1 =  document.querySelector ("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    let contenedor4 = document.querySelector("#diagramas")
    contenedor1.innerHTML = "";
    contenedor2.innerHTML  = "",
    contenedor3.innerHTML = "";

    let title = capsule.type

    let plantilla = `
     <div id="title" class="mGS2Section">
                <div class="contTitle">
                    <h1>${title}</h1>
                </div>
            </div>
    `; 
    contenedor2.innerHTML = plantilla


    let plantilla2 = `
     <div id="mGS1" class="mainGridSection">
            <div class="mGS1Section">
                <div class="contDescription">
                    <h1>capsules</h1>
                </div>
            </div>
        `;
    contenedor1.innerHTML = plantilla2;


    let plantilla3 = `
     <div id="mGS2" class="mainGridSection">
     <div id="diagramas" class="mGS2Section">
                <!-- <div class="container">
                    <div class="progress" style="--i:85;--clr:#50f30a;">
                        <h3>Atmospheric acceleration<span>%</span></h3>
                        <h4>html</h4>
                    </div>
                    <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                        <h3>Speed inspace<span>%</span></h3>
                        <h4>html</h4>
                    </div>
                </div> -->
            </div>
        </div>
    `;
    contenedor4.innerHTML = plantilla3;
};