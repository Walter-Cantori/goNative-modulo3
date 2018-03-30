export const addGitUserRequest = user => ({
  type: 'ADD_GITUSER_REQUEST',
  payload: {
    user,
  },
});

export const addGitUserSuccess = user => ({
  type: 'ADD_GITUSER_SUCCESS',
  payload: {
    user,
  },
});

export const addGitUserError = error => ({
  type: 'ADD_GITUSER_ERROR',
  payload: {
    error,
  },
});

export const openModal = coordinate => ({
  type: 'OPEN_MODAL',
  payload: {
    coordinate,
  },
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});
