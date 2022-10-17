import React, { useEffect, useState } from 'react';
import './App.css';
import { Search } from './components/search';

function App() {
  const [searchKey, setSearchKey] = useState(null);

  useEffect(() => {
    console.log(searchKey);
  }, [searchKey]);

  return (
    <div className="App">
      <img src="https://tarfin.com/img/logo.svg" alt="Tarfin Logo" />
      <Search placeholder={'Search me'} setSearchKey={setSearchKey} />
    </div>
  );
}

export default App;
