import { displayRockets } from "./module/rockets.js";
import { Rockets_menu } from "./module/rockets.js";
import { capsulesmaquetacion } from "./module/capusules.js";
import { Capsulesmenu } from "./module/capusules.js";

await Capsulesmenu();
await Rockets_menu();
await displayRockets();

const capsules = async()=>{
    await capsulesmaquetacion();
}
document.capsules = capsules;


const rockets = async()=>{
    await displayRockets();
}
document.rockets = rockets;