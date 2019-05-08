import React from 'react';
import './Grid.css';
import {Link} from 'react-router-dom';

const Grid = ({movies}) =>{
    return (
        movies.map(movie=>{
            const {poster_path,id}=movie;
            // console.log(poster_path);
            let full_poster_url=`https://image.tmdb.org/t/p/w500${poster_path}`;
            return (
                <div key={id} class='track'>
                <Link to={`/${id}`}>
                <img src={full_poster_url} class='track-img' alt='track-pic'/>
                </Link>
                </div>
            )
        })
    )
}

export default Grid;