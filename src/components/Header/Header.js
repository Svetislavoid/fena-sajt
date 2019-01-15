import React from 'react';
import classes from './Header.module.css';

const header = (props) => (
	<div className={classes.Header}>
        <div className={classes.Content}>
            <div className={classes.Home}>
                <a href="/">Fena</a>
            </div>
            <nav className={classes.Navigation}>
                <ul>
                    <li><a href="/">O nama</a></li>
                </ul>
            </nav>
        </div>
    </div>
);

export default header;
