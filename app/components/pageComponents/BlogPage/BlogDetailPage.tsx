import { Card } from "@/components/ui/card";
import { Blog } from "@/lib/common.types";
import React from "react";

type BlogDetailPageProps = {
  blog: Blog;
};

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blog }) => {
  return (
    <Card className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-xl shadow-md cursor-pointer">
      <h3 className="font-bold text-lg mb-3 text-blue-600">{blog.title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">{blog.duration}</span>
        <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
          {blog.tag}
        </span>
      </div>
    </Card>
  );
};

export default BlogDetailPage;
