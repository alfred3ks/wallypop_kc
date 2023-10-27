import { buildProduct, emptyProducts } from "./productListView.js";
import { getProducts } from "./productListModel.js";
import { dispatchEvent } from '../utils/dispatchEvent.js'

export const productListController = async (productsList) => {
  productsList.innerHTML = '';

  let products = [];

  try {
    dispatchEvent('startLoadingProducts', null, productsList);
    products = await getProducts();
    if (products.length === 0) {
      productsList.innerHTML = emptyProducts();
      dispatchEvent(
        'productsLoaded',
        {
          type: 'error',
          message: 'No hay productos para mostrar.'
        },
        productsList);
    } else {
      //Llamamos la funcion que renderiza productos:
      renderProducts(products, productsList);
      dispatchEvent(
        'productsLoaded',
        {
          type: 'success',
          message: 'Productos cargados correctamente.'
        },
        productsList);
    }
  } catch (err) {
    dispatchEvent(
      'errorConexion',
      {
        type: 'error',
        message: 'Fallo de conexion con BD.'
      },
      productsList);
  } finally {
    // Aqui generamos el evento de quitar el spinner tras cargar los productos:
    dispatchEvent('finishLoadingProducts', null, productsList);
  }
};

const renderProducts = (products, productsList) => {
  products.forEach((product) => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product');
    productContainer.innerHTML = buildProduct(product);
    productsList.appendChild(productContainer);
  });
};