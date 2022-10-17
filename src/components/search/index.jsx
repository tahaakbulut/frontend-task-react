import React from 'react';
import styles from './search.module.css';

export const Search = ({ placeholder, setSearchKey }) => {
  let timeout = null;

  const handleKeyUp = (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearchKey(e.target.value);
    }, 600);
  };

  return (
    <form className={styles.search_box}>
      <input type="text" placeholder={placeholder} onKeyUp={handleKeyUp} />
      <button type="reset" onClick={() => setSearchKey(null)}></button>
    </form>
  );
};
