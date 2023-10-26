import { productCreationController } from "./productCreationController.js";



document.addEventListener('DOMContentLoaded', () => {
  const productCreation = document.querySelector('#productCreation');

  // llamamos al controlador
  productCreationController(productCreation);



})