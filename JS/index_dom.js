import scrollTopButton from "./Dom/boton_scroll.js";
import slider from "./Dom/carrusel.js";
import countdown from "./Dom/cuenta_regresiva.js";
import userDevicenInfo from "./Dom/deteccion_dispositivos.js";
import networkStatus from "./Dom/deteccion_red.js";
import webCam from "./Dom/deteccion_webcam.js";
import searchFilters from "./Dom/filtro_busquedas.js";
import getGeolocation from "./Dom/geolocalizacion.js";
import hamburgerMenu from "./Dom/menu_hamburguesa.js";
import speechReader from "./Dom/narrador.js";
import responsiveMedia from "./Dom/objeto_responsive.js";
import responsiveTester from "./Dom/prueba_responsive.js";
import { digitalClock, alarm } from "./Dom/reloj.js";
import scrollSpy from "./Dom/scroll_espia.js";
import draw from "./Dom/sorteo.js";
import {moveBall,shortcuts} from "./Dom/teclado.js"
import darkTheme from "./Dom/tema_oscuro.js";
import contactFormValidations from "./Dom/validaciones_formulario.js";
import smartVideo from "./Dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Jun 23, 2022 21:49:31",
    "Feliz Cumpleaños amigo y docente digital🤓"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px",
    `<a href="https://youtu.be/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px",
    `<a href="https://goo.gl/maps/wvbKzjQgNBRUcus27" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6616309270976!2d-99.16978803509346!3d19.427020586887494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2sec!4v1645491910708!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDevicenInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation")
  searchFilters(".card-filter",".card")
  draw("#winner-btn",".player")
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown",e=>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();