import { buildProduct, emptyProducts } from "./productListView.js";
import { getProducts } from "./productListModel.js";
import { dispatchEvent } from '../utils/dispatchEvent.js'

export const productListController = async (productsList) => {
  productsList.innerHTML = '';

  let products = [];

  try {
    // 🎯 Spinner: disparamos un evento antes que se carguen los tweets:
    dispatchEvent('startLoadingProducts', null, productsList);
    // Aqui se cargan los tweets:
    products = await getProducts();
  } catch (err) {
    // 📌 llamamos la funcion que hemos creado para refactorizar:
    const type = 'error';
    const message = 'Error cargando productos!!!';
    const event = createCustomEvent(type, message);
    productsList.dispatchEvent(event);
  } finally {
    // Aqui generamos el evento de quitar el spinner tras cargar los tweets:
    dispatchEvent('finishLoadingProducts', null, productsList);
  }

  if (products.length === 0) {
    console.log('aqui');
    productsList.innerHTML = emptyProducts();
  } else {
    //Llamamos la funcion que renderiza productos:
    renderProducts(products, productsList);

    // 📌 llamamos la funcion que hemos creado para refactorizar:
    const type = 'success';
    const message = 'Productos cargados correctamente!!!';
    const event = createCustomEvent(type, message);
    productsList.dispatchEvent(event);
  }
};

// Creamos una funcion para el evento CustomEvent:
const createCustomEvent = (type, message) => {
  const event = new CustomEvent('productsLoaded', {
    detail: {
      type: type,
      message: message,
    },
  });
  return event;
};

const renderProducts = (products, productsList) => {
  products.forEach((product) => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product');
    productContainer.innerHTML = buildProduct(product);
    productsList.appendChild(productContainer);
  });
};