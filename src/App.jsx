import { AnimatePresence } from "./utils/motion";
import { Route, Routes } from "react-router-dom";

import { HomePage, ServicesPage } from "./pages";
import useLenis from "./hooks/useLenis";

function App() {
  useLenis();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
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
