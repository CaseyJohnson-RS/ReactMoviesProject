import React from 'react';
import { Preloader } from '../components/Preloader';    
import { CardGrid } from '../components/CardGrid';
import { Search } from '../components/Search';


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

    searchMovies = (searchRequest, filter) => 
    {
        let request = 'http://www.omdbapi.com/?apikey=97e428bb';
        request += `&s=${searchRequest}`;
        request += `&type=${filter}`;

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
            <Search cb={this.searchMovies} />
            {  
                response === 'Loading' ? (
                    <Preloader />
                ) : (
                    response === 'False' ? (
                        <h4>{error}</h4>
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