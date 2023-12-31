import React from 'react';
import { Preloader } from '../components/Preloader';    
import { CardGrid } from '../components/CardGrid';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            movies: [], 
            totalResults: 0,
            response: "",
            error: ""
        }
    }

    searchMovies = (searchRequest, type) => 
    {
        if (searchRequest.length === 0)
        {
            this.setState({response: '', movies: []});
            return;
        }

        let request = 'https://www.omdbapi.com/?apikey=' + API_KEY;
        request += `&s=${searchRequest}`;
        request += type === 'all' ? '' : `&type=${type}`;

        this.setState({response: "Loading"});

        fetch(request)
            .then( response => response.json())
            .then( json => 
                this.setState({
                    movies: json.Search, 
                    totalResults: +json.totalResults,
                    response: json.Response,
                    error: json.Error
                })
            );
    }

    render() {
        const {movies, response, error} = this.state;

        return (<main className="content">
            <Search searchMovies={this.searchMovies} />
            {  
                response === 'Loading' ? (
                    <Preloader />
                ) : (
                    response === 'False' ? (
                        <h4>Something went wrong...</h4>
                    ) : (
                        (movies && movies.length) ? (
                            <CardGrid movies={movies} />
                        ) : (
                            <h4>Enter your request...</h4>
                        )
                    )
                )
            }

        </main>)
    }
}