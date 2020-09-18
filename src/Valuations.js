import React from 'react';
import { Component } from 'react';
import logo from './images/harexilogo.jpg';
import client from "./images/pic1.jpg";
import NavigationBar from "./NavigationBar";
import './App.css';

class Valuations extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <h1>Valuations</h1>
            </div>
        );
    }
}

export default Valuations;
