import { createProduct } from './productCreationModel.js';
import { dispatchEvent } from '../utils/dispatchEvent.js';

export const productCreationController = (productCreation) => {
  productCreation.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(productCreation);
    const name = formData.get('name');
    const price = formData.get('price');
    const type = formData.get('type');
    const message = formData.get('message');
    const image = formData.get('image');

    try {
      dispatchEvent('startUpProduct', null, productCreation);
      await createProduct(name, price, type, message, image);
      // evento custom:
      dispatchEvent(
        'productCreated',
        {
          type: 'success',
          message: 'Producto subido correctamente.'
        },
        productCreation);
      setTimeout(() => {
        dispatchEvent('finishUpProduct', null, productCreation);
        // hacemos redireccion:
        window.location = '/';
      }, 1500)
    } catch (error) {
      dispatchEvent(
        'productCreated',
        {
          type: 'error',
          message: 'Error al subir producto.'
        },
        productCreation);
    }

  });
};