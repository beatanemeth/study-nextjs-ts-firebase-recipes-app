"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { serverTimestamp } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "@/components/route/ProtectedRoute";
import recipeFirestoreService from "@/services/recipeFirestoreService";
import recipeStorageService from "@/services/recipeStorageService";
import RecipeForm from "@/components/recipes/RecipeForm";

export default function CreateRecipePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Choose one...");
  const [publishDate, setPublishDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [directions, setDirections] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientName, setIngredientName] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  // "Extract the user property from the result of useAuth(), and if the result is null, set user to null."
  const { user } = useAuth() || { user: null };
  const router = useRouter();

  async function handleAddNewRecipeSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const generatedFileId = uuidv4();
      console.log(generatedFileId);

      let imageLink = "";

      if (imageFile) {
        imageLink = await recipeStorageService.uploadFile(
          imageFile,
          `recipe/${generatedFileId}`,
        );
      }

      const newRecipe = {
        author: user?.uid,
        title,
        category,
        publishDate,
        directions,
        ingredients,
        imageUrl: imageLink,
        timeStamp: serverTimestamp(),
      };

      await recipeFirestoreService.createRecipe(newRecipe);
      router.push("/recipes");
    } catch (error) {
      console.error(error);
    }
  }

  function handleChooseImage(file?: File | undefined) {
    file && setImageFile(file || undefined);
  }

  function handleAddIngredient(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setIngredients([...ingredients, ingredientName]);
    setIngredientName("");
  }

  function handleDeleteIngredient(ingredientName: string) {
    const remainingIngredients = ingredients.filter((ingredient) => {
      return ingredient !== ingredientName;
    });

    setIngredients(remainingIngredients);
  }

  function handleRecipeCancel() {
    router.push("/recipes");
  }

  return (
    <ProtectedRoute>
      <h1>Create Recipe</h1>
      <p>{user?.email}</p>

      <RecipeForm
        onRecipeFormSubmit={handleAddNewRecipeSubmit}
        title={title}
        onTitleChange={(
          e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >,
        ) => setTitle(e.target.value)}
        category={category}
        onCategoryChange={(
          e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >,
        ) => setCategory(e.target.value)}
        publishDate={publishDate}
        onPublishDateChange={(
          e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >,
        ) => setPublishDate(e.target.value)}
        ingredients={ingredients}
        onDeleteIngredient={handleDeleteIngredient}
        onChooseImage={(file?: File) => handleChooseImage(file)}
        ingredientName={ingredientName}
        onIngredientNameChange={(
          e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >,
        ) => setIngredientName(e.target.value)}
        onAddIngredient={(e: MouseEvent<HTMLButtonElement>) =>
          handleAddIngredient(e)
        }
        directions={directions}
        onDirectionsChange={(
          e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
          >,
        ) => setDirections(e.target.value)}
        onRecipeCancel={handleRecipeCancel}
      />
    </ProtectedRoute>
  );
}
