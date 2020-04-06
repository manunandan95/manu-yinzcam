import React, { Fragment, useContext } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

import GithubContext from '../../context/github/githubContext'


const Home = () => {

  const githubContext = useContext(GithubContext);

  const { users } = githubContext;
  if (users.length <= 0) {
    githubContext.allUsers();

  }

  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  )
}


export default Home
