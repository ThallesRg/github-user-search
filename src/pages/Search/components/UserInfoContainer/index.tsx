import ButtonCore from 'core/components/ButtonCore';
import React from 'react';
import './styles.css';

const UserInfoContainer = () => (
    <div className="user-info-container">
        <div className="section-1">
            <img src="https://endeavor.org/content/themes/base-theme/src/images/backgrounds/entrepreneur-fallback-280x280.jpg" alt="Oe"/>
            <div className="button-adjust">
                <ButtonCore text="Ver Perfil"/>
            </div>
        </div>
        <div className="section-2">
            
        </div>
    </div>
);

export default UserInfoContainer;