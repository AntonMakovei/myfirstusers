"use client";

import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import Modal from "@/components/Modal";
import { useFilterData } from "@/context/filter";
import { useGetData } from "@/hooks/useGetData";
import { getAllPosts } from "@/service/common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

type BlogPageProps = {
  params: {
    category: string;
    id: string;
  };
};

export default function BlogPage({ params: { category, id } }: BlogPageProps) {
  const { categories, posts } = useGetData();
  const { selectedFilter, handleSelectFilter } = useFilterData();
  const router = useRouter();

  const filteredPosts = useMemo(() => {
    if (!selectedFilter) return posts;
    return posts.filter((example) => example.tag === selectedFilter);
  }, [selectedFilter, posts]);

  const selectedPost = posts.find((post) => post.id == id);

  if (!id) {
    return <>Post not found</>;
  }

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="py-[2%] bg-white text-gray-800 min-h-screen">
      <Header />
      <Content
        categories={categories}
        filteredPosts={filteredPosts}
        selectedFilter={selectedFilter}
        onSelectFilter={handleSelectFilter}
      />

      <Modal onClose={handleClose}>
        <Image
          className="w-full"
          src={selectedPost?.image as string}
          alt={selectedPost?.title as string}
          width={100}
          height={100}
          unoptimized={true}
        />
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
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
