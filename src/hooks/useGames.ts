import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platfrom }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id }, // pass the genre as a query string to rawg api
    },
    [selectedGenre?.id]
  );
  return { games: data, error, isLoading };
};

export default useGames;
