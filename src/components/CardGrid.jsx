import {Card} from './Card';

function CardGrid(props)
{
    const {movies} = props;

    return (<div className="card-grid">
        
        {
            movies.map((post) => (
                <Card key={post.imdbID} {...post}/>
            ))
        }
    </div>);
}

export {CardGrid}