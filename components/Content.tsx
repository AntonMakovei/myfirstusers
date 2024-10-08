import { Category, Post } from "@/interfaces/common";
import { Categories } from "./Categories";
import { Posts } from "./Posts";

type Props = {
  categories: Category[];
  selectedFilter: string | null;
  onSelectFilter: (value: string | null) => void;
  filteredPosts: Post[];
  onRedirect?: (value: Post) => string;
};

export const Content = ({
  categories,
  selectedFilter,
  onSelectFilter,
  filteredPosts,
  onRedirect,
}: Props) => {
  return (
    <div className="flex gap-[1rem]">
      <Categories
        categories={categories}
        selectedFilter={selectedFilter}
        onSelectFilter={onSelectFilter}
      />
      <Posts filteredPosts={filteredPosts} onRedirect={onRedirect} />
    </div>
  );
};
