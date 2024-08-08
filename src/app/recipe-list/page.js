import Recipie from "@/components/Recipe";

const fetchingRecipe = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data?.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const Recipe = async () => {
  const fetchRecipe = await fetchingRecipe();
  return (
    <div>
      <Recipie recipes={fetchRecipe} />
    </div>
  );
};

export default Recipe;
