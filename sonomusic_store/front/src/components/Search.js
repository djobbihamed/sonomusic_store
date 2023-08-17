import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = ({ stal }) => {
  const [term, setTerm] = useState('');
  const history = useNavigate(); 

  const handleChange = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
  };

  const handleSearch = () => {
    stal(term); 
    history.push('/'); 
  };

  return (
    <div className="searchForm">
      <input
        type="text"
        placeholder="looking for ..."
        className="search"
        onChange={(e) => handleChange(e)}
      />
      <button className="searchButton" onClick={handleSearch}>
        &#x1F50E;
      </button>
    </div>
  );
};

export default Search;
