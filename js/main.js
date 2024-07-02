import { Rockets_menu, displayRockets } from "./module/rockets.js";
import { capsulesmaquetacion } from "./module/capusules.js";
import { Capsulesmenu } from "./module/capusules.js";






(async () => {
    await Rockets_menu();
    await displayRockets(0); 
})();


const capsules = async () => {
    await capsulesmaquetacion();
};

// Asigna la función capsules a document.capsules
document.capsules = capsules;


const rockets = async () => {
    await Rockets_menu();
    await displayRockets(0); // Muestra el primer rocket por defecto
};

// Asigna la función al botón de Rockets
document.getElementById("rocket-rockets").onclick = rockets; 
