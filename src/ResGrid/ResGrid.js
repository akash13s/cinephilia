import React from 'react';
import './ResGrid.css';
import {Link} from 'react-router-dom';

const ResGrid = ({movies}) =>{
    return (
<div class="row">
  <div class="col-md-12">
    <div id="mdb-lightbox-ui"></div>
    <div class="mdb-lightbox">

        {
            movies.map(movie=>{
                const {poster_path,id}=movie;
                // console.log(poster_path);
                let full_poster_url=`https://image.tmdb.org/t/p/w500${poster_path}`;
                return (
                    <figure className="col-md-2 make-responsive" key={id}>
                        <Link to={`/${id}`}>
                        <img src={full_poster_url}  alt='thumb' class="img-fluid make-rounded-img"/>
                        </Link>
                    </figure>
                )
            })
        }

    </div>

  </div>
</div>
    )  
}

export default ResGrid;