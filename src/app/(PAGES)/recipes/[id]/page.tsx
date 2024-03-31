"use client";
import { useEffect, useState } from "react";
import { Recipe } from "@/types";
import recipeFirestoreService from "@/services/recipeFirestoreService";
import Image from "next/image";

interface RecipePageProps {
  params: {
    id: string;
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  /**
   * Ensures that the recipe state can hold values of type Recipe or null.
   * This is useful when dealing with asynchronous operations, such as fetching data from a database or an API.
   * You handle different states of data fetching (loading, success, and error) in a clear and consistent manner.
   */
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  /**
   * The ID of a chosen recipe.
   */
  const { id } = params;
  console.log("Chosen recipe ID: ", id);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const foundRecipe = await recipeFirestoreService.findOneRecipe(id);

        /**
         * Check if foundRecipe is not null before setting the state.
         */
        if (foundRecipe) {
          setRecipe(foundRecipe as Recipe);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipe();
  }, [id]);

  return (
    <>
      <h1>{recipe?.title}</h1>

      {recipe?.imageUrl && (
        <Image
          src={recipe?.imageUrl}
          alt={recipe?.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "15%", height: "auto", margin: "1rem 0" }}
        />
      )}

      <div style={{ margin: "1rem 0" }}>
        <h3>Ingredients:</h3>
        {recipe?.ingredients &&
          recipe?.ingredients.map((ingredient) => {
            return (
              <div key={ingredient} style={{ display: "flex", gap: "1rem" }}>
                <ul>
                  <li>
                    <p>{ingredient}</p>
                  </li>
                </ul>
              </div>
            );
          })}
      </div>

      <div style={{ margin: "1rem 0" }}>
        <h3>Directions how to prepare:</h3>
        <p>{recipe?.directions}</p>
      </div>
    </>
  );
}
