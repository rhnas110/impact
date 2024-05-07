import { AnimatePresence } from "./utils/motion";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();
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
