export interface ISearchResponse<T> extends IPageInfo {
  content: T[];
  sort: {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
  };
}

export interface IPageInfo {
  pageable: IPageable;
  totalElements: number;
  totalPages: number;
  size: 5 | 10 | 20 | 50;
  number: number;
  page: number;
  numberOfElements: number;
  empty: boolean;
}

export interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
