import type { ForwardedRef, KeyboardEvent } from "react";
import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";

import useSearchKakaoBook from "hooks/query/kakao-book/useSearchKakaoBook";
import useRegisterReadingBook from "hooks/query/book/useRegisterReadingBook";

import Button from "components/Button";
import Dialog from "components/Dialog";
import DialogActions from "components/Dialog/DialogActions";
import DialogContent from "components/Dialog/DialogContent";
import TextField from "components/TextField";
import SearchResultList from "./SearchResultList";
import { KakaoBook } from "types/kakao-book";

interface Props {
  onClose: () => void;
}

const SearchBookDialog = (
  { onClose }: Props,
  ref: ForwardedRef<HTMLDialogElement>
) => {
  const [query, setQuery] = useState("");

  const { register, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: "",
    },
  });

  const { data, isLoading, isError } = useSearchKakaoBook({
    query,
    page: 1,
    size: 10,
  });

  const { mutate: registerBook } = useRegisterReadingBook();

  const handleChangeSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }

    handleSubmit(handleLocalSubmit);
  };
  const handleLocalSubmit = ({ title }: { title: string }) => {
    setQuery(title);
  };

  const handleRegisterBook = (book: KakaoBook) => {
    const [author] = book.authors;
    const [translator] = book.translators;

    const readingBook = {
      ...book,
      author,
      translator: translator ?? "",
      authors: undefined,
      translators: undefined,
      status: undefined,
      url: undefined,
    };
    registerBook(readingBook, {
      onSuccess: () => {
        handleClose();
      },
    });
  };

  const handleClose = () => {
    reset();
    setQuery("");
    onClose();
  };

  return (
    <Dialog ref={ref} size="md">
      <DialogContent>
        <form onSubmit={handleSubmit(handleLocalSubmit)}>
          <TextField
            label="책 검색"
            placeholder="책 제목을 입력해주세요."
            {...register("title")}
            onKeyUp={handleChangeSearch}
          />
        </form>
        <SearchResultList
          list={data?.documents}
          isLoading={isLoading}
          isError={isError}
          onRegisterBook={handleRegisterBook}
        />
      </DialogContent>
      <DialogActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" onClick={handleClose}>
          닫기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default forwardRef(SearchBookDialog);
