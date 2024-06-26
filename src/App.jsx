import { Route, Routes } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import { AnimatePresence } from "./utils/motion";

import {
  HomePage,
  ServicesPage,
  AboutPage,
  OurPrinciplesPage,
  CommunityPage,
  ContactPage,
  NotFoundPage,
} from "./pages";

function App() {
  useLenis();
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-principles" element={<OurPrinciplesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/helloworld"
          element={
            <main>
              <h1 className="h1">Hello World!!</h1>
            </main>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
