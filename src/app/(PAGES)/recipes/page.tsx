"use client";
import { useAuth } from "@/context/AuthContext";
import { ChangeEvent, useEffect, useState } from "react";
import { gridContainer, gridItem } from "./RecipesPage.css";
import { LoadingSpinner } from "@/reactIcons";
import { formatDateToYYYYMMDD, lookupCategoryLabel } from "@/utils/helpers";
import { Recipe } from "@/types";
import recipeFirestoreService from "@/services/recipeFirestoreService";
import RecipeItem from "@/components/recipes/RecipeItem";
import RecipeSearchBar from "@/components/recipes/RecipeSearchBar";

export default function RecipesPage() {
  // "Extract the user property from the result of useAuth(), and if the result is null, set user to null."
  const { user } = useAuth() || { user: null };
  //  Explicitly define the type of recipes.
  // Otherwise "Property 'x' does not exist on type 'never'" would occur.
  // It suggests that TypeScript is unable to infer the type of the recipes state variable correctly.
  // The issue is likely related to the asynchronous nature of the functions inside the useEffect.
  // When TypeScript tries to infer the type of recipes, it may be inferring it as never because it cannot determine the type during compilation.
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [recipeOrder, setRecipeOrder] = useState("publishDateDesc");

  useEffect(() => {
    setIsLoading(true);

    async function fetchAllRecipes() {
      let today = new Date();
      let currentDay = formatDateToYYYYMMDD(today);
      console.log(currentDay);

      if (categoryFilter) {
        try {
          const fetchedRecipesList =
            await recipeFirestoreService.findAllRecipesByCategory(
              categoryFilter,
              currentDay,
            );
          setRecipes(fetchedRecipesList);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      } else if (recipeOrder === "publishDateAsc") {
        try {
          const fetchedRecipesList =
            await recipeFirestoreService.findAllRecipesByPublishDateAsc(
              currentDay,
            );
          setRecipes(fetchedRecipesList);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        try {
          const fetchedRecipesList =
            await recipeFirestoreService.findAllRecipesByPublishDateDesc(
              currentDay,
            );
          setRecipes(fetchedRecipesList);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchAllRecipes();
  }, [categoryFilter, recipeOrder]);

  return (
    <>
      <h1>Published Recipes</h1>
      <RecipeSearchBar
        categoryFilter={categoryFilter}
        onCategoryFilterChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setCategoryFilter(e.target.value)
        }
        recipeOrder={recipeOrder}
        onRecipeOrderChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setRecipeOrder(e.target.value)
        }
      />

      <div className={gridContainer}>
        {isLoading && <LoadingSpinner />}
        {!isLoading && recipes && recipes.length === 0 && (
          <h3>No recipes published yet.</h3>
        )}
        {!isLoading &&
          recipes &&
          recipes.length > 0 &&
          recipes.map((recipe) => {
            return <RecipeItem recipe={recipe} key={recipe.id} />;
          })}
      </div>
    </>
  );
}
