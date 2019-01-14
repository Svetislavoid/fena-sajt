import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Logo from './components/Logo/Logo';
import Content from './components/Content/Content';
import Picture from './UI/Picture/Picture';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
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
