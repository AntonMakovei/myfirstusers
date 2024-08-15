"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGetData } from "@/hooks/useGetData";
import { Loader } from "@/components/ui/loader";
import { Header } from "@/components/Header";
import { Post } from "@/interfaces/common";
import { Content } from "@/components/Content";

const MarketingDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const router = useRouter();
  const { categories, posts, isLoading } = useGetData();

  const filteredPosts = useMemo(() => {
    if (!selectedFilter) return posts;
    return posts.filter((example) => example.tag === selectedFilter);
  }, [selectedFilter, posts]);

  const handleRedirect = (post: Post) => {
    const category = categories.find((category) =>
      category.items.includes(post.tag)
    );
    const redirect = `${category?.title.toLowerCase()}/${post.id.toLowerCase()}`;

    console.log("hello", redirect);
    // router.push(redirect);

    return `${category?.title.toLowerCase()}/${post.id.toLowerCase()}`;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-[5%] bg-white text-gray-800 min-h-screen">
      <Header />
      <Content
        categories={categories}
        selectedFilter={selectedFilter}
        onRedirect={handleRedirect}
        onSelectFilter={setSelectedFilter}
        filteredPosts={filteredPosts}
      />
    </div>
  );
};

export default MarketingDashboard;
