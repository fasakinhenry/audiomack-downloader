import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [link, setLink] = useState("");
  const [songData, setSongData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/scrape", { url: link });
      setSongData(response.data);
    } catch (error) {
      console.error("Error fetching song data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Paste Audiomack song link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Get Song
        </button>
      </form>

      {songData && (
        <div className="mt-4">
          <h2>{songData.songTitle}</h2>
          <a href={songData.downloadUrl} className="text-blue-500 underline">
            Download Song
          </a>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
