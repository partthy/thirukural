import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paals from "./components/Paals";
import Athigarams from "./components/Athigarams";
import Kurals from "./components/Kurals";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Paals />} />
          <Route
            path="/athigarams/:paalName/:iyalName"
            element={<Athigarams />}
          />
          <Route path="/kurals/:athigaramName" element={<Kurals />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
