  // const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";
  const API_KEY = "cb0838cff1d848f86392458c90cbb048";
 const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&width_networks=213`,
     fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAtionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRoamanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
 }

 export default requests;
