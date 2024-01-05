import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
