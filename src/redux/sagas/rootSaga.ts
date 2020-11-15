import { all } from 'redux-saga/effects';
import watchCompany from './company';

export default function* rootSaga() {
  yield all([
    watchCompany()
  ])
}