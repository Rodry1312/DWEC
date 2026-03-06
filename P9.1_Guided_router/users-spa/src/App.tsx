import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;