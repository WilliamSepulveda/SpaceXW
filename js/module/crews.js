// main.js

import { getAllCapsules } from "./app.js";
import { equipo } from "./app.js";

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
    crewsmaquetacion(index);
}

export const crewsmaquetacion = async (index = 0) => {
    let crews = await equipo(); 
    let crew = crews[index]; // Obtener la tripulación según el índice seleccionado

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    let launches = crew.launches;
    let launchCount = launches.length;
    let launchText = launchCount === 1 ? "1 resultado" : `${launchCount} resultados`;

    let name = crew.name;
    let Agency = crew.agency;
    let image = crew.image;
    let wikipedia = crew.wikipedia;

    let plantilla1 = `
        <div class="mGS1Section">
            <div class="contDescription">
                <img src="storage/image/tripulacion.png">
            </div>
            <div id="contsection1" class="mGS1Section">
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div id="launch" class="conttexto">
                        <h1>LAUNCH: #${launchText}</h1>
                    </div>
                </div>
            </div>
        </div>`;
    
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
        <div class="mGS2Section">
            <div id="title" class="contTitle">
                <h1>${name}</h1>
            </div>
            <div id="diagramas" class="mGS2Section">
                <div class="container">
                    <div class="progress" style="--i:85;--clr:#50f30a;">
                        <h3>Launches<span>%</span></h3>
                        <h4>${launchText}</h4>
                    </div>
                    <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                        <h3>Status<span>%</span></h3>
                        <h4>${crew.status}</h4>
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
                                <h1>MEMBER INFORMATION<br>•••••••••••••</h1>
                            </div>
                            <div class="contenido">
                                <div class="contenido_hijo">
                                    <p>Name</p>
                                    <p>Agency</p>
                                    <p>Wikipedia</p>
                                </div>
                                <div class="contenido_hijo2">
                                    <p>${name}<br></p>
                                    <p>${Agency}</p>
                                    <a href="${wikipedia}" target="_blank">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mGS2SGGridSection">
                    <div class="contenedorimg_dad">
                        <div id="contenedorImagenes" class="contenedorimg_son">
                            <img referrerpolicy="no-referrer" src="${image}"></img>
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
                <li id="rocket" onclick="launches()">
                    <a class="select" href="#">
                        <img src="storage/image/spaceship-26556_1280.png">
                        <span>Launches</span>
                    </a>
                </li>
                <li id="rocket" onclick="dragons()">
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
                         <li id="rocket" onclick="roadster()">
                            <a class="select" href="#">
                                <img src="storage/image/racing_1973901.png">
                                <span>roadster</span>
                            </a>
                        </li>
            </div>
        </div>
        
        `;

    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div class="mGS3Section">
            <div class="contimage">
                <img src="storage/image/space-shuttle-156012.svg">
                <h3>Crews</h3>
            </div>
        </div>
        <div id="paggines" class="mGS3Section"> 
            <div class="navigationNumbersGrid">
                <!-- Botones de navegación -->
            </div>
        </div>`;

    contenedor3.innerHTML = plantilla3;

    let navigationNumbersGrid = contenedor3.querySelector(".navigationNumbersGrid");
    navigationNumbersGrid.innerHTML = ""; // Limpiar antes de agregar

    // Generar botones de navegación para cada miembro de la tripulación
    crews.forEach((crew, idx) => {
        let button = document.createElement("div");
        button.classList.add("navigationNumber");
        button.textContent = `${idx + 1}`;
        button.addEventListener("click", () => {
            crewsmaquetacion(idx); // Mostrar detalles del índice seleccionado
        });
        navigationNumbersGrid.appendChild(button);
    });
};
