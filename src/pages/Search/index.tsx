import React, { Fragment } from 'react';
import SearchContainer from './components/SearchContainer';
import UserInfoContainer from './components/UserInfoContainer';
import './styles.css';

const Search = () => (
    <Fragment>
        <SearchContainer />
        <div className="user-main-container">
            <UserInfoContainer />
        </div>
    </Fragment>
);

export default Search;