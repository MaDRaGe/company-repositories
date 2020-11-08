import {
  COMPANY_REPOS_FETCHED_SUCCESS,
  COMPANY_REPOS_FETCHED_FAILURE,
  COMPANY_REPOS_FETCH_START,
  REPOS_ON_PAGE_COUNT,
  SELECT_PAGINATION_PAGE,
  CompanyActionTypes,
  Store
} from '../types';

const initialState: Store = {
  company: null,
  companyReposList: null,
  isReposListLoading: false,
  isReposListLoaded: null,
  paginationCurrentPage: 1,
  paginationPagesCount: 1,
  reposOnPage: null,
}

export default (state=initialState, action: CompanyActionTypes): Store => {
  switch (action.type) {
    case COMPANY_REPOS_FETCHED_SUCCESS:
      return { 
        ...state, 
        companyReposList: action.payload,
        paginationPagesCount: Math.ceil(action.payload.length / REPOS_ON_PAGE_COUNT),
        paginationCurrentPage: 1,
        reposOnPage: action.payload.slice(0, REPOS_ON_PAGE_COUNT),
        isReposListLoading: false,
        isReposListLoaded: true,
      }

    case COMPANY_REPOS_FETCH_START:
      return { 
        ...state, 
        isReposListLoading: true,
        isReposListLoaded: null 
      }

    case SELECT_PAGINATION_PAGE:
      return {
        ...state,
        paginationCurrentPage: action.payload,
        reposOnPage: state.companyReposList.slice(
          (action.payload - 1) * REPOS_ON_PAGE_COUNT, 
          (action.payload - 1) * REPOS_ON_PAGE_COUNT + REPOS_ON_PAGE_COUNT
        )
      }

    case COMPANY_REPOS_FETCHED_FAILURE:
      return {
        ...state,
        isReposListLoading: false,
        isReposListLoaded: false,
      }

    default:
      return state;
  }
}