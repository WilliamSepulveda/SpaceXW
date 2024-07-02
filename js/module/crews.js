import { equipo } from "./app.js";

export const crewsmaquetacion = async () => {
    let crews = await equipo(); // Obtener datos de la tripulación
    let crew = crews[0]; // Suponiendo que obtienes el primer elemento de la lista de tripulación

    let contenedor1 = document.querySelector("#mGS1");
    let contenedor2 = document.querySelector("#mGS2");
    let contenedor3 = document.querySelector("#mGS3");

    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    contenedor3.innerHTML = "";

    // Plantilla para mostrar información de la tripulación
    let plantilla1 = `
        <div id="mGS1" class="mainGridSection">
            <div class="mGS1Section">
                <div class="contDescription">
                    <h1>${crew.description}</h1>
                </div>
            </div>
            <div id="contsection1" class="mGS1Section">
                <div class="continformation">
                    <div class="conttexto">
                        <img src="storage/image/mech.svg" alt="">
                    </div>
                    <div class="conttexto">
                        <h1>${crew.agency}</h1>
                    </div>
                </div>               
            </div>   
        </div>
    `;
    contenedor1.innerHTML = plantilla1;

    let plantilla2 = `
        <div id="mGS2" class="mainGridSection">
            <div id="title" class="mGS2Section">
                <div class="contTitle">
                    <h1>${crew.name}</h1>
                </div>
            </div>
            <div id="diagramas" class="mGS2Section">
                <div class="container">
                    <div class="progress" style="--i:85;--clr:#50f30a;">
                        <h3>Age<span>%</span></h3>
                        <h4>${crew.age}</h4>
                    </div>
                    <div class="progress less" style="--i:62;--clr:#0ac4f3;">
                        <h3>Status<span>%</span></h3>
                        <h4>${crew.status}</h4>
                    </div>
                </div>
            </div>
            <div id="mGS2SGrid" class="mGS2Section">
                <!-- Más información sobre la tripulación -->
            </div>
        </div>
    `;
    contenedor2.innerHTML = plantilla2;

    let plantilla3 = `
        <div id="mGS3" class="mainGridSection">
            <div class="mGS3Section">
                <div class="contimage">
                    <img src="storage/image/1356479.png">
                    <h3>Crews</h3>
                </div>
            </div>
            <div id="paggines" class="mGS3Section"> 
                <div class="navigationNumbersGrid">
                    <!-- Botones de navegación para la tripulación -->
                </div>
            </div>
        </div>
    `;
    contenedor3.innerHTML = plantilla3;

    // Lógica para agregar botones de navegación de tripulación
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
