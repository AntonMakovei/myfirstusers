import Link from "next/link";
import { Card } from "./ui/card";
import { Post } from "@/interfaces/common";

type Props = {
  filteredPosts: Post[];
  onRedirect?: (value: Post) => string;
};

export const Posts = ({ filteredPosts, onRedirect }: Props) => {
  return (
    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post, index) => (
        <Link key={index} href={onRedirect?.(post) || ""}>
          <Card className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-xl shadow-md cursor-pointer">
            <h3 className="font-bold text-lg mb-3 text-blue-600">
              {post.title}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{post.duration}</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
                {post.tag}
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
