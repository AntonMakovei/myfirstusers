"use client";

import { Card } from "@/components/ui/card";
import { Blog, Catagory } from "@/lib/common.types";
import Link from "next/link";
import React, { useMemo, useState } from "react";

interface MainSectionProps {
  categories: Catagory[];
  blogs: Blog[];
}

const MainSection: React.FC<MainSectionProps> = ({ categories, blogs }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredBlogs = useMemo(() => {
    if (!selectedFilter) return blogs;
    return blogs.filter((blog) => blog.tag === selectedFilter);
  }, [selectedFilter, blogs]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="lg:col-span-1">
        {categories.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-bold text-lg mb-3 text-blue-600">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                    selectedFilter === item
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  onClick={() =>
                    setSelectedFilter(selectedFilter === item ? null : item)
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => {
          const category = categories.find((category) => {
            console.log()
            return category.items.includes(blog.tag);
          });

          return (
            <Link
              key={index}
              href={`/${category?.title.toLowerCase()}/${blog.id}`}
            >
              <Card
                className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-xl shadow-md cursor-pointer"
                // onClick={() => openModal(blog)}
              >
                <h3 className="font-bold text-lg mb-3 text-blue-600">
                  {blog.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{blog.duration}</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {blog.tag}
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainSection;
