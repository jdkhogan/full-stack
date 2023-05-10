// This is a copy of the project built in Codecademy, without the accompanying css or html

const tmdbKey = "ee751a8599b9508daf25a5d5b0729bc6";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = "?api_key=" + tmdbKey;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
  try {
    let response = await fetch(urlToFetch, {
      method: "GET"
    });

    if (response.ok) {
      let jsonResponse = await response.json();
      let genres = await jsonResponse["genres"];
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";

  let requestParams = "?api_key=" + tmdbKey;
  requestParams += "?with_genres=" + selectedGenre;

  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

  try {
    let response = await fetch(urlToFetch, {
      method: "GET"
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let movies = await jsonResponse["results"];
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/{${movieId}}`;

  const requestParams = "?api_key=" + tmdbKey;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

  try {
    let response = await fetch(urlToFetch, {
      method: "GET"
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      let movieInfo = await jsonResponse["results"];
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
  const movies = await getMovies();
  const randomMovie = getRandomMovie(await movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
