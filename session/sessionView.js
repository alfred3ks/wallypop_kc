export const buildUnauthorizedSession = () => {
  return `
      <button>
        <a href="./login.html">Iniciar sesión</a>
      </button>
      <button>
        <a href="./signup.html">Registrarse</a>
      </button>
`;
};

export const buildAuthenticatedSession = () => {
  return `
    <button><a href="./product-creation.html">Crear anuncio</a></button>
    <button id='signOff' class='signOff'>Cerrar sesión</button>`;
};