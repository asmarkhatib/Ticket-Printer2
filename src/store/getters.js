export default {
  userInfo(state) {
    return state.users.filter((user) => user === state.users[0]);
  },
};
