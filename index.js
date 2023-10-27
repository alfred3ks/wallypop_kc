import { productListController } from "./product-list/productListController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { sessionController } from './session/sessionController.js';
import { loaderController } from "./loader/loaderController.js";
import { offLinePage } from "./utils/offLinePage.js";

// Obtenemos el nodo de botones inicio de sesion y registro:
const session = document.querySelector('#session');

// Obtenemos el nodo de notificaciones:
const notifications = document.querySelector('#notifications');
// Obtenemos el nodo del loader:
const loader = document.querySelector('#loader');

// Lanzamos notificaciones:
const showNotification = notificationsController(notifications);
session.addEventListener('loginOff', (e) => {
  showNotification(e.detail.message, e.detail.type)
})

// 🎈 RULETA DE CARGA:
// Como es una funcion que retorna dos metodos hago destructuring:
// Estos metodos los usare mas abajo:
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {

  // Llamamos al controlador de cargar productos:
  const productsList = document.querySelector('#products')

  // 🎈 RULETA DE CARGA:
  productsList.addEventListener('startLoadingProducts', () => {
    // Mostramos la ruleta de carga:
    show();
  });
  productsList.addEventListener('finishLoadingProducts', () => {
    // Ocultamos la ruleta de carga:
    hide();
  });

  productsList.addEventListener('productsLoaded', (e) => {
    showNotification(e.detail.message, e.detail.type)
  })

  productListController(productsList);

  // llamamos controlador de inicio de sesion y registro:
  sessionController(session);

})

// Llamamos la funcion que dispara la notificacion cuando no hay conexion a internet
offLinePage(showNotification);
