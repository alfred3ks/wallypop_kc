// importamos la vista:
import {
  buildAuthenticatedSession,
  buildUnauthorizedSession,
} from './sessionView.js';

import { dispatchEvent } from "../utils/dispatchEvent.js";

export const sessionController = (nav) => {
  if (isUserLoggedIn()) {
    // consumo la vista:
    nav.innerHTML = buildAuthenticatedSession();
    const logoutButton = nav.querySelector('#signOff');
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('token');
      sessionController(nav);

      // Disparamos notificaciones
      dispatchEvent('loginOff', {
        type: 'success',
        message: 'Adios.'
      },
        nav
      );

    });
  } else {
    // consumo la vista:
    nav.innerHTML = buildUnauthorizedSession();
    // Notificacion al salir de adios:
  }
};

const isUserLoggedIn = () => {
  // comprobamos si el usuario esta autenticado con el token:
  return localStorage.getItem('token');
};