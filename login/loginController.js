import { loginUser } from './loginModel.js';
import { dispatchEvent } from '../utils/dispatchEvent.js';

export const loginController = (loginForm) => {
  // Ponemos el evento al formulario:
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitLogin(loginForm);
  });
};

const submitLogin = async (loginForm) => {
  // obtener datos del form:
  const { email, password } = getLoginData(loginForm);
  try {
    // login contra sparest: Modelo: Aqui disparamos la peticion:
    // Creamos el evento del spinner start
    dispatchEvent('startLoginUser', null, loginForm);
    const jwt = await loginUser(email, password);
    localStorage.setItem('token', jwt);
    // Disparamos notificaciones
    dispatchEvent('loginUser', {
      type: 'success',
      message: 'Bienvenido.'
    },
      loginForm
    );
    // redirection:
    setTimeout(() => {
      window.location = './index.html';
    }, 2000)
  } catch (error) {
    // gestionar la respuesta:
    // alert(error);
    dispatchEvent('loginUser', {
      type: 'error',
      message: error
    },
      loginForm
    );
  } finally {
    // creamos el evento de stop spinner:
    dispatchEvent('finishLoginUser', null, loginForm);
  }
};

// Obtenemos los datos del formulario:
const getLoginData = (loginForm) => {
  const formData = new FormData(loginForm);
  const email = formData.get('email');
  const password = formData.get('password');
  return {
    email,
    password,
  };
};
