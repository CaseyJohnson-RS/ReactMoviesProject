import React from "react";

export class Search extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            search: '',
            type: 'all'
        }
    }

    searchMovies = () =>
    {
        this.props.searchMovies(this.state.search, this.state.type);
    }

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.searchMovies();
        } 
    }

    handleFilter = (event) => {
        this.setState( 
            () => ({type: event.target.dataset.type }), // Обновления стейта в виде функции
            () => { this.searchMovies(); }              // После которой можно в виде аргумента передать другую функцию
            );                                          // Которая выполниться после обновления стейта
    };

    render()
    {
        return (<div className="input-field">
            <div>
                <input 
                id="movie-search"
                type="search" 
                className="validate" 
                value={this.state.search}
                onChange={ (event) => this.setState({search: event.target.value}) }
                onKeyDown={this.handleKey}
                />
                <label htmlFor="movie-search">Search</label>
                <button 
                    className="btn search-btn" 
                    onClick={this.searchMovies}
                > 
                    Search
                </button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleFilter}
                        checked={this.state.type === 'series'}
                    />
                    <span>Series Only</span>
                </label>
            </div>
            
        </div>);
    }
}