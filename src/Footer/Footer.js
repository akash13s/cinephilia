import React from 'react';
import './Footer.css' 

const Footer=()=>{

    return (
        <div class="jumbotron jumbotron-fluid" style={{marginBottom:0}}>
            <div class="container">
                 <div class="row">
                    <div class="col-sm-6">
                        <h3>About Cinephilia</h3>
                        <p style={{fontSize:20}}>Built with ReactJs, this website displays a list of popular movies. It also allows you to search any movie and displays information regarding the same.</p>
                        <p style={{fontSize:20}} >Made with <i class="fas fa-heart"> by Akash Shrivastva</i></p>
                    </div>
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-4">
                        <h3>Connect with me!</h3>
                        <a href="https://www.facebook.com/akash.shrivastva" target="_blank"><i class="fab fa-facebook fa-3x mar" ></i></a>
                        <a href="https://www.instagram.com/shrivastva_akash/" target="_blank"><i class="fab fa-instagram fa-3x mar"></i></a>
                        <a href="https://www.linkedin.com/in/akash-shrivastva-746354164" target="_blank"><i class="fab fa-linkedin fa-3x mar"></i></a>
                        <a href="https://github.com/akash13s"><i class="fab fa-github fa-3x mar" target="_blank"></i></a>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Footer;
