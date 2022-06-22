const login = async (username) => {
  const userObj = {
    username: username,
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
