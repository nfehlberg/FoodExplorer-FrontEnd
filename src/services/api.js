import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-21xr.onrender.com'
});