import React,{Component} from 'react';
import './Movie.css';
import HeroImage from '../HeroImage/HeroImage.js';
import Cast from '../Cast/Cast.js';
import MovieBar from '../MovieBar/MovieBar.js';
import {API_KEY,IMAGE_BASE_URL,BACKDROP_SIZE, API_URL, POSTER_SIZE} from '../config.js';
import Footer from '../Footer/Footer';

class Movie extends Component{

    state={
        loading:false,
        runtime:'',
        rating:'',
        release_date:'',
        overview:'',
        backdrop_path:null,
        original_title:'',
        actors:[],
        directors:[]
    }

    componentDidMount(){
        this.setState({loading:true});
        const pathArray = window.location.pathname.split('/');
        const movieID = pathArray[1];
        const BASIC_INFO=`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
        const CAST_INFO=`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`;
        this.fetchBasicInfo(BASIC_INFO);
        this.fetchCastInfo(CAST_INFO);
    }

    fetchBasicInfo=(endpoint)=>{
        fetch(endpoint)
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    rating:json.vote_average,
                    runtime:json.runtime,
                    release_date:json.release_date,
                    overview:json.overview,
                    backdrop_path:json.backdrop_path,
                    original_title:json.original_title
                })
                console.log(json);
            })
            .catch(error=>alert(error.message));
    }

    fetchCastInfo=(endpoint)=>{
        fetch(endpoint)
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    actors:json.cast.filter((actor,i)=>i<10),
                    directors:json.crew.filter((member)=>member.job==='Director')
                })
            
            })
            .catch(error=>alert(error.message));
    }

    render(){
        
        return(
            <div>
                <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.backdrop_path}`}
                title={this.state.original_title}
                />
                <MovieBar 
                    directors={this.state.directors}
                    text={this.state.overview}
                    runtime={this.state.runtime} 
                    rating={this.state.rating}
                    release_date={this.state.release_date}
                />
                <Cast
                actors={this.state.actors}
                />
                <Footer/>
            </div>
        )
    }
}

export default Movie;