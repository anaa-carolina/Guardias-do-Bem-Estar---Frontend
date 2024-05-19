import React from 'react';
import './preLoading.css';
import Escudo from '../../../img/logo/EscudoComNome.png';

const Preloader = () => {
    return (
        <div className="loading-box">
            <div className="loading">
                <img className="logo" src={Escudo} alt="Logo" />
            </div>
        </div>
    );
};

export default Preloader;
