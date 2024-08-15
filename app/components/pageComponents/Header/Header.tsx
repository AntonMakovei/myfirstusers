const Header = () => {
  return (
    <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-0">
        MY FIRST USERS
      </h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button className="bg-gray-200 hover:bg-gray-300 transition-colors px-4 py-2 rounded-lg text-sm text-gray-700">
          Get 6 new tips in your inbox every Monday
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-sm font-semibold text-white">
          Yes Please :)
        </button>
      </div>
    </header>
  );
};

export default Header;
