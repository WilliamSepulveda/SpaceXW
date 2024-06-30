import { displayRockets } from "./module/rockets.js";
import { Rockets_menu } from "./module/rockets.js";
import { capsulesmaquetacion } from "./module/capusules.js";



await displayRockets();
await Rockets_menu();

const capsules = async()=>{
    await capsulesmaquetacion();
}
document.capsules = capsules;