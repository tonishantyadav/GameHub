import useData from "./useData";

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

const useGames = () => {
  const { data, error, isLoading } = useData<Game>("/games");
  return { games: data, error, isLoading };
};

export default useGames;
