import { memo, useCallback, useEffect, VFC } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

import { UserCard } from "../../organisms/user/UserCard";
import { useAllBooks } from "../../../hooks/useAllBooks";
import { BookDetailModal } from "../../organisms/modal/BookDetailModal";
import { useSelectBook } from "../../../hooks/useSelectBook";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getBooks, loading, books } = useAllBooks();
  const { onSelectBook, selectedBook } = useSelectBook();

  useEffect(() => getBooks(), [getBooks]);

  const onClickBook = useCallback(
    (isbn: number) => {
      onSelectBook({ isbn, books, onOpen });
    },
    [books, onSelectBook, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner color="teal.200" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {books.map(obj => (
            <WrapItem key={obj.isbn} mx="auto">
              <UserCard
                isbn={obj.isbn}
                imageUrl={obj.imageUrl}
                title={obj.title}
                author={"テスト著者"}
                onClick={onClickBook}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <BookDetailModal
        isOpen={isOpen}
        onClose={onClose}
        book={selectedBook}
      />
    </>
  );
});
