const initialState = {
  initialRegion: {
    latitude: -27.2177659,
    longitude: -49.6451598,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031,
  },
  users: [],
  visibility: false,
};

export default function gitUsers(state = initialState, action) {
  switch (action.type) {
    case 'ADD_GITUSER_REQUEST':
      return state;
    case 'ADD_GITUSER_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    case 'ADD_GITUSER_ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        coordinate: action.payload.coordinate,
        visibility: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        visibility: false,
      };
    default:
      return {
        ...state,
      };
  }
}
