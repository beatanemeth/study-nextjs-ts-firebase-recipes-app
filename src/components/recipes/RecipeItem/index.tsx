import { gridItem } from "@/app/(PAGES)/recipes/RecipesPage.css";
import Button from "@/components/shared/Button";
import { useAuth } from "@/context/AuthContext";
import { vars } from "@/styles/colors.css";
import { Recipe } from "@/types";
import { formatDateToYYYYMMDD, lookupCategoryLabel } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

type RecipeItemProps = {
  recipe: Recipe;
  isProfilePage?: boolean;
  onHandleUpdateRecipe?: (recipeId: string) => void;
  onHandleDeleteRecipe?: (recipeId: string) => void;
};

export default function RecipeItem({
  recipe,
  isProfilePage,
  onHandleUpdateRecipe,
  onHandleDeleteRecipe,
}: RecipeItemProps) {
  // "Extract the user property from the result of useAuth(), and if the result is null, set user to null."
  const { user } = useAuth() || { user: null };

  let today = new Date();
  let currentDay = formatDateToYYYYMMDD(today);

  return (
    <div className={gridItem}>
      <Link href={`/recipes/${recipe.id}`}>
        <Image
          src={recipe.imageUrl}
          alt={recipe.imageUrl}
          /**
           * Next/Image component does not work with height="auto"
           * alternative solution:
           * https://github.com/vercel/next.js/discussions/18474#discussioncomment-5501724
           */
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto", margin: "0 auto" }}
        />

        <h2>{recipe.title}</h2>
        <p>category: {lookupCategoryLabel(recipe.category)}</p>
        <p>{recipe.publishDate}</p>
        {isProfilePage ? (
          recipe.publishDate < currentDay ? (
            <h3 style={{ color: vars.color.strongBlue }}>PUBLISHED</h3>
          ) : (
            <h3 style={{ color: vars.color.strongBlue }}>UNPUBLISHED</h3>
          )
        ) : (
          user &&
          user?.uid === recipe.author && (
            <h3 style={{ color: vars.color.strongBlue }}>Published by you</h3>
          )
        )}
      </Link>
      {isProfilePage && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0",
            gap: "2rem",
          }}
        >
          <Button
            type="button"
            variant="tertiaryBtn"
            /**
             * Ensure that recipe.id is defined before accessing its value.
             * This essentially says "use recipe.id if it's not null or undefined, otherwise, use an empty string."
             */
            onClick={() => onHandleUpdateRecipe?.(recipe.id ?? "")}
          >
            Update
          </Button>
          <Button
            type="button"
            variant="tertiaryBtn"
            onClick={() => onHandleDeleteRecipe?.(recipe.id ?? "")}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
