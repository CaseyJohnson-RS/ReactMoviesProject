function Card(props)
{
  const {Title, Year, Type, Poster} = props;

    return (<div className="card">
    <div className="card-image">
      <img 
        src=
        {
          Poster === 'N/A' ?
            "https://placehold.co/300x400?text=" + Title :
            Poster
        } 
        alt="poster" 
        />
    </div>
    <div className="card-content">
      <h5>
        {Title}
        </h5>
      <p>
        {Year}
        <span className="right">{Type}</span>
        </p>
    </div>
  </div>);
}

export {Card}