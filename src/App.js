import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChatPage, DefaultLayout, LoginPage, PostsPage } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import PrivateRoute from "./Routes/privateRoute";
function App() {
  const { currentTheme } = useSelector((store) => store.theme);
  const { user } = useSelector((store) => store.auth);
  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            {user !== null && (
              <Route path="/" element={<Navigate to={"/chats"} />} />
            )}

            {/* <Route path="/login" element={<LoginPage />}></Route> */}
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/chats" element={<ChatPage />}></Route>
              <Route path="/posts" element={<PostsPage />}></Route>
            </Route>
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route
            path="*"
            element={<Navigate to={user === null ? "/login" : `/chats`} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
