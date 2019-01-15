import React from 'react';
import classes from './Content.module.css';
import Dtco3 from '../../assets/dtco3.svg';
import Mtco1324 from '../../assets/1324mtco.svg';

const content = (props) => (
        <div className={classes.Content}>
            <div className={classes.Row1}>
                <img className={classes.Dtco3} src={Dtco3} alt="Dtco3"/>
                <div className={classes.Tahografi}>
                    <h2>Tahografi</h2>
                    <p>Tahograf je uređaj koji beleži radne aktivnosti vozača, brzinu vožnje i pređeni put. Danas su u upotrebi analogni (oni koji beleže na taho-listićima) i digitalni (koji beleže informacije na smart/taho karticama). Najbitnija funkcija tahografa je da omogući i natera vozače da voze odmorni, jer je vreme vožnje zakonski ograničeno, a sa tahografom se može pratiti da li se vozač toga pridržava. <strong>Analogni tahografi se baždare na godinu dana, a digitalni na dve godine.</strong></p>
                </div>
            </div>

            <div className={classes.Row2}>
                <img className={classes.Mtco1324} src={Mtco1324} alt="Mtco1324"/>
                <div className={classes.ONama}>
                    <h2>O nama</h2>
                    <p>Preko dvadeset godina samostalnog rada i iskustva sa tahografima. Servis i radionica za tahografe Fena DOO otkloniće sve Vaše probleme u vezi sa tahografima.</p>
                    <ul>
                        <li>baždarenje tahografa</li>
                        <li>opravka i ugradnja tahografa</li>
                        <li>skidanje i čuvanje podataka sa kartica vozača i tahografa</li>
                    </ul>
                    <p>Tu smo da rešimo svaku nadoumicu ili za konsultaciju.</p>
                </div>
            </div>
        </div>
);

export default content;
