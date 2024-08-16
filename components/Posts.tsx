import Link from "next/link";
import { Card } from "./ui/card";
import { Post } from "@/interfaces/common";
import Image from "next/image";

type Props = {
  filteredPosts: Post[];
  onRedirect?: (value: Post) => string;
};

export const Posts = ({ filteredPosts, onRedirect }: Props) => {
  return (
    <div className="w-[88%] grid grid-cols-4 gap-[1rem]">
      {filteredPosts.map((post, index) => (
        <Link key={index} href={onRedirect?.(post) || ""}>
          <Card className="relative flex flex-col bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-xl shadow-md cursor-pointer h-48 overflow-hidden">
            <Image
              className="absolute top-0 left-0 right-0 w-full h-full z-0"
              src={post.image}
              alt={post.title}
              width={100}
              height={100}
              unoptimized={true}
            />
            <h3 className="font-bold text-lg mb-3 text-white relative z-10">
              {post.title}
            </h3>
            <div className="flex justify-between items-end relative z-10 flex-1">
              <span className="text-sm text-white">{post.duration}</span>
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
