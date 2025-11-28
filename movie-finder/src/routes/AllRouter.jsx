import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNoteFound, Search } from "../pages";


export const AllRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>} />
      
      <Route path="movie/:id" element={<MovieDetails />} />
      
      <Route path="movie/popular" element={<MovieList apiPath="movie/popular" title="popular"/>} />
      
      <Route path="movie/top" element={<MovieList apiPath="movie/top_rated" title="top"/>} />
      
      <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="upcoming"/>} />
      
      <Route path="search" element={<Search apiPath="search/movie" title="upcoming"/>} />
      
      <Route path="*" element={<PageNoteFound />} />
    </Routes>
  );
};




