import { all, takeLatest } from 'redux-saga/effects';
import { addGitUserRequest } from './gitUsers';

export default function* rootSaga() {
  return yield all([
    takeLatest('ADD_GITUSER_REQUEST', addGitUserRequest),
  ]);
}
