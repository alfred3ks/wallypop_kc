// import { sparrestApi } from '../utils/sparresApi.js';

export const createProduct = async (name, price, type, message, image) => {
  // URL API:
  const url = 'http://localhost:8000/api/products';

  // extraemos el token:
  const token = localStorage.getItem('token');

  const body = {
    name: name,
    price: price,
    type: type,
    message: message,
    image: image,
  };

  let response;

  try {
    response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (err) {
    // Este error se envia al controlador:
    if (err.message) {
      throw err.message;
    } else {
      throw err;
    }
  }
};

