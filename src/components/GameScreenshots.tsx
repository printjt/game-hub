import useScreenshots from "@/hooks/useScreenshots";
import { SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {screenshots?.results.map((screenshot) => (
        <img key={screenshot.id} src={screenshot.image} alt="game screenshot" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
