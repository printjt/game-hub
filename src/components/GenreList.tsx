import useGenres from "@/hooks/useGenres";
import { type Genre } from "@/entities/Genre";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  const { gameQuery, setGenreId } = useGameQueryStore();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <List.Root listStyleType={"none"}>
        <Heading fontSize={"2xl"} marginBottom={3}>
          Genres
        </Heading>
        {genres?.results?.map((genre: Genre) => (
          <List.Item key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              />
              <Link
                fontSize={"lg"}
                onClick={() => setGenreId(genre.id)}
                fontWeight={
                  genre.id === gameQuery.genreId ? "extrabold" : "normal"
                }
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
