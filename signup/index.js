import { signupController } from "./signupController.js";
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from '../notifications/notificationsController.js';
import { offLinePage } from "../utils/offLinePage.js";

const notifications = document.querySelector('#notifications');
const showNotification = notificationsController(notifications);

document.addEventListener('DOMContentLoaded', () => {
  const signup = document.querySelector('#signup');
  signup.addEventListener('createrUser', (e) => {
    showNotification(e.detail.message, e.detail.type)
  })
  // ejecutamos el controlador del loaderController:
  const { show, hide } = loaderController(loader);
  // creamos los escuchadores a los eventos:
  signup.addEventListener('startSignup', () => {
    show();
  });
  signup.addEventListener('finishSignup', () => {
    hide();
  });
  signupController(signup);
})

// Llamamos la funcion que dispara la notificacion cuando no hay conexion a internet
offLinePage(showNotification);
