import React from "react";
import RecipeDetail from "@/components/recipe-details";

const fetchRecipeDet = async (currentId) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${currentId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const RecipeDetails = async ({ params }) => {
  const fetchReciepeDetails = await fetchRecipeDet(params?.details);

  return (
    <div>
      <RecipeDetail recipeDetailItem={fetchReciepeDetails} />
    </div>
  );
};

export default RecipeDetails;
