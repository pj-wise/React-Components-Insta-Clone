// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className='search-bar-wrapper'>
      <div className='image-wrapper'>
        <i className='fa fa-instagram fa-lg' />
        InstaClone
      </div>
      <form className='search-form'>
        <input type='text' placeholder='Search' />
      </form>
      <div className='social-wrapper'>
        <div className='social'>
          <i className='fa fa-compass fa-lg' />
        </div>
        <div className='social'>
          <i className='fa fa-heart fa-lg' />
        </div>
        <div className='social'>
          <i className='fa fa-user-circle fa-lg' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
