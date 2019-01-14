import React from 'react';
import classes from './Location.module.css';

const location = (props) => (
	<div className={classes.Location}>
        <div className={classes.mapouter}>
            <div className={classes.gmap_canvas}>
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
        </div>
    </div>
);

export default location;
