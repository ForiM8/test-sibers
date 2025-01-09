import { baseURL } from "./request";

export const addedProducts = (data) => {
  return baseURL.post("/products", data);
};

export const getUsers = () => {
  return baseURL();
};

export const getProduct = (id) => {
  return baseURL(`/products/${id}`);
};

export const removeOneProduct = (id) => {
  return baseURL.delete(`/products/${id}`);
};

export const editProduct = (data) => {
  return baseURL.patch(`/products/${data.id}`, data);
};