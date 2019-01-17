import React, { Component } from 'react';
import './App.css';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Content from './components/Content/Content';
import Picture from './UI/Picture/Picture';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

class App extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <div className="App">
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <Header drawerToggleClicked={this.sideDrawerToggleHandler} />
                <Logo />
                <Content />
                <Picture />
                <Location />
                <Footer />
            </div>
        );
    }
}

export default App;
