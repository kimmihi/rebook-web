export interface KakaoBookRequestParameter {
  query: string;
  page: number;
  size: number;
}

export interface KakaoBookResponseData {
  meta: KakaoBookMetaData;
  documents: Array<KakaoBook>;
}

export interface KakaoBookMetaData {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
}

export interface KakaoBook {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: Date;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}
