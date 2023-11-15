import React from "react";

export class Search extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            search: '',
            filter: 'series'
        }
    }

    searchMovies = (event) => {
        if (event.key === "Enter") {
            this.props.cb(this.state.search, this.state.filter);
        }
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]:
                event.target.value
        });

    }

    render()
    {
        return (<div className="input-field">
            <input 
            id="movie-search"
            type="search" 
            className="validate" 
            value={this.state.search}
            onChange={ (event) => this.setState({search: event.target.value}) }
            onKeyDown={this.searchMovies}
            />
            <label htmlFor="movie-search">Search</label>
            <button className="btn search-btn" onClick={() => this.props.cb(this.state.search) }>Search</button>
            
        </div>);
    }
}