import BlogDetailPage from "@/app/components/pageComponents/BlogPage/BlogDetailPage";
import Modal from "@/components/Modal";
import { Blog } from "@/lib/common.types";
import { delay } from "@/lib/utils";

type BlogModalProps = {
  params: {
    slug: string;
  };
};

export default async function BlogModal({ params: { slug } }: BlogModalProps) {
  await delay(3000);

  const blogResponse = await fetch(`http://localhost:3001/blogs/${slug}`, {
    cache: "no-cache",
  });
  if (blogResponse.status !== 200) {
    return <h1 className="text-center">No Blog Found for that slug.</h1>;
  }

  const blog: Blog = await blogResponse.json();

  if (!blog?.id) {
    return <h1 className="text-center">No Blog Found for that slug.</h1>;
  }

  return (
    <Modal>
      <div className="grid grid-cols-1 gap-6">
        <BlogDetailPage blog={blog} />
      </div>
    </Modal>
  );
}
