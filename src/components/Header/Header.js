import React from 'react';
import classes from './Header.module.css';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const header = (props) => (
	<header className={classes.Header}>
        <div className={classes.Content}>
            <div className={classes.Home}>
                <DrawerToggle clicked={props.drawerToggleClicked} />
                <a href="/">Fena</a>
            </div>
            <nav className={classes.Navigation}>
                <NavigationItems />
            </nav>
        </div>
    </header>
);

export default header;
