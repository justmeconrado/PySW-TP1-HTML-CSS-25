/**
 * Archivo principal de JavaScript para el sitio web FitLife
 * Este archivo coordina la inicialización de todos los módulos funcionales
 * y gestiona la carga de componentes según la página actual.
 * 
 * @author Tu Nombre
 * @version 1.0
 */

// Importación de todos los módulos funcionales
import { initDarkMode } from "./modules/dark-mode.js"           // Módulo para el modo oscuro/claro
import { initAnimatedCounters } from "./modules/animated-counters.js" // Módulo para contadores animados
import { initClassFiltering } from "./modules/class-filtering.js"    // Módulo para filtrado de clases
import { initMasonryLayout } from "./modules/masonry-layout.js"     // Módulo para layout tipo masonry
import { initContactForm } from "./modules/contact-form.js"        // Módulo para el formulario de contacto
import { initPricingToggle } from "./modules/pricing-toggle.js"     // Módulo para alternar precios mensuales/anuales
import { initMobileMenu } from "./modules/mobile-menu.js"          // Módulo para el menú móvil

/**
 * Inicializa el carrusel de testimonios con desplazamiento automático
 * Permite la navegación manual y reanuda el desplazamiento automático después de la interacción
 */
function initTestimonialCarousel() {
  // Selecciona todos los inputs de tipo radio para los testimonios
  const testimonials = document.querySelectorAll('input[name="testimonial"]');
  if (testimonials.length === 0) return; // Si no hay testimonios, termina la función
  
  let currentIndex = 0; // Índice del testimonio actual
  let intervalId; // Variable para almacenar el ID del intervalo
  
  /**
   * Función para avanzar al siguiente testimonio
   * Desmarca el testimonio actual y marca el siguiente
   */
  function nextTestimonial() {
    testimonials[currentIndex].checked = false;
    currentIndex = (currentIndex + 1) % testimonials.length; // Avanza al siguiente (vuelve al inicio si es el último)
    testimonials[currentIndex].checked = true;
  }
  
  // Configura el intervalo para el desplazamiento automático (cada 5 segundos)
  intervalId = setInterval(nextTestimonial, 5000);
  
  // Pausa el desplazamiento automático cuando el usuario interactúa con los controles
  const controls = document.querySelectorAll('.testimonial-controls label');
  controls.forEach((control, index) => {
    control.addEventListener('click', () => {
      clearInterval(intervalId); // Detiene el intervalo actual
      currentIndex = index; // Actualiza el índice al control seleccionado
      
      // Reanuda el desplazamiento automático después de 10 segundos de inactividad
      setTimeout(() => {
        intervalId = setInterval(nextTestimonial, 5000);
      }, 10000);
    });
  });
}

/**
 * Evento que se ejecuta cuando el DOM está completamente cargado
 * Inicializa todos los módulos necesarios según la página actual
 */
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa el modo oscuro (disponible en todas las páginas)
  initDarkMode()

  // Inicializa los contadores animados (disponible en todas las páginas)
  initAnimatedCounters()

  // Inicializa el filtrado de clases (solo si estamos en la página de clases)
  if (document.querySelector(".filter-controls")) {
    initClassFiltering()
  }

  // Inicializa el layout masonry (solo si estamos en la página de clases)
  if (document.querySelector(".classes-masonry")) {
    initMasonryLayout()
  }

  // Inicializa el formulario de contacto (solo si estamos en la página de contacto)
  if (document.getElementById("contact-form")) {
    initContactForm()
  }

  // Inicializa el toggle de precios (solo si estamos en la página de precios)
  if (document.getElementById("pricing-toggle")) {
    initPricingToggle()
  }

  // Inicializa el menú móvil (disponible en todas las páginas)
  initMobileMenu()
  
  // Inicializa el carrusel de testimonios (si existe en la página actual)
  initTestimonialCarousel()
})
