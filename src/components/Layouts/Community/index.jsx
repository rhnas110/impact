import { useState } from "react";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { Contact } from "./components/Contact";
export const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleClick = (name) => {
    setSelectedCategory(name);
    if (name) setShowAll(false);
  };
  return (
    <>
      <Hero selectedCategory={selectedCategory} handleClick={handleClick} />
      <Card
        selectedCategory={selectedCategory}
        showAll={showAll}
        setShowAll={setShowAll}
      />
      <Contact />
    </>
  );
};
