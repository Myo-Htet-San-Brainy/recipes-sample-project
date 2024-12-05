import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThaiRecipesCarousel = ({ recipes }) => {
  return (
    <div className="carousel gap-6">
      {recipes.map((recipe) => {
        return (
          <Link
            href={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="carousel-item relative "
          >
            <Image
              src={recipe.backgroundImage}
              alt={recipe.foodName}
              className="object-cover rounded-lg"
              width={200}
              height={220}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg transition-colors duration-300 ease-in-out hover:bg-opacity-40"></div>
            {/* Recipe Name */}
            <div className="absolute bottom-2 left-2 text-white z-10">
              <h2 className="font-bold uppercase">{recipe.foodName}</h2>
              <p className="text-sm">
                {recipe.cookingTime} mins | {recipe.noOfServings} servings
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ThaiRecipesCarousel;

// {recipes.map((recipe) => {
//   return (
//     <div
//       key={recipe.id}
//       className="carousel-item"
//   style={{
//     backgroundImage: `url(${recipe.backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "300px",
//     width: "200px",
//   }}
//     >
//       <h1>recipe name</h1>
//     </div>
//   );
// })}
