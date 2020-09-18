import React from 'react';
import { Component } from 'react';
import logo from './images/logo-tp.png';
import client from "./images/pic1.jpg";
import './App.css';
import { Navbar, Nav, Card } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar className="navBarStyle">
                <Navbar.Brand href="#home">
                    <img
						src={logo}
						width="80"
						height="40"
						className="nav-logo d-inline-block align-top ml-2"
						alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="nav-items ml-auto">
                    <Nav.Link href="/" className="navLinks">Home</Nav.Link>
                    <Nav.Link href="/pr" className="navLinks">PR</Nav.Link>
                    <Nav.Link href="/cmn" className="navLinks">CMN</Nav.Link>
                    <Nav.Link href="/exploration" className="navLinks">Exploration</Nav.Link>
                    <Nav.Link href="/valuations" className="navLinks">Valuations</Nav.Link>
                    <Nav.Link href="/foundations" className="navLinks">Foundations</Nav.Link>
                    <Nav.Link href="/development" className="navLinks">Development</Nav.Link>
                    <Nav.Link href="/fd" className="navLinks">FD</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;