import { Category, Post } from "@/interfaces/common";
import { getAllCategories, getAllPosts } from "@/service/common";
import { useEffect, useState } from "react";

export const useGetData = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    if (!isLoading) {
      setLoading(true);
    }

    try {
      const responseCategories = await getAllCategories();
      const responsePosts = await getAllPosts();

      setCategories(responseCategories.data);
      setPosts(responsePosts.data);
    } catch (error) {
      // show error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return { categories, posts, isLoading };
};
