/**
 * Funcionalidad de modo oscuro
 * 
 * Este módulo gestiona la preferencia del usuario para el modo oscuro/claro,
 * aplica los estilos correspondientes y guarda la configuración en localStorage
 * para mantener la preferencia entre sesiones.
 * 
 * @author Tu Nombre
 * @version 1.0
 */
export function initDarkMode() {
  // Selecciona el interruptor de modo oscuro
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  // Selecciona el elemento body para aplicar la clase dark-mode
  const body = document.body;
  
  // Verificar si el toggle existe en la página actual
  if (!darkModeToggle) {
    console.error("Error: No se encontró el elemento dark-mode-toggle");
    return; // Termina la ejecución si no existe el toggle
  }

  // Comprobar si hay una preferencia guardada en localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    // Si el modo oscuro estaba activado, aplicar la clase
    body.classList.add("dark-mode");
    // Marcar el interruptor como activado
    darkModeToggle.checked = true;
  }

  // Cambiar entre modo claro y oscuro cuando se hace clic en el interruptor
  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      // Activar modo oscuro
      body.classList.add("dark-mode");
      // Guardar preferencia en localStorage
      localStorage.setItem("darkMode", "enabled");
    } else {
      // Desactivar modo oscuro
      body.classList.remove("dark-mode");
      // Eliminar preferencia de localStorage
      localStorage.setItem("darkMode", null);
    }
  });
}

