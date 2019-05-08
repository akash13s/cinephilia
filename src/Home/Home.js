import React,{Component} from 'react';
import './Home.css';
import HeroImage from '../HeroImage/HeroImage.js';
import {API_KEY,API_URL,POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../config.js';
import SearchBar from '../SearchBar/SearchBar';
import Grid from '../Grid/Grid';
import ResGrid from '../ResGrid/ResGrid';
import Footer from '../Footer/Footer';

class Home extends Component{

    state={
        movies:[],
        heroImage:null,
        query:'',
        currentPage:0,
        header:'Popular Movies',
        loading:false
    };

    componentDidMount(){
        this.setState({loading:true});
        const SEARCH_URL=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(SEARCH_URL);
    }
 
    loadMoreItems=()=>{
        let endpoint='';
        this.setState({loading:true,currentPage:this.state.currentPage+1});
        if (this.state.query===''){
            endpoint=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage+1}&include_adult=false`;
        }
        else{
            endpoint=`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=${this.state.currentPage+1}&include_adult=false`;
        }
        this.fetchItems(endpoint);
    }

    searchItems=(query)=>{
        let endpoint='';
        this.setState({movies:[],loading:true,query,currentPage:0,header:'Search Results'});
        // console.log(this.state.query);
        if (query===''){
            endpoint=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage+1}&include_adult=false`;
        }
        else{
            endpoint=`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${this.state.currentPage+1}&include_adult=false`;
        }
        if (query===''){
            this.setState({header:'Popular Movies'});
        }
        this.fetchItems(endpoint);
    }

    fetchItems=(endpoint)=>{
        fetch(endpoint)
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    movies:[...this.state.movies,...json.results],
                    heroImage:this.state.heroImage || json.results[0],
                    currentPage:json.page
                })
            
            })
            .catch(error=>alert(error.message));
    }

    render(){
        return (
            <div>
                {this.state.heroImage ?
                <div>
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
                        text={this.state.heroImage.overview}
                        title={this.state.heroImage.original_title}
                    />
                    <SearchBar callback={this.searchItems}/>
                </div>
                :null
                }
                <h2 className='state-header' >{this.state.header}</h2>
                {/* <Grid movies={this.state.movies}/> */}
                <ResGrid movies={this.state.movies}/>
                <button type="button" class="btn btn-outline-info center-it" onClick={this.loadMoreItems}>Load More</button>
                <div class='introduce-margin-top'>
                    <Footer/>
                </div>
            </div>
            
        )
    }
}

export default Home;