import { Category } from "@/interfaces/common";

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
