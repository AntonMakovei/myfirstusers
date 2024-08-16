import { twMerge } from "tailwind-merge";

export const Header = () => {
  return (
    <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[1rem]">
      <h1 className="w-[12%] text-3xl font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-0">
        MY FIRST USERS
      </h1>
      <div className="w-[88%] flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="w-2/5 relative">
          <input
            type="email"
            placeholder="Get 6 new tips in your inbox every Monday"
            className={twMerge(
              "w-full bg-gray-200 transition-colors px-4 py-4 rounded-2xl text-sm text-gray-700",
              "outline-none border border-gray-300 bg-white "
            )}
          />

          <button className="absolute top-1/2 -translate-y-1/2 right-2 bg-black hover:bg-blue-700 transition-colors px-4 py-2 rounded-md text-sm font-semibold text-white">
            Yes Please :)
          </button>
        </div>
      </div>
    </header>
  );
};
