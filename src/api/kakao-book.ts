import type {
  KakaoBookRequestParameter,
  KakaoBookResponseData,
} from "types/kakao-book";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_KAKAO_BOOK_API;
const API_KEY = process.env.REACT_APP_KAKAO_BOOK_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `KakaoAK ${API_KEY}` },
});

const searchKakaoBook = async (params: KakaoBookRequestParameter) => {
  const response = await axiosInstance.get<KakaoBookResponseData>("", {
    params,
  });

  return response.data;
};

export default searchKakaoBook;
