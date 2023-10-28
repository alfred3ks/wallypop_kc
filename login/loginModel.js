export const loginUser = async (email, password) => {
  // Atacamos la url de login:
  const url = 'http://localhost:8000/auth/login';
  const body = {
    username: email,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    // Asi enviamos al controlador el token JWT:
    if (response.ok) {
      return data.accessToken;
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