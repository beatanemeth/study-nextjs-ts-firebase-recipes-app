"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { gridContainer } from "../../recipes/RecipesPage.css";
import { LoadingSpinner } from "@/reactIcons";
import Modal from "react-modal";
import ModalWrapper from "@/components/shared/ModalWrapper";
import {
  modalContent,
  modalOverlay,
} from "@/components/shared/ModalWrapper/Modal.css";
import EditRecipe from "@/components/recipes/EditRecipe";
import { Recipe } from "@/types";
import ProtectedRoute from "@/components/route/ProtectedRoute";
import RecipeItem from "@/components/recipes/RecipeItem";
import recipeFirestoreService from "@/services/recipeFirestoreService";
import recipeStorageService from "@/services/recipeStorageService";

export default function ProfilePage() {
  // "Extract the user property from the result of useAuth(), and if the result is null, set user to null."
  const { user } = useAuth() || { user: null };

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);

    async function fetchAuthUserRecipes() {
      let authUserId = user?.uid;
      console.log(authUserId);

      /**
       * Ensures that authUserId is not undefined before making the call to findAllRecipesByAuthor.
       */
      if (!authUserId) {
        console.error("Auth user ID is undefined.");
        return;
      }

      try {
        const fetchedRecipesList =
          await recipeFirestoreService.findAllRecipesByAuthor(authUserId);
        setRecipes(fetchedRecipesList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAuthUserRecipes();
  }, [user]);

  const handleDeleteRecipe = async (recipeId: string) => {
    try {
      /**
       * Fetch the recipe to get the imageUrl.
       */
      const recipe = await recipeFirestoreService.findOneRecipe(recipeId);

      /**
       * Delete the image from Cloud Storage.
       */
      if (recipe && recipe.imageUrl) {
        await recipeStorageService.deleteFile(recipe.imageUrl);
      }

      /**
       * Delete the recipe from Firestore.
       */
      await recipeFirestoreService.deleteRecipe(recipeId);

      /**
       * Update the local state to reflect the deletion.
       */
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe.id !== recipeId),
      );
    } catch (error) {
      console.error("Error deleting image and recipe:", error);
    }
  };

  function handleUpdateRecipe(recipeId: string) {
    setSelectedRecipeId(recipeId);
    setIsModalOpen(true);
  }

  function handleRequestCloseFunc() {
    setIsModalOpen(false);
  }

  return (
    <ProtectedRoute>
      <h1>Your Profile</h1>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>

      <div className={gridContainer}>
        {isLoading && <LoadingSpinner />}
        {!isLoading && recipes && recipes.length === 0 && (
          <h3>No recipes published by you, yet.</h3>
        )}
        {!isLoading &&
          recipes &&
          recipes.length > 0 &&
          recipes.map((recipe) => {
            return (
              <RecipeItem
                recipe={recipe}
                key={recipe.id}
                onHandleUpdateRecipe={handleUpdateRecipe}
                onHandleDeleteRecipe={handleDeleteRecipe}
                isProfilePage
              />
            );
          })}
      </div>

      <Modal
        isOpen={isModalOpen}
        className={modalContent}
        overlayClassName={modalOverlay}
        onRequestClose={handleRequestCloseFunc}
      >
        <ModalWrapper onClose={() => setIsModalOpen(false)}>
          <EditRecipe
            recipeID={selectedRecipeId}
            onClose={() => setIsModalOpen(false)}
          />
        </ModalWrapper>
      </Modal>
    </ProtectedRoute>
  );
}
