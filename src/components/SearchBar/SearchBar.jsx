import { useState } from "react";
import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";

function SearchBar({ onSearch }) {
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchItem);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.appName}>
      </div>
      <div className={styles.searchBarContainer}>
        <form className={styles.searchBarForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            <span>Search</span>
          </button>
          <input
            type="text"
            className={styles.searchBarInput}
            placeholder="Search for an image..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;