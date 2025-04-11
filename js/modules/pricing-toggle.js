/**
 * Funcionalidad de alternancia de precios
 * 
 * Este módulo gestiona el cambio entre precios mensuales y anuales
 * en la página de precios, actualizando la visualización según la selección del usuario.
 * 
 * @author Tu Nombre
 * @version 1.0
 */
export function initPricingToggle() {
  // Selecciona el interruptor de precios
  const pricingToggle = document.getElementById("pricing-toggle")
  // Selecciona la etiqueta para precios mensuales
  const monthlyLabel = document.querySelector(".toggle-label.monthly")
  // Selecciona la etiqueta para precios anuales
  const annualLabel = document.querySelector(".toggle-label.annual")
  // Selecciona todos los elementos con precios mensuales
  const monthlyPrices = document.querySelectorAll(".monthly-price")
  // Selecciona todos los elementos con precios anuales
  const annualPrices = document.querySelectorAll(".annual-price")

  // Añade un evento para detectar cambios en el interruptor
  pricingToggle.addEventListener("change", () => {
    if (pricingToggle.checked) {
      // Si está marcado, muestra precios anuales
      monthlyLabel.classList.remove("active")
      annualLabel.classList.add("active")

      // Oculta los precios mensuales
      monthlyPrices.forEach((price) => {
        price.classList.remove("active")
      })

      // Muestra los precios anuales
      annualPrices.forEach((price) => {
        price.classList.add("active")
      })
    } else {
      // Si no está marcado, muestra precios mensuales
      monthlyLabel.classList.add("active")
      annualLabel.classList.remove("active")

      // Muestra los precios mensuales
      monthlyPrices.forEach((price) => {
        price.classList.add("active")
      })

      // Oculta los precios anuales
      annualPrices.forEach((price) => {
        price.classList.remove("active")
      })
    }
  })
}
