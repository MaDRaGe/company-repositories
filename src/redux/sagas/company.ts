import { takeLatest, put, call } from 'redux-saga/effects';
import { IRepository } from '../types';
import { 
  companyReposFetchSuccess, 
  companyResosFetchStart,
  companyReposFetchFailure
} from '../actions/actions'
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

export default function* watchCompany() {
  yield takeLatest(FETCH_COMPANY_REPOS, fetchCompanyReposAsync)
}
