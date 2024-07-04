import { auto } from "./app.js";

export const Roadstermaquetacion = async () => {
    let roadsters = await auto(); 
    let carro = roadsters; 

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";
   
    let name = carro.name;
    let launchDateUtc = carro.launch_date_utc;
    let masskg = carro.launch_mass_kg;
    let masslbs = carro.launch_mass_lbs;
    let id = carro.norad_id;
    let orbitType = carro.orbit_type
    let eccentricity = carro.eccentricity;
    let inclinacion = carro.inclination;
    let longitude = carro.longitude;
    let periapsisArg = carro.periapsis_arg;
    let periodDays = carro.period_days;
    let speedKph = carro.speed_kph;
    let earthDistanceKm = carro.earth_distance_km;
    let earthDistanceMi = carro.earth_distance_mi;
    let marsDistanceKm = carro.mars_distance_km;
    let marsDistanceMi = carro.mars_distance_mi;
    let wikipedia = carro.wikipedia;
    let images = carro.flickr_images;
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
                        <p>longitud  
                        <p>↓↓↓<p>
                        <h4>${longitude}<p>
                        <p>↓↓↓<p>
                        <p>inclination  </p>
                        <p>↓↓↓<p>
                        <h4>${inclinacion}</h4>
                        <p>earthDistanceKm  </p>
                        <p>↓↓↓<p>
                        <h4>${earthDistanceKm} </h4>
                        <p>earthDistanceMi  </p>
                        <p>↓↓↓<p>
                        <h4>${earthDistanceMi} </h4>
                        <p>periapsisArg </p>
                        <p>↓↓↓<p>
                        <h4>${periapsisArg} </h4>
                        <p>eccentricity  </p>
                        <p>↓↓↓<p>
                        <h4>${eccentricity} </h4>
                        <p>semiMajorAxisAu  </p>
                        <p>↓↓↓<p>
                       
                    </div>
                </div>
            </div>
        </div>`;
    
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
                <h3>speed<span>%</span></h3>
                <h4>kph</h4>
                <h2></h2>
            </div>
            <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                <h3>mass<span>%</span></h3>
                <h4>${masskg}kg</h4>
                <h2>${masslbs}lbs</h2>
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
                    <h1>ROADSTER INFORMATION<br>••••••••••••••</h1>
                </div>
                    <div class="contenido">
                        <div class="contenido_hijo">
                            <p>Name</p>
                            <p>id</p>  
                            <p>orbit type</p>                         
                            <p>search</p>                            
                        </div>
                        <div class="contenido_hijo2">
                            <p>${name}</p>
                            <p>${id}</p>
                            <p>${orbitType}</p>
                            <a href="${wikipedia}">open</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mGS2SGGridSection">
            <div class="contenedorimg_dad">
                <div id="contenedorImagenes" class="contenedorimg_son">
                 ${images.map(image => `<img src="${image}" alt="Dragon image">`).join('')}
                </div>
            </div>
        </div>
        <div id="informationR2" class="mGS2SGGridSection">
            <div class="cont_espera">
                <img src="storage/image/elonj.jpg" alt="">
            </div>
            <div class="content_information">
                <div class="titlecontent_information">
                    <h1>LAUNCH INFORMATION<br>••••••••••••••</h1>
                </div>
                <div class="contenido2">
                    <div class="contenido_hijo">
                        <p>date</p>
                        <p>days_periodo</p>
                        <p>Mars Distancekm</p>
                        <p>marsDistanceMi</p>
                    </div>
                    <div class="contenido_hijo2">
                    <p>${launchDateUtc}</p>                    
                    <p>${periodDays}</p>
                    <p>${marsDistanceKm}</p>
                    <p>${marsDistanceMi}</p>
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
                <img src="storage/image/space-shuttle-156012.svg">
                <h3>Launches</h3>
            </div>
        </div>
        <div class="navigationNumbersDiv">
            <div class="navigationNumbersContainer">
                <div class="navigationNumbersGrid">
                </div>
                
            </div>
        </div>`;

    contenedor3.innerHTML = plantilla3;
};
