import React, { Fragment, useState } from 'react';
import UserInfoContainer from './components/UserInfoContainer';
import './styles.css';
import { makeRequest } from 'core/utils/request';
import { GithubResponse } from 'core/types/GithubResponse';
import ButtonCore from 'core/components/ButtonCore';
import ImageLoader from './components/ImageLoader';
import InfoLoader from './components/InfoLoader';

const Search = () => {

    const [githubResponse, setGithubResponse ] = useState<GithubResponse>();
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setVisible(false);
        setIsLoading(true);
        makeRequest({ url: `/${name}`})
            .then(response => setGithubResponse(response.data))
            .finally(() => {
                setVisible(true);
                setIsLoading(false);
            });
        
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
                        onChange={handleOnChange} 
                        className="input-config" 
                        type="text" 
                        placeholder="Usuário Github"
                    />
                    <ButtonCore text="Encontrar"/>
                </form>
            </div>
            <div className="user-main-container">
                {isLoading ? (
                    <div className="user-loader">
                        <div className="left-loader"><ImageLoader /></div>
                        <div className="right-loader"><InfoLoader /></div>
                    </div>) : (visible && 
                        <UserInfoContainer 
                            userUrl={name} 
                            imgUrl={githubResponse?.avatar_url ?? "No data"} 
                            company={githubResponse?.company ??"No data" } 
                            followers={githubResponse?.followers ?? 999} 
                            following={githubResponse?.following ?? 999} 
                            location={githubResponse?.location ?? "No data"} 
                            memberSince={githubResponse?.created_at ?? "00/00/00"} 
                            publicRepositories={githubResponse?.public_repos ?? 999} 
                            website={githubResponse?.blog ?? "No data"}
                        />) }
            </div>
        </Fragment>
    );
}

export default Search;