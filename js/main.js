import { Rockets_menu, displayRockets } from "./module/rockets.js";
import { capsulesmaquetacion } from "./module/capusules.js";
import { Capsulesmenu } from "./module/capusules.js";
import { crewsmaquetacion } from "./module/crews.js";
import { launchesmaquetacion } from "./module/launches.js";

Capsulesmenu();
(async () => {
    await Rockets_menu();
    await displayRockets(0); 
})();


const capsules = async () => {
    await capsulesmaquetacion();
    
};
document.capsules = capsules;


const rockets = async () => {
    await Rockets_menu();
    await displayRockets(0); 
};

document.rockets = rockets;



const botoncrews = async () => {
    await crewsmaquetacion(); 
    
};

document.botoncrews = botoncrews;

const launches = async () => {
    await launchesmaquetacion();
    
};
document.launches = launches;