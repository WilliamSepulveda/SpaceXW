import { buques } from "./app.js";

export const Capsulesmenu = async () => {
    let contenedor3 = document.querySelector(".navigationNumbersGrid");
    contenedor3.innerHTML = "";
    let ships = await buques();
    let number = 1;

    ships.forEach((ship, index) => {
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
    shipsMaquetacion(index);
}

export const shipsMaquetacion = async (index = 0) => {
    let ships = await buques(); 
    let carga = ships[index]; 

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    let title = carga.name;
    console.log(title)
    //------------------------------------------------roles--------------------------------//
    let rol1 = carga.roles[0];
    let rol2 = carga.roles[1];
    let numberOfLaunches = carga.launches.length;
    let numberOfRoles = carga.roles.length;
    //--------------------------------------------ship infomrmation------------------------//
    let Home_ports = carga.home_port;
    let status = carga.active;
    let more_info = carga.link;
    let name = carga.name;
    let type = carga.type;
    let mass = carga.mass_kg;
    let massLb = carga.mass_lbs;
    let id = carga.legacy_id;


    //-------------------------------------------------image-------------------------------------//

    let image = carga.image ? carga.image : "storage/image/logistics_997566.png";
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
                        <h1>Role #1 →${rol1} </h1>   
                    </div>                   
                </div>
            </div>
            <div id="contsection1" class="mGS1Section">
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div id="launch" class="conttexto">
                        <h1>Role #2 →${rol2} </h1>   
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
                <h4>${numberOfLaunches}</h4>
            </div>
            <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                <h3>Total Roles<span>%</span></h3>
                <h4>${numberOfRoles}</h4>
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
                    <h1>SHIPS INFORMATION<br>••••••••••••••</h1>
                </div>
                    <div class="contenido">
                        <div class="contenido_hijo">
                            <p>Home Port</p>
                            <p>•</p>
                            <p>status</p>  
                            <p>more info</p>                         
                            <p>▼</p>    
                            <a href="${more_info}">Entra Aquí</a>           
                        </div>
                        <div class="contenido_hijo2">
                            <p>${Home_ports}</p>
                            <p>${status}</p>
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
            </div>
            <div class="content_information">
                <div class="titlecontent_information">
                    <h1>SHIPS. INFORMATION<br>••••••••••••••</h1>
                </div>
                <div class="contenido2">
                    <div class="contenido_hijo">
                        <p>name</p>
                        <p>type</p>
                        <p>Mass</p>
                        <p>Masslbs</p>
                        <p>ID</p>
                        <p>▼</p> 
                        <p>${id}</p>
                    </div>
                    <div class="contenido_hijo2">
                        <p>${name}</p>
                        <p>${type}</p>
                        <p>${mass}</p>
                        <p>${massLb}</p>
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
        </div>
    </div>
</div>`;
    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div class="mGS3Section">
            <div class="contimage">
                <img src="storage/image/logistics_997566.png">
                <h3>Ships</h3>
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

    ships.forEach((ship, idx) => {
        let button = document.createElement("div");
        button.classList.add("navigationNumber");
        button.textContent = `${idx + 1}`;
        button.addEventListener("click", () => {
            shipsMaquetacion(idx); 
        });
        navigationNumbersGrid.appendChild(button);
    });
};


Capsulesmenu();
