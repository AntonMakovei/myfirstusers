"use client";

import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import Modal from "@/components/Modal";
import { useGetData } from "@/hooks/useGetData";
import { getAllPosts } from "@/service/common";
import { useRouter } from "next/navigation";

type BlogPageProps = {
  params: {
    category: string;
    id: string;
  };
};

export default function BlogPage({ params: { category, id } }: BlogPageProps) {
  const { categories, posts, isLoading } = useGetData();
  const router = useRouter();

  const selectedPost = posts.find((post) => post.id == id);

  if (!id) {
    return <>Post not found</>;
  }

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="p-[5%] bg-white text-gray-800 min-h-screen">
      <Header />
      <Content categories={categories} filteredPosts={posts} />

      <Modal onClose={handleClose}>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto my-16">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {selectedPost?.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Duration: {selectedPost?.duration}
          </p>
          <p className="text-lg text-gray-600">Tag: {selectedPost?.tag}</p>
        </div>
      </Modal>
    </div>
  );
}
