import React from 'react';
import classes from './Footer.module.css';
import Logo from '../../assets/fena-logo.svg';

const footer = (props) => (
	<div className={classes.Footer}>
        <div className="content">
            <div className={classes.Content}>
                <div className={classes.Contact}>
                    <h3>Pozovite i zakažite</h3>
                    <p>Fena DOO - Servis i radionica za tahografe</p>
                    <p>ul. Dobri Španca 47a, 16000 Leskovac</p><br />
                    <p>tel: +38116281314</p>
                    <p>mob: +381665412973</p>
                    <p>mejl: fenaleskovac@gmail.com</p><br />
                    <p>Radno vreme:</p>
                    <p>pon - pet: 9-17h</p>
                    <p>sub: 9-12h</p>
                </div>
                <div className={classes.Resources}>
                    <h3>Resursi</h3>
                    <a href='http://www.abs.gov.rs/%D1%81%D1%80/tahografi/propisi' target='_blank' rel="noopener noreferrer">Spisak propisa koji se tiču tahografa</a>
                    <a href='https://www.paragraf.rs/obrasci/5253_ID.pdf' target='_blank' rel="noopener noreferrer">Potvrda o aktivnostima vozača</a>
                    <img src={Logo} alt="Servis Fena logo" />
                </div>
            </div>
            <div className={classes.Copyright}>&copy; 2019 Fena DOO Leskovac</div>
        </div>
    </div>
);

export default footer;
