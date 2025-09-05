import axios from "axios";
import type { Movie } from "../types/movie";

interface TMDBSearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

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
