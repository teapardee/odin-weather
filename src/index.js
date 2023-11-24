import './style.css';
import { weather } from './modules/weather.js';

// async function run() {
//   let coords = await weather.retrieveData('02370');
//   return coords;
// }
// let coords = run();

// let weatherResponse = weather.retrieveData(coords.lat, coords.long);

const latTest = weather.retrieveData('02370');

console.log(latTest);
