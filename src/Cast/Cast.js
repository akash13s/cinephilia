import React from 'react';
import './Cast.css';

const Cast=(props)=>{
    return (
        <div className='card-group'>
            {
                props.actors.map(actor=>{
                    const {id,character,name,profile_path}=actor;
                    const poster_url=`https://image.tmdb.org/t/p/w500${profile_path}`;
                    return (
                        <div class="card">
                            <img class="card-img-top" src={poster_url} alt="Card image cap" />
                            <div class="card-body">
                            <h5 class="card-title" style={{fontSize:18}}>{name}</h5>
                            <p class="card-text" style={{fontSize:15}}>As {character}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cast;