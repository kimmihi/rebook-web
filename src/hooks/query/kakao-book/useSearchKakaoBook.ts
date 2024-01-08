import type { KakaoBookRequestParameter } from "types/kakao-book";

import { useQuery } from "react-query";

import searchKakaoBook from "api/kakao-book";

const useSearchKakaoBook = (params: KakaoBookRequestParameter) => {
  const { data, isLoading, isError } = useQuery(
    ["kakao", "book", params],
    () => searchKakaoBook(params),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { data, isLoading, isError };
};

export default useSearchKakaoBook;
