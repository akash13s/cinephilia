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
                <div key={id} className='thumb'>
                    <Link to={`/${id}`}>
                    <img src={full_poster_url} className='thumb-img' alt='thumb'/>
                    </Link>
                </div>
            )
        })
    )  
}

export default Grid;