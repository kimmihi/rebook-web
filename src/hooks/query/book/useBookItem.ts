import { useQuery } from "react-query";

import { getBookItem } from "api/book";

const useBookItem = (bookId: number) => {
  const { data, isLoading, isError } = useQuery(["books", bookId], () =>
    getBookItem(bookId)
  );

  return { data, isLoading, isError };
};

export default useBookItem;
