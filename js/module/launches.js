import { getLaunches } from "./app.js";


export const launchesmaquetacion = async () => {
    let crews = await getLaunches(); 
    let crew = crews[0]; 

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";


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
                        <h1>LAUNCH: #</h1>
                    </div>
                </div>
            </div>
        </div>`;
    
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
        <div class="mGS2Section">
            <div id="title" class="contTitle">
                <h1></h1>
            </div>
            <div id="diagramas" class="mGS2Section">
                <div class="container">
                    <div class="progress" style="--i:85;--clr:#50f30a;">
                        <h3>Launches<span>%</span></h3>
                        <h4>$</h4>
                    </div>
                    <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                        <h3>Status<span>%</span></h3>
                        <h4></h4>
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
                                    <p><br></p>
                                    <p></p>
                                    <a href="" target="_blank">Open</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mGS2SGGridSection">
                    <div class="contenedorimg_dad">
                        <div id="contenedorImagenes" class="contenedorimg_son">
                            <img referrerpolicy="no-referrer" src=""></img>
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

    
};