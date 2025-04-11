/**
 * Funcionalidad de layout tipo masonry
 * 
 * Este módulo implementa un layout de tipo masonry (similar a Pinterest)
 * para la sección de clases, ajustando dinámicamente la altura de los elementos
 * para crear una cuadrícula visualmente equilibrada.
 * 
 * @author Tu Nombre
 * @version 1.0
 */
export function initMasonryLayout() {
  /**
   * Ajusta el tamaño de los elementos de la cuadrícula
   * Calcula la altura de cada elemento y establece el número de filas que debe ocupar
   */
  function resizeGridItems() {
    // Selecciona el contenedor principal de la cuadrícula
    const grid = document.querySelector(".classes-masonry")
    if (!grid) return // Si no existe la cuadrícula, termina la función

    // Obtiene la altura base de las filas desde el CSS
    const rowHeight = Number.parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"))
    // Obtiene el espacio entre filas desde el CSS
    const rowGap = Number.parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"))

    // Para cada elemento visible en la cuadrícula
    document.querySelectorAll(".class-item:not(.hidden)").forEach((item) => {
      // Calcula cuántas filas debe ocupar basado en su altura real
      const rowSpan = Math.ceil((item.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))
      // Aplica el número de filas como un valor de grid-row-end
      item.style.gridRowEnd = "span " + rowSpan
    })
  }

  // Ejecuta el ajuste cuando la página termina de cargar
  window.addEventListener("load", resizeGridItems)
  // Ejecuta el ajuste cuando se redimensiona la ventana
  window.addEventListener("resize", resizeGridItems)
}
