import { SearchOutlined } from "@material-ui/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Search.module.scss";
import { useDebounce } from "use-debounce";
import { useStateContext } from "../context/StateContext";

const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState("Elon Musk");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={styles.searchInputWrapper}>
      <input
        value={text}
        type="text"
        className={styles.searchInput}
        placeholder="I want to search for..."
        onChange={(e) => setText(e.target.value)}
      />
      <Link href="/search">
        <div className={styles.searchButton}>
          <SearchOutlined fontSize="large" />
        </div>
      </Link>
    </div>
  );
};

export default Search;
