export const initialState = {
  online: false,
  notes: [],
  theme: "",
};

export const NoteReducer = (state, action) => {
  switch (action.type) {
    case "setOnline":
      return { ...state, online: action.payload.online };
      break;
    case "setNotes":
      return { ...state, notes: action.payload.notes };
      break;
    case "setTheme":
      return { ...state, theme: action.payload.theme };
      break;

    default:
      return state;
      break;
  }
};
