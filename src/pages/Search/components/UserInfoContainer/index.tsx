import ButtonCore from 'core/components/ButtonCore';
import React from 'react';
import './styles.css';

type Props = {
    imgUrl: string;
    publicRepositories: number;
    followers: number;
    following: number;
    company?: string;
    website: string;
    location: string;
    memberSince: string;
    userUrl: string;
}

const UserInfoContainer = ({ company, followers, following, location, memberSince, publicRepositories, website, imgUrl, userUrl }: Props) => (
    <div className="user-info-container">
        <div className="section-1">
            <img src={imgUrl} alt="github user" className="img-container"/>
            <div className="button-adjust">
                <a href={"https://github.com/" + userUrl} target="_blank" rel="noreferrer">
                 <ButtonCore text="Ver Perfil"/>
                </a>
            </div>
        </div>
        <div className="section-2">
            <div className="top-info">
                <ul>
                    <li>Repositórios públicos: {publicRepositories}</li>
                    <li>Seguidores: {followers}</li>
                    <li>Seguindo: {following}</li>
                </ul>
            </div>
            <div className="bottom-info">
                <h4>Informações </h4>
                <ul>
                    <li>
                        <h5><b>Empresa:</b> {company}</h5>
                    </li>
                    <li>
                        <h5><b>Website/Blog:</b> {website}</h5>
                    </li>
                    <li>
                        <h5><b>Localidade:</b> {location}</h5>
                    </li>
                    <li>
                        <h5><b>Membro desde:</b> {memberSince}</h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default UserInfoContainer;