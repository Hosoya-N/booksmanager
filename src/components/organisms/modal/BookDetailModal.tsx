import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";

import { Book } from "../../../types/api/book";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  book: Book | undefined;
  isOpen: boolean;
  onClose: () => void;
};

export const BookDetailModal: VFC<Props> = memo(props => {
  const { isOpen, onClose, book } = props;

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(book?.title ?? "");
  }, [book]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>書籍詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={6}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input
                value={title}
              />
            </FormControl>
            <FormControl>
              <FormLabel>著者</FormLabel>
              <Input
                value={"テスト"}
              />
            </FormControl>
            <FormControl>
              <FormLabel>出版社</FormLabel>
              <Input
                type="email"
                value="テスト"              />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
