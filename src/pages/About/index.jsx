import { About as AboutLayouts } from "../../components/Layouts/About";
import { Navbar } from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";

export const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutLayouts />
      </main>
      <Footer />
    </>
  );
};
