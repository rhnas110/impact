import { Helmet } from "react-helmet-async";

const titleDefault = "impact. - Genshin Impact Community Hub";
const descriptionDefault =
  "Impact is the ultimate community hub for Genshin Impact enthusiasts. Join us to share tips, tricks, and experiences, and connect with fellow players. Explore the world of Teyvat like never before!";
export default function SEO({ title, description }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title || titleDefault}</title>
      <meta name="description" content={description || descriptionDefault} />
      {/* End standard metadata tags */}
    </Helmet>
  );
}
