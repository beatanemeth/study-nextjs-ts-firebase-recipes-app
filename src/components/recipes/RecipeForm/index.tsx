import {
  createFormContainer,
  createFormInputFieldWrapper,
  createFormNarrowContainer,
  createFormWideContainer,
  createFormWrapper,
  imageFieldsWrapper,
} from "@/app/(PAGES)/(PROTECTED PAGES)/create/CreateRecipePage.css";
import ImageUploadPreview from "../ImageUploadPreview";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { recipeFormBtn } from "@/components/shared/Button/Button.css";
import { ChangeEvent, FormEvent, MouseEvent } from "react";
import RecipeFormInputs from "./RecipeFormInputs";

type RecipeFormProps = {
  onRecipeFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  category: string;
  onCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  publishDate: string;
  onPublishDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ingredients: string[];
  onDeleteIngredient: (ingredient: string) => void;
  onChooseImage: () => void;
  ingredientName: string;
  onIngredientNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddIngredient: (e: MouseEvent<HTMLButtonElement>) => void;
  directions: string;
  onDirectionsChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onRecipeCancel: () => void;
  isUpdatingRecipe?: boolean;
  imageUrl?: string | undefined;
  onDeleteImage?: () => void;
};

export default function RecipeForm({
  onRecipeFormSubmit,
  title,
  onTitleChange,
  category,
  onCategoryChange,
  publishDate,
  onPublishDateChange,
  ingredients,
  onDeleteIngredient,
  onChooseImage,
  ingredientName,
  onIngredientNameChange,
  onAddIngredient,
  directions,
  onDirectionsChange,
  onRecipeCancel,
  isUpdatingRecipe,
  imageUrl,
  onDeleteImage,
}: RecipeFormProps) {
  return (
    <form
      className={isUpdatingRecipe ? "" : createFormContainer}
      onSubmit={onRecipeFormSubmit}
    >
      <div className={createFormWrapper}>
        <div className={createFormNarrowContainer}>
          {/* Recipe Title */}
          <RecipeFormInputs
            label="Recipe Title:"
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e as ChangeEvent<HTMLInputElement>)}
            placeholder="Chocolate cake"
            required
          />

          {/* Category */}
          <RecipeFormInputs
            label="Category:"
            type="select"
            value={category}
            onChange={(e) =>
              onCategoryChange(e as ChangeEvent<HTMLSelectElement>)
            }
            options={[
              {
                value: "breadsSandwichesAndPizza",
                label: "Breads, Sandwiches, and Pizza",
              },
              { value: "eggsAndBreakfast", label: "Eggs & Breakfast" },
              {
                value: "dessertsAndBakedGoods",
                label: "Desserts & Baked Goods",
              },
              { value: "vegetables", label: "Vegetables" },
            ]}
            required
          />

          {/* Publish Date */}
          <RecipeFormInputs
            label="Publish Date:"
            type="date"
            value={publishDate}
            onChange={(e) =>
              onPublishDateChange(e as ChangeEvent<HTMLInputElement>)
            }
            required
          />
        </div>

        <div className={createFormNarrowContainer}>
          <div className={createFormInputFieldWrapper}>
            <p>Ingredients List:</p>
            {ingredients &&
              ingredients.length > 0 &&
              ingredients.map((ingredient) => {
                return (
                  <div
                    key={ingredient}
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    <ul>
                      <li>
                        <p>{ingredient}</p>
                      </li>
                    </ul>

                    <Button
                      type="button"
                      className={recipeFormBtn}
                      onClick={() => onDeleteIngredient(ingredient)}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
          </div>

          {/* Ingredient */}
          <RecipeFormInputs
            label="Ingredient:"
            type="text"
            value={ingredientName}
            onChange={(e) =>
              onIngredientNameChange(e as ChangeEvent<HTMLInputElement>)
            }
            placeholder="ex. 1 cup of sugar"
          />
          <div className={createFormInputFieldWrapper}>
            <div>
              <Button
                type="button"
                variant="tertiaryBtn"
                onClick={onAddIngredient}
              >
                Add
              </Button>
            </div>
          </div>
        </div>

        <div className={createFormWideContainer}>
          <div className={imageFieldsWrapper}>
            {isUpdatingRecipe && imageUrl ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Uploaded Image:</p>

                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={imageUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "50%", height: "auto", margin: "1rem 0" }}
                  />
                )}
                <div>
                  <Button
                    type="button"
                    className={recipeFormBtn}
                    onClick={onDeleteImage}
                  >
                    Delete
                  </Button>
                </div>
                <small style={{ fontSize: ".9rem" }}>
                  To upload new image, delete the existing one.
                </small>
              </div>
            ) : (
              <ImageUploadPreview onChooseImage={onChooseImage} />
            )}
          </div>

          {/* Directions */}
          <RecipeFormInputs
            label="Directions:"
            type="textarea"
            value={directions}
            onChange={(e) =>
              onDirectionsChange(e as ChangeEvent<HTMLTextAreaElement>)
            }
            placeholder="Place your directions here on how to prepare this recipe..."
            rows={10}
            required
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          margin: "1rem auto",
        }}
      >
        <Button type="submit" variant="primaryBtn">
          {isUpdatingRecipe ? "Update Recipe" : "Create Recipe"}
        </Button>

        <Button type="button" variant="secondaryBtn" onClick={onRecipeCancel}>
          Cancel Recipe
        </Button>
      </div>
    </form>
  );
}
