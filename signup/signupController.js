import { createrUser } from "./signupModel.js";
import { dispatchEvent } from '../utils/dispatchEvent.js'

export const signupController = (signup) => {
  signup.addEventListener('submit', (e) => {
    validateForm(e, signup);
  })
}

const validateForm = async (e, signup) => {
  e.preventDefault();

  const email = signup.querySelector('#email');
  const password = signup.querySelector('#password');
  const passwordConfirmation = signup.querySelector('#password-confirm');

  try {
    if (isFormatValid(email, password, passwordConfirmation)) {
      // We call the model:
      await createrUser(email.value, password.value);

      dispatchEvent('createrUser', {
        type: 'success',
        message: 'Usuario registrado.'
      },
        signup
      );

      // redirection:
      setTimeout(() => {
        window.location = './login.html';
      }, 3000)
    }
  } catch (error) {
    dispatchEvent('createrUser', {
      type: 'error',
      message: error
    },
      signup
    );
  }
}

const isFormatValid = (email, password, passwordConfirmation) => {
  const emailValidation = isEmailValid(email);
  const passwordValidation = isPasswordValid(password, passwordConfirmation);
  return emailValidation && passwordValidation;
}

const isEmailValid = (email) => {
  const emailRegExp = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  let result = true;
  if (!emailRegExp.test(email.value)) {
    throw 'El correo no es valido.'
  }
  return result;
}

const isPasswordValid = (password, passwordConfirmation) => {
  let result = true;
  if (password.value !== passwordConfirmation.value) {
    throw 'Las contraseñas no son iguales.'
  }
  return result;
}