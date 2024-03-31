"use client";
import { useAuth } from "@/context/AuthContext";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import { editFormContainer } from "@/app/(PAGES)/(PROTECTED PAGES)/create/CreateRecipePage.css";
import { serverTimestamp } from "firebase/database";
import recipeFirestoreService from "@/services/recipeFirestoreService";
import recipeStorageService from "@/services/recipeStorageService";
import { v4 as uuidv4 } from "uuid";
import RecipeForm from "../RecipeForm";

type EditRecipeProps = {
  recipeID: string | null;
  onClose: () => void;
};

export default function EditRecipe({ recipeID, onClose }: EditRecipeProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Choose one...");
  const [publishDate, setPublishDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [directions, setDirections] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientName, setIngredientName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const { user } = useAuth() || { user: null };

  useEffect(() => {
    async function fetchRecipe() {
      try {
        /**
         * By using recipeID || '', you are providing an empty string ('') as the default value if recipeID is null.
         */
        const foundRecipe = await recipeFirestoreService.findOneRecipe(
          recipeID || "",
        );
        setTitle(foundRecipe?.title);
        setCategory(foundRecipe?.category);
        setPublishDate(foundRecipe?.publishDate);
        setDirections(foundRecipe?.directions);
        setIngredients(foundRecipe?.ingredients);
        setImageUrl(foundRecipe?.imageUrl);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipe();
  }, [user, recipeID]);

  async function handleUpdateRecipeSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      let imageLink = "";

      if (imageFile) {
        const generatedFileId = uuidv4();
        console.log(generatedFileId);

        imageLink = await recipeStorageService.uploadFile(
          imageFile,
          `recipe/${generatedFileId}`,
        );
      }

      const updatedRecipe = {
        author: user?.uid,
        title,
        category,
        publishDate,
        directions,
        ingredients,
        imageUrl: imageFile ? imageLink : imageUrl,
        timeStamp: serverTimestamp(),
      };

      await recipeFirestoreService.updateRecipe(recipeID || "", updatedRecipe);

      onClose();
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

  async function handleDeleteImage() {
    try {
      // Delete the image from Firebase Storage
      if (imageUrl) {
        await recipeStorageService.deleteFile(imageUrl);
      }

      // Remove the image URL from Firestore document
      const updatedRecipe = {
        title,
        category,
        publishDate,
        ingredients,
        directions,
        imageUrl: "", // Set the imageUrl field to an empty string
      };

      await recipeFirestoreService.updateRecipe(recipeID || "", updatedRecipe);
    } catch (error) {
      console.error(error);
    }
    setImageUrl("");
  }

  function handleRecipeCancel() {
    onClose();
  }

  return (
    <div className={editFormContainer}>
      <h1>Update Recipe</h1>
      <p>{user?.email}</p>

      <RecipeForm
        onRecipeFormSubmit={handleUpdateRecipeSubmit}
        title={title}
        onTitleChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        category={category}
        onCategoryChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value)
        }
        publishDate={publishDate}
        onPublishDateChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPublishDate(e.target.value)
        }
        ingredients={ingredients}
        onDeleteIngredient={handleDeleteIngredient}
        onChooseImage={(file?: File) => handleChooseImage(file)}
        ingredientName={ingredientName}
        onIngredientNameChange={(e: ChangeEvent<HTMLInputElement>) =>
          setIngredientName(e.target.value)
        }
        onAddIngredient={(e: MouseEvent<HTMLButtonElement>) =>
          handleAddIngredient(e)
        }
        directions={directions}
        onDirectionsChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDirections(e.target.value)
        }
        onRecipeCancel={handleRecipeCancel}
        isUpdatingRecipe
        imageUrl={imageUrl}
        onDeleteImage={handleDeleteImage}
      />
    </div>
  );
}
