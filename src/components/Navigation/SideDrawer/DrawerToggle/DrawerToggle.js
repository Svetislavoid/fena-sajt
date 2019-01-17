import React from 'react';
import classes from './DrawerToggle.module.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const drawerToggle = (props) => (
    <div className={classes.Icon} onClick={props.clicked}>
        <MaterialIcon
            icon="menu"
            size='medium'
            color={colorPalette.red._800} />
    </div>
);

export default drawerToggle;
