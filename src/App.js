import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";

import { Route, Routes } from "react-router-dom";
import Marketplace from "./Pages/Marketplace";
import Auction from "./Pages/Auction";
import Drop from "./Pages/Drop";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/drop" element={<Drop />} />
      </Routes>
    </>
  );
}

export default App;
