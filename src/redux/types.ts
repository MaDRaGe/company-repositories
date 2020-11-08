export const FETCH_COMPANY_REPOS = 'FETCH_COMPANY_REPOS';
export const COMPANY_REPOS_FETCHED_SUCCESS = 'COMPANY_REPOS_FETCHED_SUCCESS';
export const COMPANY_REPOS_FETCHED_FAILURE = 'COMPANY_REPOS_FETCHED_FAILURE';
export const COMPANY_REPOS_FETCH_START = 'COMPANY_REPOS_FETCH_START';
export const SELECT_PAGINATION_PAGE = 'SELECT_PAGINATION_PAGE';
export const REPOS_ON_PAGE_COUNT = 5;


export interface IRepository {
  name: string;
  url: string;
  forkCount: number;
  watchCount: number;
  starCount: number;
}

export interface Store {
  company: string | null;
  companyReposList: IRepository[] | null;
  isReposListLoading: boolean;
  paginationCurrentPage: number;
  paginationPagesCount: number;
  reposOnPage: IRepository[] | null;
  isReposListLoaded: boolean | null;
}

interface SelectPaginationPageAction {
  type: typeof SELECT_PAGINATION_PAGE,
  payload: number
}


interface CompanyReposFetchedSuccessAction {
  type: typeof COMPANY_REPOS_FETCHED_SUCCESS,
  payload: IRepository[]
}

interface CompanyReposFetchedFailureAction {
  type: typeof COMPANY_REPOS_FETCHED_FAILURE
}

interface CompanyReposFetchStartAction {
  type: typeof COMPANY_REPOS_FETCH_START
}

export type CompanyActionTypes = 
  CompanyReposFetchedSuccessAction | 
  CompanyReposFetchedFailureAction |
  CompanyReposFetchStartAction |
  SelectPaginationPageAction;
