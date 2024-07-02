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
    let crew = crews[1]; 

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    let launches = crew.launches;
    let launchCount = launches.length;
    let launchText = launchCount === 1 ? "1 resultado" : `${launchCount} resultados`;

    let launches1 = crew.launches;
    let launchCount1 = launches1.length;
    let launchText1 = launchCount1 === 1 ? "1 resultado" : `${launchCount} resultados`;
    let name = crew.name;
    let Agency = crew.agency;
    let image = crew.image;
    let plantilla1 = `
       
            
                <div class="contDescription">
                    <img src="storage/image/tripulacion.png"></img>
                </div>
            </div>
            <div id="contsection1" class="mGS1Section">
                <div class="continformation">
                <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
                </div>
                <div  id ="launch" class="conttexto">
                <h1>LAUNCH: #${launchText}</h1>
                    </div>
                </div>               
            </div>   
        
    `;
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
       
            <div id="title" class="mGS2Section">
                <div class="contTitle">
                    <h1>${name}</h1>
                </div>
            </div>
            <div id="diagramas" class="mGS2Section">
                <div class="container">
                    <div class="progress" style="--i:85;--clr:#50f30a;">
                        <h3>Launches<span>%</span></h3>
                        <h4>${launchText1}</h4>
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
                            <p>wilkipedia</p>
                        </div>
                        <div class="contenido_hijo2">
                            <p>${name}<br></p>
                            <p>${Agency}</p>
                            <a href="${crew.wikipedia}">Open</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mGS2SGGridSection">
            <div class="contenedorimg_dad">
                <div id="contenedorImagenes" class="contenedorimg_son">
                <<img referrerpolicy="no-referrer" src="${image}"></img>>
                </div>
            </div>
        </div>
        <div id="informationR2" class="mGS2SGGridSection">
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
                    
                </div>
            </div>
        
    `;
    contenedor3.innerHTML = plantilla3;


    let navigationNumbersGrid = contenedor3.querySelector(".navigationNumbersGrid");
    navigationNumbersGrid.innerHTML = ""; // Limpiar antes de agregar

    // Generar botones de navegación para cada miembro de la tripulación
    crews.forEach((crew, index) => {
        let button = document.createElement("div");
        button.classList.add("navigationNumber");
        button.textContent = `${index + 1}`;
        button.addEventListener("click", () => {
            showCrewDetails(index); // Mostrar detalles de la tripulación cuando se hace clic
        });
        navigationNumbersGrid.appendChild(button);
    });
};

// Función para mostrar detalles de la tripulación
function showCrewDetails(index) {
    // Lógica para mostrar detalles específicos de la tripulación seleccionada
    // Puedes usar la información almacenada en 'crews' para actualizar el DOM
}
