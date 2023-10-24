// importamos el controlador
import { loginController } from './loginController.js';
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from "../notifications/notificationsController.js";

document.addEventListener('DOMContentLoaded', () => {
  // obtenemos los nodos:
  const loginForm = document.querySelector('#login');
  const loader = document.getElementById('loader');
  const notifications = document.querySelector('#notifications');

  // ejecutamos el controlador del loaderController:
  const { show, hide } = loaderController(loader);

  // creamos los escuchadores a los eventos:
  loginForm.addEventListener('startLoginUser', () => {
    show();
  });
  loginForm.addEventListener('finishLoginUser', () => {
    hide();
  });


  const showNotification = notificationsController(notifications);
  loginForm.addEventListener('loginUser', (e) => {
    showNotification(e.detail.message, e.detail.type)
  })

  // ejecutamos el controlador:
  loginController(loginForm);
});