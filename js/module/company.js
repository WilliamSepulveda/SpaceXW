import { empresa } from "./app.js";

export const Companymaquetacion = async () => {
    let company = await empresa();

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    //-------------------------------------------name--------------------------//
    let name = company.name;
    let founderk = company.founder;
    let founded = company.founded;
    let employees = company.employees;
    let vehicles = company.vehicles;
    let launch_sites = company.launch_sites;
    let test_sites = company.test_sites;

    //------------------------------------elon_musk---------------------------//
    let ceo = company.ceo;
    let cto = company.cto;
    let coo = company.coo;
    let cto_propulsion = company.cto_propulsion;
    let valuation = company.valuation;

    //------------------------------------------links----------------------------//
    let website = company.links.website || "No disponible";
    let flickr = company.links.flickr || "No disponible";
    let twitter = company.links.twitter || "No disponible";
    let elonTwitter = company.links.elon_twitter || "No disponible";
    //--------------------------------------------headquarters--------------------//
    let headquarters = company.headquarters.address;
    let city = company.headquarters.city;


    let plantilla1 = `
        <div class="mGS1Section">
            <div class="contDescription">
                <img src="storage/image/office-building_4300059.png">
            </div>
          <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>website</h2>
                
               <a href="${website}" target="_blank">Open</a>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>flickr</h2>
                <a href="${flickr}" target="_blank">Open</a>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>twitter</h2>
                <a href="${twitter}" target="_blank">Open</a>
            </div>
        </div>
        <div class="continformation">
            <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
            </div>
            <div class="conttexto">
                <h2>elonTwitter</h2>
                <a href="${elonTwitter}" target="_blank">Open</a>
                </div>
                </div>
                <div class="continformation">
                <div class="conttexto">
                <img src="storage/image/mech.svg" alt="">
                </div>
                <div class="conttexto">
                <h2>sumary</h2>
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
                <h3>headquarters<span>%</span></h3>
                <h4>${headquarters}</h4>
            </div>
            <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                <h3>city<span>%</span></h3>
                <h4>${city}</h4>
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
                        <h1>COMPANY INFORMATION<br>•••••••••••••</h1>
                    </div>
                    <div class="contenido">
                        <div class="contenido_hijo">
                            <p>name</p>
                            <p>founder</p>
                            <p>founded in</p>
                            <p>employees</p>
                            <p>vehicles</p>
                            <p>launch_sites</p>
                            <p>test_sites</p>
                        </div>
                        <div class="contenido_hijo2">
                            <p>${name}</p>
                            <p>${founderk}</p>
                            <p>${founded}</p>
                            <p>${employees}</p>
                            <p>${vehicles}</p>
                            <p>${launch_sites}</p>
                            <p>${test_sites}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mGS2SGGridSection">
            <div class="contenedorimg_dad">
                <div id="contenedorImagenes" class="contenedorimg_son">
                <img src="storage/image/elon_musk.avif">
                </div>
            </div>
        </div>
        <div id="informationR2" class="mGS2SGGridSection">
            <div class="cont_espera">
                <img src="storage/image/elonj.jpg" alt="">
            </div>
            <div class="content_information">
                <div class="titlecontent_information">
                    <h1>PERSONAL INFORMATION<br>••••••••••••••</h1>
                </div>
                <div class="contenido2">
                    <div class="contenido_hijo">
                        <p>CEO</p>
                        <p>CTO</p>
                        <p></p>
                        <p>COO</p>
                        <p>cto_propulsion</p>
                        <p></p>
                        <p>valuation</p>
                    </div>
                    <div class="contenido_hijo2">
                        <p>${ceo}</p>
                        <p>${cto}</p>
                        <p>${coo}</p>
                        <p>${cto_propulsion}</p>
                        <p>${valuation}</p>
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
    </div>`;
    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div class="mGS3Section">
            <div class="contimage">
                <img src="storage/image/1356479.png">
                <h3>Company</h3>
            </div>
        </div>
        <div id="paggines" class="mGS3Section">
            <div class="navigationNumbersGrid">
                <!-- Aquí se generarán dinámicamente los números de navegación -->
            </div>
        </div>`;
    contenedor3.innerHTML = plantilla3;
};
