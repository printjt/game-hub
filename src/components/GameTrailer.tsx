import useTrailers from "@/hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";
import React from "react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) return <div>{error.message}</div>;

  const firstTrailer = trailers?.results[0];

  return firstTrailer ? (
    <video
      src={firstTrailer?.data[480]}
      controls
      poster={firstTrailer?.preview}
    />
  ) : null;
};

export default GameTrailer;
