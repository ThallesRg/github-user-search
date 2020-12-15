import React, { Fragment, useState } from 'react';
import UserInfoContainer from './components/UserInfoContainer';
import './styles.css';
import { makeRequest } from 'core/utils/request';
import { GithubResponse } from 'core/types/GithubResponse';
import ButtonCore from 'core/components/ButtonCore';

const Search = () => {

    const [githubResponse, setGithubResponse ] = useState<GithubResponse>();
    const [name, setName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest({ url: `/${name}`})
            .then(response => setGithubResponse(response.data))
        
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }


    return (
        <Fragment>
            <div className="search-container">
                <h1 className="main-text">Encontre um perfil Github</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        onChange={handleOnChange} 
                        className="input-config" 
                        type="text" 
                        placeholder="Usuário Github"
                    />
                    <ButtonCore text="Encontrar"/>
                </form>
            </div>
            <div className="user-main-container">
                <UserInfoContainer userUrl={name} imgUrl={githubResponse?.avatar_url ?? "loading..."} company={githubResponse?.company ??"loading..." } followers={githubResponse?.followers ?? 999} following={githubResponse?.following ?? 999} location={githubResponse?.location ?? "loading..."} memberSince={githubResponse?.created_at ?? "00/00/00"} publicRepositories={githubResponse?.public_repos ?? 999} website={githubResponse?.blog ?? "loading.com.br"}/>
            </div>
        </Fragment>
    );
}

export default Search;