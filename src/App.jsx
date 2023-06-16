import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context/context";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
