import type { RegisterReadingBookDTO } from "types/book";
import { useMutation, useQueryClient } from "react-query";

import { registerReadingBook } from "api/book";

const useRegisterReadingBook = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (book: RegisterReadingBookDTO) => {
      return registerReadingBook(book);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries(["reading", "books"]);
    },
  });

  return mutation;
};

export default useRegisterReadingBook;
