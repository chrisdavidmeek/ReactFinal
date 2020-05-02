const initState = {
  toggle: false,
  change: false,
  signedIn: false,
  sort: {
    console: { toggle: false, val: [] },
  },
  user: {
    name: "Chris",
    email: "cmeek@meek.com",
  },
  realUser: {
    name: "",
  },
};

const rootReducer = (state = initState, action) => {
  if (action.type === "CHECK_CHANGE") {
    return { ...state, change: !state.change };
  }

  if (action.type === "CHECK_SIGN_IN") {
    return {
      ...state,
      signedIn: action.check,
    };
  }

  if (action.type === "CURRENT_USER") {
    return {
      ...state,
      realUser: {
        name: action.user.displayName,
        email: action.user.email,
        id: action.user.uid,
      },
    };
  }

  if (action.type === "CURRENT_USER") {
    return {
      ...state,
      realUser: {
        name: action.user.displayName,
      },
    };
  }
  return state;
};

export default rootReducer;
