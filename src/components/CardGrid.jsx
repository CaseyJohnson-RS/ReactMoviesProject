import {Card} from './Card';

function CardGrid(props)
{
    // {imageURL, header, leftExp, rightExp}

    return (<div className="card-grid">
        
        <Card 
            imageURL="https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            header="Matrix"
            leftExp="movie"
            rightExp="2021"
        />
        <Card 
            imageURL="https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            header="Matrix"
            leftExp="movie"
            rightExp="2021"
        />
        <Card 
            imageURL="https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            header="Matrix"
            leftExp="movie"
            rightExp="2021"
        />
        <Card 
            imageURL="https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
            header="Matrix"
            leftExp="movie"
            rightExp="2021"
        />
        

    </div>);
}

export {CardGrid}