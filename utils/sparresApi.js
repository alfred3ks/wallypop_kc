export const sparrestApi = () => {
  const baseUrl = 'http://localhost:8000/';

  // Metodo GET:
  const get = async (endpoint) => {
    const url = `${baseUrl}${endpoint}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      else {
        const message = data.message || 'Ha ocurrido error';
        throw new Error(message);
      }
    } catch (error) {
      throw error.message;
    }
  };

  // Metodo DELETE:
  const remove = async (endpoint) => {
    const url = `${baseUrl}${endpoint}`;
    // extraemos el token:
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const data = await response.json();
        const message = data.message || 'No ha sido posible borrar el elemento';
        throw new Error(message);
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

  // Método post:
  const post = async (endpoint, body) => {
    const url = `${baseUrl}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json',
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (err) {
      if (err.message) {
        throw err.message;
      } else {
        throw err;
      }
    }
  }

  // Retornamos los metodos:
  return {
    get: get,
    post: post,
    delete: remove
  }
}