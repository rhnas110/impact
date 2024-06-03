import { Home as HomeLayouts } from "../../components/Layouts/Home";
import { Navbar } from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeLayouts />
      </main>
      <Footer />
    </>
  );
};
