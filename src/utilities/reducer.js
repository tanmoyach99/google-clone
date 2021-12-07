export const initialState = {
  term: null,
};

export const actionType = {
  SEARCH_TERM: "SEARCH_TERM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TERM":
      return { ...state, term: action.term };
    default:
      return state;
  }
};

export default reducer;
