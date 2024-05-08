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
        <Route
          path="/helloworld"
          element={
            <main>
              <h1 className="h1">Hello World!!</h1>
            </main>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
