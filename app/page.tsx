"use client";

import React, { useMemo } from "react";
import { useGetData } from "@/hooks/useGetData";
import { Loader } from "@/components/ui/loader";
import { Header } from "@/components/Header";
import { Post } from "@/interfaces/common";
import { Content } from "@/components/Content";
import { useFilterData } from "@/context/filter";

const MarketingDashboard = () => {
  const { selectedFilter, handleSelectFilter } = useFilterData();
  const { categories, posts, isLoading } = useGetData();

  const filteredPosts = useMemo(() => {
    if (!selectedFilter) return posts;
    return posts.filter((example) => example.tag === selectedFilter);
  }, [selectedFilter, posts]);

  const handleRedirect = (post: Post) => {
    const category = categories.find((category) =>
      category.items.includes(post.tag)
    );

    return `${category?.title.toLowerCase()}/${post.id.toLowerCase()}`;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-[2%] bg-white text-gray-800 min-h-screen">
      <Header />
      <Content
        categories={categories}
        selectedFilter={selectedFilter}
        onRedirect={handleRedirect}
        onSelectFilter={handleSelectFilter}
        filteredPosts={filteredPosts}
      />
    </div>
  );
};

export default MarketingDashboard;
