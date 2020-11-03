const reducer = (state, action) => {
  console.log("ICI ACTION :", action);
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("user", action.payload.data.user.id);
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    case "LOAD_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

module.exports = reducer;
