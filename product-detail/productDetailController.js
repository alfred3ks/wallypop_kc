import { getProduct, deleteProduct } from "./productDetailModel.js";
import { buildProduct } from "./productDetailView.js";
import { dispatchEvent } from '../utils/dispatchEvent.js';
import { decodeToken } from "../utils/decodeToken.js";

export const productDetailController = async (productDetail, productId) => {
  try {
    const product = await getProduct(productId);
    productDetail.innerHTML = buildProduct(product);

    const cardProduct = document.querySelector('#card-product');

    handleDeleteProduct(product, productDetail, cardProduct);

  } catch (error) {
    dispatchEvent(
      'productLoaded', { type: 'error', message: 'El producto no existe', }, productDetail
    );
    // Hacemos redireccion con un delay:
    setTimeout(() => {
      window.location = '/';
    }, 2000);
  }
}

// Funcion que comprueba el id del token para habilitar un boton de eliminar producto:
const handleDeleteProduct = (product, productDetail, cardProduct) => {
  const token = localStorage.getItem('token');
  if (token) {
    const { userId } = decodeToken(token);
    if (userId === product.userId) {
      // Habilito el boton: Solo si el usuario es el mismo que creo ese producto:
      deleteProductButton(product, productDetail, cardProduct);

    }
  }
}

const deleteProductButton = (product, productDetail, cardProduct) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Borrar producto';
  deleteButton.classList.add('button');
  deleteButton.addEventListener('click', () => {
    if (confirm('¿Seguro que deseas borrar este producto?')) {
      deleteProduct(product.id);
      dispatchEvent(
        'productDelete', { type: 'success', message: 'Producto eliminado.', }, productDetail
      );
      // Hacemos redireccion con un delay:
      setTimeout(() => {
        window.location = '/';
      }, 1000);

    }
  })
  // Metemos el boton debajo de todo:
  cardProduct.appendChild(deleteButton);
}