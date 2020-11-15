import {
  COMPANY_REPOS_FETCHED_FAILURE,
  COMPANY_REPOS_FETCHED_SUCCESS,
  COMPANY_REPOS_FETCH_START,
  SELECT_PAGINATION_PAGE,
  FETCH_COMPANY_REPOS,
  IRepository,
  CompanyActionTypes
} from '../types';

export const fetchCompanyRepos = (companyName) => {
  return {
    type: FETCH_COMPANY_REPOS,
    payload: companyName
  }
}

export const companyResosFetchStart = (): CompanyActionTypes => {
  return {
    type: COMPANY_REPOS_FETCH_START
  }
}

export const companyReposFetchSuccess = (companyReposList: IRepository[]): CompanyActionTypes => {
  return {
    type: COMPANY_REPOS_FETCHED_SUCCESS,
    payload: companyReposList
  }
}

export const companyReposFetchFailure = (): CompanyActionTypes  => {
  return {
    type: COMPANY_REPOS_FETCHED_FAILURE
  }
}

export const selectPaginationPage = (page): CompanyActionTypes => {
  return {
    type: SELECT_PAGINATION_PAGE,
    payload: page
  }
}