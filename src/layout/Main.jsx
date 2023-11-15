import React from 'react';
import {CardGrid} from '../components/CardGrid';


export class Main extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            Search: [], 
            totalResults: 0
        }
    }

    componentDidMount()
    {
        let request = 'http://www.omdbapi.com/?apikey=97e428bb&s=start';

        fetch(request)
            .then( response => response.json())
            .then( json => this.setState({Search: json.Search, totalResults: +json.totalResults}) );
    }

    render() {
        const {Search} = this.state;

        return (<main className="content">
            {
                Search ?
                (<CardGrid movies={this.state.Search} />) :
                (<h3>Loading...</h3>)
            }

        </main>)
    }
}