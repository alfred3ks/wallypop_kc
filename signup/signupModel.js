import { sparrestApi } from "../utils/sparresApi.js";

export const createrUser = async (email, password) => {
  // URL API:
  const endpoint = 'auth/register';
  const body = {
    username: email,
    password: password
  }
  await sparrestApi().post(endpoint, body);
}
