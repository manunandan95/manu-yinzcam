import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext'



const Search = () => {

  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');


  const [hidden, setHidden] = useState(false);

  const onChange = e => {
    e.preventDefault();
    setText(e.target.value)
    // if(text!==""){
    // githubContext.searchUsers(text);



  }



  const onSubmit = e => {
    e.preventDefault();
    githubContext.searchUsers(text);
    setHidden(true)


    //githubContext.allUsers();
  };
  const onClear = e => {
    setHidden(false)
    setText('')
    githubContext.clearUsers();
    //githubContext.allUsers();
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search'
          value={text}
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>

      {(githubContext.users.length > 0 && hidden) ? (
        <button className='btn btn-light btn-block' onClick={onClear}
        >
          Clear
        </button>
      ) : null}
      <h1 align="center">{!hidden ? 'All Users' : 'Search Results'}</h1>
    </div>
  );
};



export default Search;
