export const offLinePage = (showNotification) => {
  // Comprobamos la conexion de internet:
  window.addEventListener('offline', () => {
    // Llamamos la notificacion:
    const message = 'No hay conexión a internet.';
    const type = 'error';
    showNotification(message, type);
  });

}
