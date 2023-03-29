import React from "react";

const SingleCart = ({ movie, handleMovie }) => {
  // console.log(movie);
  const { movieName, watchTime, description, poster, imdbRating } = movie;
  return (
    <div className="col">
      <div className="card h-75">
        <img src={poster} className="card-img-top h-50" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movieName}</h5>
          <p className="card-text"> {description} </p>
          <p className="d-flex justify-content-between">
            <span>Watch Time: {watchTime}</span>{" "}
            <span>Rating: {imdbRating}</span>
          </p>
          <button onClick={()=>handleMovie(watchTime)} className="btn btn-danger">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
