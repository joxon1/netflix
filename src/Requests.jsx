export const key = "d38f203dcd78d5a070cf36b0a9a053bc";
export const API = "https://api.themoviedb.org/3/movie/";
const requests = {
  reuqestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestMovieId: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${key}&language=en-US`,
};
export default requests;
