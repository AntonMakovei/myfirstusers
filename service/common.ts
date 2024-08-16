import { Category, Post } from "@/interfaces/common";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getAllCategories = async () => {
  return await axios.get(`${BASE_URL}/categories`);
};

export const getAllPosts = async () => {
  return await axios.get<Post[]>(`${BASE_URL}/posts`);
};
