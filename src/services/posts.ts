import { Post } from "../models/Post";
import { api } from "./api";

export const listPosts = async (): Promise<Post[]> => {
  const { data: posts } = await api.get<Post[]>("/posts");
  return posts;
};
