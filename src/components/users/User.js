import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import Followers from "../followers/Followers";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {


  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserFollowers, getUserRepos, repos, followers } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserFollowers(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);


  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-Light'>
        Back To Search
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit GitHub Profile
          </a>

          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="grid-2">
        <div>
          <h1> Repositories</h1>
          <Repos repos={repos} />
        </div>
        <div>
          <h1> Followers</h1>
          <Followers followers={followers} />
        </div>
      </div>
    </Fragment>
  );
};

export default User;
