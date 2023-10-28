// importamos el controlador
import { loginController } from './loginController.js';
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from "../notifications/notificationsController.js";
import { offLinePage } from "../utils/offLinePage.js";

const notifications = document.querySelector('#notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
  // obtenemos los nodos:
  const loginForm = document.querySelector('#login');
  const loader = document.querySelector('#loader');

  // ejecutamos el controlador del loaderController:
  const { show, hide } = loaderController(loader);

  // creamos los escuchadores a los eventos:
  loginForm.addEventListener('startLoginUser', () => {
    show();
  });
  loginForm.addEventListener('finishLoginUser', () => {
    hide();
  });

  loginForm.addEventListener('loginUser', (e) => {
    showNotification(e.detail.message, e.detail.type)
  })

  // ejecutamos el controlador:
  loginController(loginForm);
});

// Llamamos la funcion que dispara la notificacion cuando no hay conexion a internet
offLinePage(showNotification);
