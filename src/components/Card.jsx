function Card(props)
{
  const {imageURL, header, leftExp, rightExp} = props;

  console.log(props);

    return (<div className="card">
    <div className="card-image">
      <img src={imageURL} alt="poster" />
    </div>
    <div className="card-content">
      <h5>
        {header}
        </h5>
      <p>
        {leftExp}
        <span className="right">{rightExp}</span>
        </p>
    </div>
  </div>);
}

export {Card}