import { OurPrinciples as OurPrinciplesLayouts } from "../../components/Layouts/OurPrinciples";
import { Navbar } from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";

export const OurPrinciples = () => {
  return (
    <>
      <Navbar />
      <main>
        <OurPrinciplesLayouts />
      </main>
      <Footer />
    </>
  );
};
