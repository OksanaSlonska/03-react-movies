import axios from "axios";
import type { TMDBSearchResponse } from "../types/movie.ts";

const BASE_URL = "https://api.themoviedb.org/3";

async function fetchMovies(query: string): Promise<TMDBSearchResponse> {
  const response = await axios.get<TMDBSearchResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        language: "en-US",
        include_adult: false,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    }
  );

  return response.data;
}

export default fetchMovies;
