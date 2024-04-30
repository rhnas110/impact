import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Services } from "./pages/Services";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
