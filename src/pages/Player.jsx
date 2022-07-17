import React, { useEffect, useState } from "react";
import { API, key } from "../Requests";
import axios from "axios";
const Player = () => {
  const [movieId, setMovieId] = useState(null);
  useEffect(() => {
    axios.get(`${API}/${movieId}?api_key=${key}&language=en-US`);
  }, []);
  return (
    <div className="text-white">
      <video src={movieId}></video>
    </div>
  );
};

export default Player;
