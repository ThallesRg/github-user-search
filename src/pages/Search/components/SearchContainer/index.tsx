import ButtonCore from 'core/components/ButtonCore';
import React from 'react';
import './styles.css';

const SearchContainer = () => (
    <div className="search-container">
        <h1 className="main-text">Encontre um perfil Github</h1>
        <input className="input-config" type="text" placeholder="Usuário Github"/>
        <ButtonCore text="Encontrar"/>
    </div>
);

export default SearchContainer;