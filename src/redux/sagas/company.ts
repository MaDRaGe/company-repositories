import { takeLatest, put, call } from 'redux-saga/effects';
import {
  COMPANY_REPOS_FETCHED_FAILURE,
  COMPANY_REPOS_FETCHED_SUCCESS,
  COMPANY_REPOS_FETCH_START,
  SELECT_PAGINATION_PAGE,
  IRepository,
  CompanyActionTypes
} from '../types';
import github from '../../api/github';
import {
  FETCH_COMPANY_REPOS
} from '../types';

function* fetchCompanyReposAsync(action) {
  try {
    yield put(companyResosFetchStart());
    const response = yield call((companyName: string) => {
      return github.get(`/orgs/${companyName}/repos`)
    }, action.payload);
    const companyRepos: IRepository[] = response.data.map((repo): IRepository => {
      return {
        name: repo.name,
        url: repo.html_url,
        forkCount: repo.forks,
        watchCount: repo.watchers,
        starCount: repo.stargazers_count
      }
    })
    yield put(companyReposFetchSuccess(companyRepos));

  } catch (e) {
    yield put(companyReposFetchFailure());
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

export const fetchCompanyRepos = (companyName) => {
  return {
    type: FETCH_COMPANY_REPOS,
    payload: companyName
  }
}

export default function* watchCompany() {
  yield takeLatest(FETCH_COMPANY_REPOS, fetchCompanyReposAsync)
}
