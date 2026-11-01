import axios from "axios";

const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { movieInstance };

// sample test
//https://api.themoviedb.org/3/discover/movie?api_key=db14a3c20cdfa9c6d70676384960557f&with_genres=99