import { empresa } from "./app.js";

export const Companymaquetacion = async () => {
    let companies = await empresa();
    if (!companies || companies.length === 0) {
        console.error("No se encontraron datos de la empresa.");
        return;
    }

    let company = companies[0]; // Tomamos la primera empresa de la respuesta (en este caso, SpaceX)

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    //-------------------------------------------name--------------------------//
    

    //------------------------------------------links----------------------------//
   

    //------------------------------------------info spacex-------------------------//
    let plantilla1 = `
        <div class="mGS1Section">
            <div class="contDescription">
                <img src="storage/image/capsula-espacial.png">
                <img src="storage/image/capsula-espacial.png">
            </div>
        </div>`;
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
        <div id="title" class="mGS2Section">
            <div class="contTitle">
                <h1>$</h1>
            </div>
        </div>
        <div id="diagramas" class="mGS2Section">
            <div class="container">
                <div class="progress" style="--i:85;--clr:#50f30a;">
                    <h3>Launches<span>%</span></h3>
                    <h4>$</h4>
                </div>
                <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                    <h3>reuse_count<span>%</span></h3>
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
                            <h1>LANDINGS INFORMATION<br>•••••••••••••</h1>
                        </div>
                        <div class="contenido">
                            <div class="contenido_hijo">
                                <p>Water</p>
                                <p>Land</p>
                                <p>Launches</p>
                            </div>
                            <div class="contenido_hijo2">
                                <p>$</p>
                                <p>$</p>
                                <p>$</p>
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
                            <p>$</p>
                            <p>$</p>
                            <p>$</p>
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
                </div>
            </div>
        </div>`;
    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div class="mGS3Section">
            <div class="contimage">
                <img src="storage/image/1356479.png">
                <h3>Capsules</h3>
            </div>
        </div>
        <div id="paggines" class="mGS3Section">
            <div class="navigationNumbersGrid">
                <!-- Aquí se generarán dinámicamente los números de navegación -->
            </div>
        </div>`;
    contenedor3.innerHTML = plantilla3;

    // Generar botones de navegación para cada cápsula
    companies.forEach((company, idx) => {
        let button = document.createElement("div");
        button.classList.add("navigationNumber");
        button.dataset.index = idx;
        button.textContent = `${idx + 1}`;
        button.addEventListener("click", () => {
            setMenuCapsule(idx); // Mostrar detalles del índice seleccionado
        });
        contenedor3.querySelector(".navigationNumbersGrid").appendChild(button);
    });

    // Adjuntar los event listeners después de que los elementos hayan sido añadidos al DOM
    document.querySelectorAll(".navigationNumber").forEach(element => {
        element.addEventListener("click", function () {
            let index = this.getAttribute("data-index");
            setMenuCapsule(index);
        });
    });
};

