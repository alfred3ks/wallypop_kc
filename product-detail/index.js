import { productDetailController } from "./productDetailController.js";
import { notificationsController } from '../notifications/notificationsController.js';

const productDetail = document.querySelector('#productDetail');
const notifications = document.querySelector('#notifications');

document.addEventListener('DOMContentLoaded', () => {
  // Obtenemos el id de la url:
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  const showNotificaction = notificationsController(notifications);
  productDetail.addEventListener('productLoaded', (e) => {
    showNotificaction(e.detail.message, e.detail.type);
  });

  productDetail.addEventListener('productDelete', (e) => {
    showNotificaction(e.detail.message, e.detail.type);
  });

  productDetailController(productDetail, productId);

})