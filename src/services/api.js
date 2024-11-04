import axios from 'axios';

const API_URL = 'https://localhost:44380/api';

export const createUser = (body) => {
  return axios.post(`${API_URL}/user`, body);
}
export const loginUser = (body) => {
  return axios.post(`${API_URL}/auth/login`, body);
}
export const getUser = (id) => {
  return axios.get(`${API_URL}/user/${id}`);
}
export const updateUser = (id, body) => {
  return axios.put(`${API_URL}/user/${id}`, body);
}
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/user/${id}`);
}

export const getUserByEmail = (email) => {
  return axios.get(`${API_URL}/user/${email}`);
}

export const createContact = (body) => {
  return axios.post(`${API_URL}/contact`, body);
}