import React from 'react';
import { Component } from 'react';
import logo from './images/harexilogo.jpg';
import client from "./images/pic1.jpg";
import NavigationBar from "./NavigationBar";
import './App.css';

class CMN extends Component {
    render() {
        return (
            <div >
                <NavigationBar/>
                <h1>CMN</h1>
            </div>
        );
    }
}

export default CMN;
