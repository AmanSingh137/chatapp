import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChatPage, DefaultLayout, LoginPage, PostsPage } from "./pages";
function App() {
  return (
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
  );
}

export default App;
