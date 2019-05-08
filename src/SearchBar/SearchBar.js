import React,{Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{

    state={
        value:''
    };

    timeout=null;

    SearchIt=(event)=>{
        this.setState({value:event.target.value});
        clearTimeout(this.timeout);
        this.timeout=setTimeout(()=>{
            this.props.callback(this.state.value);
        },500);
    }

    render(){
        return(
            <div className="box">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search movie here" autoComplete='off' onChange={this.SearchIt} value={this.state.value} />
                </div>
            </div>
        )
    }
}

export default SearchBar;