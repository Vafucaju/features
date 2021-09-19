export const initialState = {
  user: "",
  activeChat: {},
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload.user };
      break;
    case "setActiveChat":
      return { ...state, activeChat: action.payload.activeChat };
      break;

    default:
      return state;
      break;
  }
};
