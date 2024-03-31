import { ChangeEvent } from "react";
import SearchBarSelectInput from "./SearchBarSelectInput";

type RecipeSearchBarProps = {
  categoryFilter: string;
  onCategoryFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  recipeOrder: string;
  onRecipeOrderChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export default function RecipeSearchBar({
  categoryFilter,
  onCategoryFilterChange,
  recipeOrder,
  onRecipeOrderChange,
}: RecipeSearchBarProps) {
  const categoryOptions = [
    {
      label: "Breads, Sandwiches, and Pizza",
      value: "breadsSandwichesAndPizza",
    },
    { label: "Eggs & Breakfast", value: "eggsAndBreakfast" },
    { label: "Desserts & Baked Goods", value: "dessertsAndBakedGoods" },
    { label: "Fish & Seafood", value: "fishAndSeafood" },
    { label: "Vegetables", value: "vegetables" },
  ];

  const orderOptions = [
    { label: "Publish Date (newest - oldest)", value: "publishDateDesc" },
    { label: "Publish Date (oldest - newest)", value: "publishDateAsc" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2rem 0",
      }}
    >
      <SearchBarSelectInput
        label="Search by Category"
        value={categoryFilter}
        onChange={onCategoryFilterChange}
        options={categoryOptions}
      />

      <SearchBarSelectInput
        label="Order By"
        value={recipeOrder}
        onChange={onRecipeOrderChange}
        options={orderOptions}
      />
    </div>
  );
}
