import { signupController } from "./signupController.js";
import { loaderController } from '../loader/loaderController.js';
import { notificationsController } from '../notifications/notificationsController.js';


document.addEventListener('DOMContentLoaded', () => {

  const signup = document.querySelector('#signup');
  const notifications = document.querySelector('#notifications');

  const showNotification = notificationsController(notifications);
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

