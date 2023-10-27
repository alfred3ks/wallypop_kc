import { productCreationController } from "./productCreationController.js";
import { notificationsController } from '../notifications/notificationsController.js';

const notifications = document.querySelector('#notifications');

const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
  const productCreation = document.querySelector('#productCreation');

  productCreation.addEventListener('productCreated', (e) => {
    const message = e.detail.message;
    const type = e.detail.type;
    showNotification(message, type);
  })

  // llamamos al controlador
  productCreationController(productCreation);
})

// Comprobamos la conexion de internet:
window.addEventListener('offline', () => {
  // Llamamos la notificacion:
  const message = 'No hay conexión a internet.';
  const type = 'error';
  showNotification(message, type);
});