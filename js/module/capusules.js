import { getAllCapsules } from "./app.js";

export const Capsulesmenu = async () => {
    let contenedor3 = document.querySelector(".navigationNumbersGrid");
    contenedor3.innerHTML = "";
    let capsules = await getAllCapsules();
    let number = 1; // Cambiado a 1 para empezar desde 1

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
    capsulesmaquetacion(index);
}

export const capsulesmaquetacion = async (index = 0) => {
    let capsules = await getAllCapsules();
    let capsule = capsules[index];

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    let title = capsule.type;
    let reuse_count = capsule.reuse_count;
    let launches = capsule.launches;
    let launchCount = launches.length;
    let launchText = launchCount === 1 ? "1 resultado" : `${launchCount} `;

    let water_landings = capsule.water_landings;
    let land_landings = capsule.land_landings;
    let serial = capsule.serial;
    let status = capsule.status;

    let plantilla0 = `
    <div class="mGS1Section">
        <div class="contDescription">
            <img src="storage/image/capsula-espacial.png">
            <img src="storage/image/capsula-espacial.png">
        </div>
    </div>`;
    contenedor1.innerHTML = plantilla0;

    let plantilla = `
    <div id="title" class="mGS2Section">
        <div class="contTitle">
            <h1>${title} ${serial}</h1>
        </div>
    </div>
    <div id="diagramas" class="mGS2Section">
        <div class="container">
            <div class="progress" style="--i:85;--clr:#50f30a;">
                <h3>Launches<span>%</span></h3>
                <h4>${launchText}</h4>
            </div>
            <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                <h3>reuse_count<span>%</span></h3>
                <h4>${reuse_count}</h4>
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
                        <h1>LANDINGS INFORMATION<br>•••••••••••••</h1>
                    </div>
                    <div class="contenido">
                        <div class="contenido_hijo">
                            <p>Water</p>
                            <p>Land</p>
                            <p>Launches</p>
                        </div>
                        <div class="contenido_hijo2">
                            <p>${water_landings}</p>
                            <p>${land_landings}</p>
                            <p>${launchText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mGS2SGGridSection">
            <div class="contenedorimg_dad">
                <div id="contenedorImagenes" class="contenedorimg_son">
                <img src="storage/image/capsules1.jpg">
                </div>
            </div>
        </div>
        <div id="informationR2" class="mGS2SGGridSection">
            <div class="cont_espera">
                <img src="storage/image/elonj.jpg" alt="">
            </div>
            <div class="content_information">
                <div class="titlecontent_information">
                    <h1>CAPSULE INFORMATION<br>••••••••••••••</h1>
                </div>
                <div class="contenido2">
                    <div class="contenido_hijo">
                        <p>Type</p>
                        <p>Serial</p>
                        <p>Status</p>
                    </div>
                    <div class="contenido_hijo2">
                        <p>${title}</p>
                        <p>${serial}</p>
                        <p>${status}</p>
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
                <li id="rocket">
                    <a class="select" href="#">
                        <img src="storage/image/spaceship-26556_1280.png">
                        <span>Launches</span>
                    </a>
                </li>
                <li id="rocket">
                    <a class="select" href="#">
                        <img src="storage/image/almuerzo-cohete.svg">
                        <span>Rockets</span>
                    </a>
                </li>
            </div>
        </div>
    </div>`;
    contenedor2.innerHTML = plantilla;

    let plantilla3 = `
    <div class="mGS3Section">
        <div class="contimage">
            <img src="storage/image/1356479.png">
            <h3>Capsules</h3>
        </div>
    </div>
    <div id="paggines" class="mGS3Section">
        <div class="navigationNumbersGrid">
            ${capsules.map((capsule, i) => `<div id="capsule-${i}" class="navigationNumber" data-index="${i}">${i + 1}</div>`).join('')}
        </div>
    </div>`;
    contenedor3.innerHTML = plantilla3;

    // Adjuntar los event listeners después de que los elementos hayan sido añadidos al DOM
    document.querySelectorAll(".navigationNumber").forEach(element => {
        element.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            setMenuCapsule(index);
        });
    });
};
