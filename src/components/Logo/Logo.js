import React from 'react';
import classes from './Logo.module.css';
import LogoSenka from '../../assets/fena-logo-senka.svg';
import FenaBG from '../../assets/fena-bg.svg';

const logo = (props) => (
	<div className={classes.Logo}>
        <h1>Servis i radionica za tahografe</h1>
        <img src={LogoSenka} alt='Logo Fena' />
    </div>
);

export default logo;
