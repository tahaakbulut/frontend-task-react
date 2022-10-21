import React from 'react';
import styles from './index.module.css';

export const Search = ({ placeholder, setSearchKey, delay = 500 }) => {
  let timeout = null;

  const handleKeyUp = (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSearchKey(e.target.value || null);
    }, delay);
  };

  return (
    <form className={styles.search_box}>
      <input type="text" placeholder={placeholder} onKeyUp={handleKeyUp} />
      <button type="reset" onClick={() => setSearchKey(null)}></button>
    </form>
  );
};
