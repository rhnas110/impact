import { Contact as ContactLayouts } from "../../components/Layouts/Contact";
import { Navbar } from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <ContactLayouts />
      </main>
      <Footer />
    </>
  );
};
