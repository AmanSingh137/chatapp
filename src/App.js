import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import PrivateRoute from "./Routes/privateRoute";

//containers
const DefaultLayout = React.lazy(() => import("./pages/DefaultLayout"));

//pages
const ChatPage = React.lazy(() => import("./pages/ChatPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const PostsPage = React.lazy(() => import("./pages/PostsPage"));

function App() {
  const { currentTheme } = useSelector((store) => store.theme);
  const { user } = useSelector((store) => store.auth);
  return (
    <Suspense>
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
    </Suspense>
  );
}

export default App;
