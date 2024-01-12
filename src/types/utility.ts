export interface PaginationParams {
  page: number;
  size: number;
}

export interface PaginatedResponse<T> {
  data: Array<T>;
  page: number;
  size: number;
  total: number;
  totalPages: number;
}
