const user1 = "";
const login = async (user) => {
  const userObj = {
    username: user === null ? user1 : user.displayName,
  };
  localStorage.setItem("currentUser", JSON.stringify(userObj));
  return userObj;
};
const logout = async () => {
  localStorage.removeItem("currentUser");
};
const authService = {
  login,
  logout,
};
export default authService;
