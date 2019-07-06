import React,{Component} from 'react';
import './Movie.css';
import HeroImage from '../HeroImage/HeroImage.js';
import Cast from '../Cast/Cast.js';
import MovieBar from '../MovieBar/MovieBar.js';
import {API_KEY,IMAGE_BASE_URL,BACKDROP_SIZE, API_URL, POSTER_SIZE} from '../config.js';
import Footer from '../Footer/Footer';
import ResGrid from '../ResGrid/ResGrid.js';

class Movie extends Component{

    state={
        loading:false,
        loadingSimilar:false,
        runtime:'',
        rating:'',
        release_date:'',
        overview:'',
        backdrop_path:null,
        original_title:'',
        actors:[],
        directors:[],
        videos:[],
        similarMovies:[]
    }

    componentDidMount(){
        this.setState({loading:true});
        const pathArray = window.location.pathname.split('/');
        const movieID = pathArray[1];
        console.log(movieID);
        const BASIC_INFO=`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
        const CAST_INFO=`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`;
        const VIDEOS=`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`;
        const SIMILAR_MOVIES=`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`
        this.fetchBasicInfo(BASIC_INFO);
        this.fetchVideos(VIDEOS);
        this.fetchCastInfo(CAST_INFO);
        this.fetchSimilarMovies(SIMILAR_MOVIES);
    }

    componentWillReceiveProps(){
        this.setState({loading:true});
        const pathArray = window.location.pathname.split('/');
        const movieID = pathArray[1];
        console.log(movieID);
        const BASIC_INFO=`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`;
        const CAST_INFO=`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`;
        const VIDEOS=`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`;
        const SIMILAR_MOVIES=`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`
        this.fetchBasicInfo(BASIC_INFO);
        this.fetchVideos(VIDEOS);
        this.fetchCastInfo(CAST_INFO);
        this.fetchSimilarMovies(SIMILAR_MOVIES);
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
                // console.log(json);
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

    fetchVideos=(endpoint)=>{
        fetch(endpoint)
        .then(response=>response.json())
        .then(json=>{
            this.setState({
               videos:json.results[0]
            })
            // console.log(this.state.videos);
        })
        .catch(error=>alert(error.message));
    }

    fetchSimilarMovies=(endpoint)=>{
        fetch(endpoint)
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    loadingSimilar:true,
                    similarMovies:json.results.filter((movie,i)=>i<10)
                })
                // console.log(this.state.similarMovies);
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
                    trailer={this.state.videos.key}
                />
                <Cast
                actors={this.state.actors}
                />
                <br/>
                <h2 className='state-header' >Similar Movies</h2>
                <ResGrid movies={this.state.similarMovies}
                         loadingSimilar={this.state.loadingSimilar}
                         callback={this.componentDidMount}
                 />
                <Footer/>
            </div>
        )
    }
}

export default Movie;
