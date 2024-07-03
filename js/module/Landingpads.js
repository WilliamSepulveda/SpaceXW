import { terrenos } from "./app.js";

export const Capsulesmenu = async () => {
    let contenedor3 = document.querySelector(".navigationNumbersGrid");
    contenedor3.innerHTML = "";
    let landpads = await terrenos(); // Cambiado Landpads a landpads (camelCase)
    let number = 1;

    landpads.forEach((landpad, index) => { // Cambiado Landpads a landpad
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
    landingpadsMaquetacion(index);
}

export const landingpadsMaquetacion = async (index = 0) => {
    let landpads = await terrenos(); 
    let landpad = landpads[index]; 

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    let title = landpad.full_name;
    let details = landpad.details;
    
    if (details.length > 400) {
        details = details.substring(0, 400) + '...';
    }
    let nombre = landpad.locality;
    let type = landpad.type;
    let location = landpad.region;
    let search = landpad.wikipedia;

    let totalL = landpad.landing_attempts;
    let status = landpad.status;
    let latitude =  landpad.latitude;
    let longitude = landpad.longitude;
    let landing_successes = landpad.landing_successes;
    let imagen = landpad.images.large;
    
    let plantilla1 = `
        <div class="mGS1Section">
            <div class="contDescription">
            <h1>→Elon Musk</h1>
            </div>
            <div id="contsection1" class="mGS1Section">
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div id="launch" class="conttexto">
                        <h1>Details</h1>
                        <p>${details}</p>   
                    </div>                   
                </div>
            </div>
            <div id="contsection1" class="mGS1Section">
                <div class="continformation">
                    <div class="conttexto">
                        
                    </div>
                    <div id="launch" class="conttexto">
                        <h1></h1>   
                    </div>                   
                </div>
            </div>
        </div>`;
    
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
    <div id="title" class="mGS2Section">
        <div class="contTitle">
            <h1>${title}</h1>
        </div>
    </div>
    <div id="diagramas" class="mGS2Section">
        <div class="container">
            <div class="progress" style="--i:85;--clr:#50f30a;">
                <h3>Total Launches<span>%</span></h3>
                <h4>${totalL}</h4>
            </div>
            <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                <h3>Status<span>%</span></h3>
                <h4>${status}</h4>
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
                    <h1>LANDPAD INFORMATION<br>••••••••••••••</h1>
                </div>
                    <div class="contenido">
                        <div class="contenido_hijo">
                            <p>name</p>
                            <p>.</p>
                            <p>type</p>
                            <p>location</p>  
                            <p>search</p>                             
                            </div>
                            <div class="contenido_hijo2">
                            <p>${nombre}</p>
                            <p>${type}</p>
                            <p>${location}</p> 
                            <p>.</p>
                            <a href="${search}"> Aquí</a>           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mGS2SGGridSection">
            <div class="contenedorimg_dad">
                <div id="contenedorImagenes" class="contenedorimg_son">
                <img referrerpolicy="no-referrer" src="${imagen}"></img>
                </div>
            </div>
        </div>
        <div id="informationR2" class="mGS2SGGridSection">
            <div class="cont_espera">
            </div>
            <div class="content_information">
                <div class="titlecontent_information">
                    <h1>POSITION. INFORMATION<br>••••••••••••••</h1>
                </div>
                <div class="contenido2">
                    <div class="contenido_hijo">
                        <p>altitud</p>
                        <p>latitud</p>
                        <p>landing_successes</p>
                    </div>
                    <div class="contenido_hijo2">
                        <p>${latitude}</p>
                        <p>${longitude}</p>
                        <p>${landing_successes}</p>
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
</div>`;
    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div class="mGS3Section">
            <div class="contimage">
                <img src="storage/image/map_3702101.png">
                <h3>pads</h3>
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

    landpads.forEach((landpad, idx) => {
        let button = document.createElement("div");
        button.classList.add("navigationNumber");
        button.textContent = `${idx + 1}`;
        button.addEventListener("click", () => {
            landingpadsMaquetacion(idx); 
        });
        navigationNumbersGrid.appendChild(button);
    });
};

// Llama a Capsulesmenu para inicializar el menú
Capsulesmenu();
