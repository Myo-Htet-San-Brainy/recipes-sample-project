import React from "react";
import ThaiRecipesCarousel from "./ui/ThaiRecipesCarousel";
import { recipes } from "./lib/data";

const page = () => {
  return (
    <div
      className=" py-8 px-14"
      style={{
        backgroundImage: "url(/images/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section Title */}
      <div className="text-red-500 text-2xl mb-4">
        <h1 className=" uppercase">Recommended</h1>
        <h1 className="italic">Recipes</h1>
      </div>
      {/* Recipes Carousel */}
      <ThaiRecipesCarousel recipes={recipes} />
    </div>
  );
};

export default page;
