import React, { useState } from 'react';
import './GoogleHomepage.css'; // Import CSS file for styling

function GoogleHomepage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search functionality
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="google-homepage">
      <form onSubmit={handleSearch}>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="google-logo"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Google Search
        </button>
      </form>
    </div>
  );
}

export default GoogleHomepage;
