import { useQuery } from "react-query";

import { getReadingBookList } from "api/book";

const useReadingBookList = () => {
  const { data, isLoading, isError } = useQuery(["reading", "books"], () =>
    getReadingBookList()
  );

  return {
    data,
    isLoading,
    isError,
  };
};

export default useReadingBookList;
