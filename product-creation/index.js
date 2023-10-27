import { productCreationController } from "./productCreationController.js";
import { notificationsController } from '../notifications/notificationsController.js';
import { offLinePage } from "../utils/offLinePage.js";
import { loaderController } from '../loader/loaderController.js';

const notifications = document.querySelector('#notifications');
const showNotification = notificationsController(notifications);
const loader = document.querySelector('#loader');

// 🎈 RULETA DE CARGA:
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  const productCreation = document.querySelector('#productCreation');

  productCreation.addEventListener('productCreated', (e) => {
    const message = e.detail.message;
    const type = e.detail.type;
    showNotification(message, type);
  })

  // 🎈 RULETA DE CARGA:
  productCreation.addEventListener('startUpProduct', () => {
    show();
  });
  productCreation.addEventListener('finishUpProduct', () => {
    hide();
  });



  // llamamos al controlador
  productCreationController(productCreation);
})

// Llamamos la funcion que dispara la notificacion cuando no hay conexion a internet
offLinePage(showNotification);