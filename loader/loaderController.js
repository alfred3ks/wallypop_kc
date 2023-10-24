import { buildLoader } from './loaderView.js';

export const loaderController = (loader) => {
  // Este controlador retorna un objeto con propiedades que contiene dos funciones:
  const showLoader = () => {
    // Mostramos la vista:
    loader.innerHTML = buildLoader();
    // metemos los estilos al loader:
    loader.classList.add('active');
  };

  const hideLoader = () => {
    loader.innerHTML = '';
    // quitamos los estilos al loader:
    loader.classList.remove('active');
  };

  return {
    show: showLoader,
    hide: hideLoader,
  };
};