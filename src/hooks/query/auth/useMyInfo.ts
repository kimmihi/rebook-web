import { useQuery } from "react-query";

import { getMyInfo } from "api/auth";

const useMyInfo = () => {
  const { data, isLoading, isError } = useQuery("me", () => getMyInfo());

  return {
    data,
    isLoading,
    isError,
  };
};

export default useMyInfo;
