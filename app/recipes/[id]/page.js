import { recipes } from "@/app/lib/data";
import Link from "next/link";
import React from "react";

function findItemById(array, id) {
  return array.find((item) => item.id === Number(id));
}

const page = ({ params }) => {
  const { id } = params;
  const recipe = findItemById(recipes, id);

  if (!recipe) {
    return <div className="text-center text-xl">Recipe not found.</div>;
  }

  const { backgroundImage, foodName, cookingTime, noOfServings } = recipe;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-lg">
        <img
          src={backgroundImage}
          alt={foodName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            {foodName}
          </h1>
          <div className="text-lg text-gray-600">
            <p>
              <span className="font-semibold">Cooking Time:</span> {cookingTime}{" "}
              minutes
            </p>
            <p>
              <span className="font-semibold">Servings:</span> {noOfServings}
            </p>
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        Go Back
      </Link>
    </div>
  );
};

export default page;
