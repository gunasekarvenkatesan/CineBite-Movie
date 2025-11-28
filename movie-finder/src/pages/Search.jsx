import Card from "../components/Card";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const {data:movies} = useFetch(apiPath, queryTerm);
  
  return (
     <main>

      <section>
        <p className="text-3xl text-gray-800">
          {movies.length === 0 ? `No Result Found for ( ${queryTerm} )` : `Result for ${queryTerm}`}
        </p>
      </section>
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {
          movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}

      </section>
    </main>
  )
}

export default Search