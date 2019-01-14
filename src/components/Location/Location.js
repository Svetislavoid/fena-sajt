import React from 'react';
import classes from './Location.module.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const location = (props) => (
	<div className={classes.Location}>
            <div className={classes.LocationInfo}>
                <MaterialIcon
                    icon="room"
                    size='100'
                    color={colorPalette.red._800} />
                <div className={classes.Info}>
                    <h2>Gde se nalazimo?</h2>
                    <p>Servis i radionica za tahografe - Fena DOO Leskovac se nalazi na <strong>Vlasotinačkoj petlji.</strong> Gledano iz pravca Leskovca ka Vlasotincu, odmah posle skretanja za Grdelicu tj. kvantašku pijacu.</p>
                    <p><strong>Sa autoputa se stiže za 7 minuta vožnje od novootvorenog isključenja za Leskovac i Vlasotince.</strong></p>
                </div>
            </div>
        <iframe
            title="google_map"
            width="100%"
            height="500"
            src="https://maps.google.com/maps?q=42.9775, 21.9770&t=h&z=14&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
        </iframe>
    </div>

);

export default location;
