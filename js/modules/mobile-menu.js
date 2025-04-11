/**
 * Funcionalidad del menú móvil
 * 
 * Este módulo gestiona el comportamiento del menú de navegación en dispositivos móviles,
 * incluyendo la apertura/cierre del menú, interacciones con submenús y mejoras de accesibilidad.
 * 
 * @author Tu Nombre
 * @version 1.0
 */
export function initMobileMenu() {
  // Selecciona el checkbox que controla la visibilidad del menú
  const menuToggle = document.getElementById("menu-toggle")
  // Selecciona el contenedor principal del menú
  const menu = document.querySelector(".menu")
  // Selecciona todos los enlaces del menú
  const menuItems = document.querySelectorAll(".menu-item a")

  // Reemplazar el icono del menú hamburguesa con FontAwesome si es necesario
  const menuIcon = document.querySelector(".menu-icon")
  if (menuIcon) {
    menuIcon.innerHTML = '<i class="fas fa-bars"></i>'
  }

  // Cierra el menú cuando se hace clic fuera de él
  document.addEventListener("click", (e) => {
    // Si el clic no fue dentro del menú ni en el botón de toggle y el menú está abierto
    if (!menu.contains(e.target) && !menuToggle.contains(e.target) && menuToggle.checked) {
      menuToggle.checked = false // Cierra el menú
    }
  })

  // Cierra el menú cuando se hace clic en un elemento del menú (en móviles)
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Solo en dispositivos móviles (ancho <= 768px)
      if (window.innerWidth <= 768) {
        menuToggle.checked = false // Cierra el menú
      }
    })
  })

  // Mejora la accesibilidad de los submenús
  const hasSubmenuItems = document.querySelectorAll(".has-submenu")

  hasSubmenuItems.forEach((item) => {
    const link = item.querySelector("a")

    // Permite abrir/cerrar submenús con teclado (Enter o Espacio)
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault() // Previene el comportamiento predeterminado
        item.classList.toggle("submenu-open") // Alterna la clase para mostrar/ocultar el submenú
      }
    })
  })
}
