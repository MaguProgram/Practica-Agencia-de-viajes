import { barcelona, roma, paris, londres } from "./ciudades.js";

// OBTENER LOS ELEMENTOS DEL DOM (DOMAIN OBJECT MODEL)
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover la clase active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Agregar la clase active al enlace actual
        this.classList.add('active');

        // Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo

    });
});

// Funcion para obtener el contenido segun el enlace
function obtenerContenido(ciudad) {
    switch (ciudad) {
        case 'Barcelona':
            return barcelona;
        case 'Roma':
            return roma;
        case 'París':
            return paris;
        case 'Londres':
            return londres;
        default:
            return barcelona;
    }
}