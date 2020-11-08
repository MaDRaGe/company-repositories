import {
  COMPANY_REPOS_FETCHED_FAILURE,
  COMPANY_REPOS_FETCHED_SUCCESS,
  COMPANY_REPOS_FETCH_START,
  SELECT_PAGINATION_PAGE,
  IRepository,
  CompanyActionTypes
} from '../types';
import github from '../../api/github';

export const fetchCompanyRepos = (companyName: string) => {
  return (dispatch) => {
    dispatch(companyResosFetchStart())
    github.get(`/orgs/${companyName}/repos`)
      .then((response: any) => {
        console.log(response.data)
        const companyRepos: IRepository[] = response.data.map((repo): IRepository => {
          return {
            name: repo.name,
            url: repo.html_url,
            forkCount: repo.forks,
            watchCount: repo.watchers,
            starCount: repo.stargazers_count
          }
        })
        dispatch(companyReposFetchSuccess(companyRepos))
      })
      .catch(() => {
        dispatch(companyReposFetchFailure())
      })
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