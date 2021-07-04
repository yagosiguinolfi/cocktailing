import axios from "axios";
// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "http://www.thecocktaildb.com/api/json/v1/1/",
});

export default api;