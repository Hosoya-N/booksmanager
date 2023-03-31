import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  isbn: number;
  imageUrl: string;
  title: string;
  author: string;
  onClick: (isbn: number) => void;
};

export const BookCard: VFC<Props> = memo(props => {
  const { isbn, imageUrl, title, author, onClick } = props;

  return (
    <Box
      w="260px"
      h="340px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(isbn)}
    >
      <Stack textAlign="center">
        <Image
          src={imageUrl}
          alt={title}
          m="auto"
        />
        <Text fontSize="md" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray">
          {author}
        </Text>
      </Stack>
    </Box>
  );
});
