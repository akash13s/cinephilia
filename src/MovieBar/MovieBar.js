import React from 'react';
import './MovieBar.css';

const MovieBar=(props)=>{
    // console.log(props.rating);
    let h=(props.runtime)/60;
    const hrs=parseInt(h,10); 
    const min=(props.runtime)%60;
    const directors=props.directors;
    
    return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-7" >
                    <h4>Overview</h4>
                    <p style={{fontSize:20}}>{props.text}</p>
                </div>
                <div class="col-sm-5">
                    <i class="fas fa-clock fa-lg"> Runtime: {hrs}Hr(s) {min}min </i>
                    <br/>
                    <br/>
                    <i class="fas fa-film fa-lg"> Director(s) : {
                        directors.map((director,i)=>i+1+') '+director.name+' ')
                    }</i>
                    <br/>
                    <br/>
                    <i class="fas fa-table fa-lg">Release Date: {props.release_date}</i>
                    <br/>
                    <br/>
                    <i class="fas fa-star fa-lg">Rating: {props.rating}/10</i>
                </div>
            </div>  
        </div>
        </div>
    )
}

export default MovieBar;