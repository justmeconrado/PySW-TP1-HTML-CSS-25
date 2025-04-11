/**
 * Funcionalidad de filtrado de clases
 * 
 * Este módulo permite filtrar las clases/cursos mostrados en la página
 * según la categoría seleccionada por el usuario.
 * 
 * @author Tu Nombre
 * @version 1.0
 */
export function initClassFiltering() {
  // Selecciona todos los controles de filtro (botones/radio buttons)
  const filterControls = document.querySelectorAll(".filter-control")
  // Selecciona todos los elementos de clase que se mostrarán/ocultarán
  const classItems = document.querySelectorAll(".class-item")

  // Añade evento de cambio a cada control de filtro
  filterControls.forEach((control) => {
    control.addEventListener("change", () => {
      // Obtiene el valor del filtro seleccionado (ej: "yoga", "cardio", "all")
      const filterValue = control.getAttribute("data-filter")

      // Recorre cada elemento de clase para mostrar u ocultar según el filtro
      classItems.forEach((item) => {
        // Obtiene las categorías del elemento como un array (puede pertenecer a varias)
        const categories = item.getAttribute("data-category").split(" ")

        // Si el filtro es "all" o el elemento pertenece a la categoría filtrada
        if (filterValue === "all" || categories.includes(filterValue)) {
          // Muestra el elemento quitando la clase "hidden"
          item.classList.remove("hidden")
        } else {
          // Oculta el elemento añadiendo la clase "hidden"
          item.classList.add("hidden")
        }
      })

      // Actualiza el layout de masonry después de filtrar
      // Esto es necesario para que el layout se recalcule con los elementos visibles
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"))
      }, 300) // Pequeño retraso para asegurar que las transiciones CSS han terminado
    })
  })
}
