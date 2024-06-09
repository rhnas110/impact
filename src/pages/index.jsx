import SEO from "../components/SEO";
import { NotFound } from "./404";
import { Home } from "./Home";
import { Services } from "./Services";
import { About } from "./About";
import { OurPrinciples } from "./OurPrinciples";
import { Contact } from "./Contact";

// custom title
function Page({ children }) {
  return <>{children}</>;
}

function HomePage() {
  return (
    <Page>
      <SEO />
      <Home />
    </Page>
  );
}
function ServicesPage() {
  return (
    <Page>
      <SEO
        title="Services - impact."
        description="Discover the wide range of services offered by impact., the ultimate destination for Genshin Impact enthusiasts! From community discussions to in-depth guides, we've got everything you need."
      />
      <Services />
    </Page>
  );
}
function AboutPage() {
  return (
    <Page>
      <SEO
        title="About - impact."
        description="Learn more about impact., the vibrant community hub for Genshin Impact players. Discover our mission, vision, and the passionate team behind our community-driven platform."
      />
      <About />
    </Page>
  );
}
function OurPrinciplesPage() {
  return (
    <Page>
      <SEO
        title="Our Principles - impact."
        description="Discover the guiding principles of impact., fostering sustainability, collaboration, inclusivity, and fun for the Genshin Impact community."
      />
      <OurPrinciples />
    </Page>
  );
}
function ContactPage() {
  return (
    <Page>
      <SEO title="Contact - impact." />
      <Contact />
    </Page>
  );
}

function NotFoundPage() {
  return (
    <Page>
      <SEO title="404 - Page Not Found" description="404 - Page Not Found" />
      <NotFound />
    </Page>
  );
}

export {
  HomePage,
  ServicesPage,
  AboutPage,
  OurPrinciplesPage,
  ContactPage,
  NotFoundPage,
};
