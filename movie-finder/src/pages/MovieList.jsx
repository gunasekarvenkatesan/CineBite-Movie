
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { useEffect } from "react";

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(()=>{
      document.title=`${title} / FlowBite`;
    });

  return (
    <main>
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};

export default MovieList;
