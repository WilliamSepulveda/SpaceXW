import { getLaunches } from "./app.js";

export const Capsulesmenu = async () => {
    let contenedor3 = document.querySelector(".navigationNumbersGrid");
    contenedor3.innerHTML = "";
    let capsules = await getLaunches();
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
    launchesmaquetacion(index);
}

export const launchesmaquetacion = async (index = 0) => {
    let launches = await getLaunches(); 
    let launch = launches[index]; 

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";
    let nombre = launch.name || "NO ENCONTRADA";
    let details = launch.details || "No details available";

    const maxLength = 100;
    if (details.length > maxLength) {
        details = "Launch was scrubbed on first attempt, second launch attempt was successful";
    }

    let time = "NO Encontrada";
    let altura = "NO Encontrada";
    let reason = "NO Encontrada";
    let failures = launch.failures || [];
    let failuresq = failures.length;
    let fallas = failuresq === 1 ? "1 resultado" : `${failuresq} resultados`;

    if (failuresq > 0) {
        time = failures[0].time || "NO ENCONTRADA";
        altura = failures[0].altitude || "NO ENCONTRADA";
        if (altura === null) {
            altura = "No Encontrada";
        }
        reason = failures[0].reason || "NO ENCONTRADA";
    }

    let vuelos = launch.cores && launch.cores[0] ? launch.cores[0].flight : "NO ENCONTRADA";
    let image = launch.links.patch.small || "default_image_url";


    let plantilla1 = `
        <div class="mGS1Section">
            <div class="contDescription">
                <img src="storage/image/1356479.png">
            </div>
            <div id="contsection1" class="mGS1Section">
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div id="launch" class="conttexto">
                        <h1>tiempo → ${time}</h1>
                        <h1>altura → ${altura}</h1>
                        <h1>razon → ${reason}</h1>
                    </div>
                </div>
            </div>
        </div>`;
    
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
    <div id="title" class="mGS2Section">
        <div class="contTitle">
            <h1>${nombre}</h1>
        </div>
    </div>
    <div id="diagramas" class="mGS2Section">
        <div class="container">
            <div class="progress" style="--i:85;--clr:#50f30a;">
                <h3>Total Failures<span>%</span></h3>
                <h4>${fallas}</h4>
            </div>
            <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                <h3>flight<span>%</span></h3>
                <h4>${vuelos}</h4>
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
                    <h1>LAUNCH INFORMATION<br>••••••••••••••</h1>
                </div>
                    <div class="contenido">
                        <div class="contenido_hijo">
                            <p>Name</p>
                            <p>Details</p>  
                            <p>▼</p>                         
                            <p>${details}</p>                            
                        </div>
                        <div class="contenido_hijo2">
                            <p>${nombre}</p>
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
        <div id="informationR2" class="mGS2SGGridSection">
            <div class="cont_espera">
                <img src="storage/image/elonj.jpg" alt="">
            </div>
            <div class="content_information">
                <div class="titlecontent_information">
                    <h1>ROCKET INFORMATION<br>••••••••••••••</h1>
                </div>
                <div class="contenido2">
                    <div class="contenido_hijo">
                        <p>name</p>
                        <p>type</p>
                        <p>information</p>
                    </div>
                    <div class="contenido_hijo2">
                        <p>${nombre}</p>
                        <p>ROCKET</p>
                        <p></p>
                        <a href="${launch.wikipedia}">Wikipedia</a>
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
                <h3>Launches</h3>
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

    launches.forEach((launch, idx) => {
        let button = document.createElement("div");
        button.classList.add("navigationNumber");
        button.textContent = `${idx + 1}`;
        button.addEventListener("click", () => {
            launchesmaquetacion(idx); 
        });
        navigationNumbersGrid.appendChild(button);
    });
};
