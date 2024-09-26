import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onSearch(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10 space-y-4">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Audiomack Song URL"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
      >
        Download Song
      </button>
    </form>
  );
};

export default SearchBar;
