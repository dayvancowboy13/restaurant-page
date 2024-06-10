import './style.css';
import homeContent from "./home.js"
import menuContent from "./menu.js"
import contactContent from "./contact.js"
import imgTiramisu from "./images/tiramisu.jpg"
import imgSwiss from "./images/swiss-rolls.jpg"
import imgLava from "./images/lava-cake.jpg"
import imgPie from "./images/pumpkin-pie.jpg"
import imgXur from "./images/xur.png"

initButtons();

homeContent();

function initButtons(){
    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const aboutBtn = document.getElementById("about-btn");
    const container = document.getElementById("content");

    homeBtn.addEventListener('click', () => {
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
        homeContent()});
    menuBtn.addEventListener('click', () => {
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
        menuContent(imgTiramisu, imgSwiss, imgLava, imgPie)});
    aboutBtn.addEventListener('click', () => {
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
        contactContent(imgXur)});
}