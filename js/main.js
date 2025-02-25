import { Rockets_menu, displayRockets } from "./module/rockets.js";
import { capsulesmaquetacion } from "./module/capusules.js";
import { Capsulesmenu } from "./module/capusules.js";
import { crewsmaquetacion } from "./module/crews.js";
import { launchesmaquetacion } from "./module/launches.js";
import { Dragonsmaquetacion } from "./module/dragons.js";
import { Companymaquetacion } from "./module/company.js";
import { shipsMaquetacion } from "./module/ships.js";
import { landingpadsMaquetacion } from "./module/Landingpads.js";
import { Roadstermaquetacion } from "./module/roadster.js";

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

const dragons = async () => {
    await Dragonsmaquetacion();
};
document.dragons = dragons;

const company = async () => {
    await Companymaquetacion();
    
};
document.company = company;

const Ships = async () => {
    await shipsMaquetacion();
};
document.Ships = Ships;


const Landpads = async () => {
    await landingpadsMaquetacion();
};
document.Landpads = Landpads;

const roadster = async () => {
    await Roadstermaquetacion();
};
document.roadster = roadster;