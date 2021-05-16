import axios from "axios"

const login = () => {
  return axios.post('auth/login');
}

export default {
  login,
}