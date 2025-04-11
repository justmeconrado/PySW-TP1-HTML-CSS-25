/**
 * Funcionalidad del formulario de contacto
 * 
 * Este módulo gestiona el envío del formulario de contacto,
 * mostrando un indicador de carga y redirigiendo al modal de confirmación.
 * 
 * @author Tu Nombre
 * @version 1.0
 */
export function initContactForm() {
  // Selecciona el formulario de contacto
  const contactForm = document.getElementById("contact-form")
  // Selecciona el botón de envío del formulario
  const formSubmit = document.querySelector(".form-submit")

  // Añade un evento de escucha para el envío del formulario
  contactForm.addEventListener("submit", (e) => {
    // Previene el envío real del formulario para esta demostración
    e.preventDefault()

    // Muestra el indicador de carga (spinner)
    formSubmit.classList.add("loading")

    // Simula un retraso en el envío del formulario
    setTimeout(() => {
      // Quita el indicador de carga
      formSubmit.classList.remove("loading")
      // Redirige al modal de confirmación usando un ancla en la URL
      window.location.href = "#confirmation-modal"
      // Reinicia el formulario para limpiar los campos
      contactForm.reset()
    }, 2000) // Espera 2 segundos para simular el tiempo de procesamiento
  })
}
