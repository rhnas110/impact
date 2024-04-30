import "./styles.css";
import { Hero } from "../../components/Layouts/Home/Hero";
import { Services } from "../../components/Layouts/Home/Services";
import { Principles } from "../../components/Layouts/Home/Principles";
import { Explore } from "../../components/Layouts/Home/Explore";
import { Community } from "../../components/Layouts/Home/Community";
import { CardContact } from "../../components/Layouts/Contact/Card";
import { Navbar } from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mb-16">
        <Hero />
      </div>
      <Services />
      <Principles />
      <Explore />
      <Community />
      <CardContact />
      <Footer />
    </>
  );
};
