import SEO from "../components/SEO";
import { Home } from "./Home";
import { Services } from "./Services";

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

export { HomePage, ServicesPage };
