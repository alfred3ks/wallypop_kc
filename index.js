import { notificationsController } from "./notifications/notificationsController.js";
import { sessionController } from './session/sessionController.js';

// Obtenemos el nodo de botones inicio de sesion y registro:
const session = document.querySelector('#session');

// Obtenemos el nodo de notificaciones:
const notifications = document.querySelector('#notifications');

// Lanzamos notificaciones:
const showNotification = notificationsController(notifications);
session.addEventListener('loginOff', (e) => {
  showNotification(e.detail.message, e.detail.type)
})

document.addEventListener('DOMContentLoaded', () => {
  // llamamos controlador de inicio de sesion y registro:
  sessionController(session);
})

// Comprobamos la conexion de internet:
window.addEventListener('offline', () => {
  // Llamamos la notificacion:
  const message = 'No hay conexión a internet.';
  const type = 'error';
  showNotification(message, type);
});