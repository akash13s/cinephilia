import React,{Component} from 'react';
import Logo from '../assets/Logo2.svg';
import './Header.css';
import {Link} from 'react-router-dom';

const Header=()=>{

    return (
        <nav className="navbar navbar-dark bg-dark">
        {/* // <nav class="navbar navbar-inverse navbar-fixed-top"> */}
            <a  className="navbar-brand" href="#">
            <Link to='/'>
                <img src={Logo} style={{width:50,height:35}} className="d-inline-block align-top" alt="header" />
            </Link>
                Cinephilia
            </a>
        </nav>
    )
}

export default Header;