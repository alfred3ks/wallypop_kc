import { sparrestApi } from '../utils/sparresApi.js';

const parseProduct = (product) => {
  return {
    user: product.user.username,
    userId: product.user.id,
    name: product.name.charAt(0).toUpperCase() + product.name.slice(1),
    image: product.image,
    price: product.price,
    type: product.type.charAt(0).toUpperCase() + product.type.slice(1),
    message: product.message.charAt(0).toUpperCase() + product.message.slice(1),
    id: product.id
  };
};

export const getProduct = async (productId) => {
  const endpoint = `api/products/${productId}?_expand=user`;

  const product = await sparrestApi().get(endpoint);
  return parseProduct(product);
}

export const deleteProduct = async (productId) => {
  const endpoint = `api/products/${productId}`;
  await sparrestApi().delete(endpoint);
}