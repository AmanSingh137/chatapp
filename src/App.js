import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChatPage, DefaultLayout, LoginPage, PostsPage } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
function App() {
  const { currentTheme } = useSelector((store) => store.theme);
  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/chats"} />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/chats" element={<ChatPage />}></Route>
            <Route path="/posts" element={<PostsPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
