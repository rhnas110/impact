import { AnimatePresence } from "./utils/motion";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
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
