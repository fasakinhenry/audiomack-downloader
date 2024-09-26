import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (url) => {
    console.log("URL submitted: ", url);
    // You can later call the backend from here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue mb-8">Audiomack Song Downloader</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
