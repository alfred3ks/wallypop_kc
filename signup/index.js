import { signupController } from "./signupController.js";
import { notificationsController } from '../notifications/notificationsController.js';


document.addEventListener('DOMContentLoaded', () => {

  const signup = document.querySelector('#signup');
  const notifications = document.querySelector('#notifications');

  const showNotification = notificationsController(notifications);
  signup.addEventListener('createrUser', (e) => {
    showNotification(e.detail.message, e.detail.type)
  })

  signupController(signup);

})

