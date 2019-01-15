import React from 'react';
import classes from './GoogleMap.module.css';

const googleMap = (props) => (
    <iframe
        className={classes.GoogleMap}
        title="google_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14090.703626052426!2d21.968154137463404!3d42.97727567569027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47559d4e7565429d%3A0x34e2e83e62795252!2sFena+doo+-+Servis+i+radionica+za+tahografe!5e1!3m2!1sen!2srs!4v1547562729891"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen>
    </iframe>
);

export default googleMap;
