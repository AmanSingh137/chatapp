import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import PrivateRoute from "./Routes/privateRoute";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

//containers
const DefaultLayout = React.lazy(() => import("./pages/DefaultLayout"));

//pages
const ChatPage = React.lazy(() => import("./pages/ChatPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const PostsPage = React.lazy(() => import("./pages/PostsPage"));

function App() {
  const { currentTheme } = useSelector((store) => store.theme);
  // const { user } = useSelector((store) => store.auth);
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/" element={<PrivateRoute />}>
              {user !== null && (
                <Route path="/" element={<Navigate to={"/chats"} />} />
              )} */}

            {/* <Route path="/login" element={<LoginPage />}></Route> */}
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/chats" element={<ChatPage />}></Route>
              <Route path="/posts" element={<PostsPage />}></Route>
            </Route>
            {/* </Route> */}

            <Route path="/login" element={<LoginPage />} />
            <Navigate to={user ? "/chats" : "/login"} />
            {/* <Route
              path="/"
              element={<Navigate to={user ? "/chats" : "/login"} />}
            /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
