import React from 'react';
import classes from './Logo.module.css';
import LogoSenka from '../../assets/fena-logo-senka.svg';
import SVG from 'react-inlinesvg';

const logo = (props) => (
	<div className={classes.LogoFull}>
        <h1>Servis i radionica za tahografe</h1>
        <SVG className={classes.Logo} src={LogoSenka} >
            <img src={LogoSenka} alt='Servis Fena logo' />
        </SVG>
    </div>
);

export default logo;
