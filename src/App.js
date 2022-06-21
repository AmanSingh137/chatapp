import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, LoginPage, PostsPage } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
