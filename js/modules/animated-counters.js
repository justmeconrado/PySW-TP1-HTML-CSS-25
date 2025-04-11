/**
 * Funcionalidad de contadores animados
 * 
 * Este módulo se encarga de animar los contadores numéricos en la sección de estadísticas.
 * Utiliza IntersectionObserver para iniciar la animación cuando los elementos son visibles.
 * 
 * @author Tu Nombre
 * @version 1.0
 */
export function initAnimatedCounters() {
  // Selecciona todos los elementos con clase stat-number
  const counters = document.querySelectorAll(".stat-number")

  // Si no hay contadores en la página, termina la ejecución
  if (!counters.length) return

  /**
   * Función para animar un contador individual
   * @param {HTMLElement} counter - El elemento contador a animar
   */
  const animateCounter = (counter) => {
    // Obtiene el valor objetivo desde el atributo data-count
    const target = +counter.getAttribute("data-count")
    // Obtiene el valor actual del contador
    const count = +counter.innerText
    // Calcula el incremento para cada paso (1% del valor final)
    const increment = target / 100

    // Si aún no hemos llegado al valor objetivo
    if (count < target) {
      // Actualiza el valor del contador con el incremento
      counter.innerText = Math.ceil(count + increment)
      // Programa el siguiente paso de la animación después de 20ms
      setTimeout(() => animateCounter(counter), 20)
    } else {
      // Asegura que el valor final sea exactamente el objetivo
      counter.innerText = target
    }
  }

  // Configuración del observador de intersección
  const observerOptions = {
    threshold: 0.5, // Activa cuando al menos 50% del elemento es visible
  }

  /**
   * Crea un observador que detecta cuando los elementos entran en el viewport
   * y comienza la animación de los contadores
   */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Si el elemento está visible en la pantalla
      if (entry.isIntersecting) {
        // Selecciona todos los contadores dentro del elemento
        const counters = entry.target.querySelectorAll(".stat-number")
        // Inicia la animación para cada contador
        counters.forEach((counter) => animateCounter(counter))
        // Deja de observar el elemento una vez que se ha iniciado la animación
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observa todos los contenedores de estadísticas en la página
  document.querySelectorAll(".stats-grid").forEach((grid) => {
    observer.observe(grid)
  })
}
