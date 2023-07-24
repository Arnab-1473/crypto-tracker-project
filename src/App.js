import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Common/Footer";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/Dashboard";
import WatchListPage from "./pages/WatchList";
import ComparePage from "./pages/Compare";
import CoinPage from "./pages/Coin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/coin/:id" element={<CoinPage />}></Route>
          <Route path="/compare" element={<ComparePage  />}></Route>
          <Route path="/watchlist" element={<WatchListPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
