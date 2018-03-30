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

export const openModal = coordinates => ({
  type: 'OPEN_MODAL',
  payload: {
    coordinates,
  },
});

export const closeModal = () => ({
  type: 'OPEN_MODAL',
});
