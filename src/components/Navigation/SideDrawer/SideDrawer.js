import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import Logo from '../../../assets/fena-logo.svg';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <img src={Logo} alt="Servis Fena logo"/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
                <div className={classes.Contact}>
                    <h3>Kontakt</h3>
                    <p><strong>Tel:</strong> 016 281 314</p>
                    <p><strong>Mob:</strong> 066 5 412 973</p>
                    <p><strong>Adresa:</strong> Dobri Španca 47a, Leskovac</p>
                </div>
            </div>
        </Aux>
    );
}

export default sideDrawer;
