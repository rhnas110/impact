import { Community as CommunityLayouts } from "../../components/Layouts/Community";
import { Navbar } from "../../components/Layouts/Navbar";
import { Footer } from "../../components/Layouts/Footer";

export const Community = () => {
  return (
    <>
      <Navbar />
      <main>
        <CommunityLayouts />
      </main>
      <Footer />
    </>
  );
};
