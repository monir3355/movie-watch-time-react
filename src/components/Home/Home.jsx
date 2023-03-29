import React, { useEffect, useState } from "react";
import SideWatchTime from "../SideWatchTime/SideWatchTime";
import SingleCart from "../SingleCart/SingleCart";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [newWTime, setNewWTime] = useState('');
  const handleMovie = (time) =>{
    const previousTime = JSON.parse(localStorage.getItem("watch-time"));
    if(previousTime){
      const sum = previousTime + time;
      localStorage.setItem("watch-time", JSON.stringify(sum));
      setNewWTime(sum);
    }
    else {
      localStorage.setItem("watch-time", JSON.stringify(time));
      setNewWTime(time);
    }
  }
  // console.log(newWTime);
  useEffect(() => {
    const displayMovies = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setMovies(data);
    };
    displayMovies();
  }, []);

  return (
    <div className="row">
      <div className="col-md-8 col-lg-9 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies.map((movie) => (
          <SingleCart movie={movie} key={movie.id} handleMovie={handleMovie}></SingleCart>
        ))}
      </div>
      <div className="col-md-4 col-lg-3 py-5">
        <div className="sticky-top">
          <SideWatchTime newWTime={newWTime}></SideWatchTime>
        </div>
      </div>
    </div>
  );
};

export default Home;
