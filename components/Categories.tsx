import { Category } from "@/interfaces/common";
import { twMerge } from "tailwind-merge";

type Props = {
  categories: Category[];
  selectedFilter?: string | null;
  onSelectFilter?: (value: string | null) => void;
};

export const Categories = ({
  categories,
  selectedFilter,
  onSelectFilter,
}: Props) => {
  return (
    <div className="w-[12%]">
      {categories.map((category, index) => (
        <div
          key={index}
          className="mb-6 relative border border-gray-200 rounded-2xl p-5 shadow"
        >
          <h2 className="font-bold text-lg mb-3 absolute -top-4 bg-black text-white italic px-2 left-0">
            {category.title}
          </h2>

          <div className="flex flex-wrap gap-[0.5rem]">
            {category.items.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className={twMerge(
                  "text-center px-3 py-1 text-sm cursor-pointer transition-colors",
                  selectedFilter === item
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                )}
                onClick={() =>
                  onSelectFilter?.(selectedFilter === item ? null : item)
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
