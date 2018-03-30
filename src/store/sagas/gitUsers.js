import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { addGitUserError, addGitUserSuccess } from '../actions/gitUsers';

export function* addGitUserRequest(action) {
  try {
    const response = yield call(api.get, `/${action.payload.user.username}`);
    response.data.coordinate = action.payload.user.coordinate;
    yield put(addGitUserSuccess(response.data));
  } catch (err) {
    yield put(addGitUserError('Usuario nao encontrado'));
  }
}
