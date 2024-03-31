export function formatDateToYYYYMMDD(date: Date): string {
  // date should be of type Date, and the return value is of a string
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-indexed
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function lookupCategoryLabel(categoryKey: string): string | undefined {
  // categoryKey should be of type string and the return value is of a string
  // Record<string, string> explicitly defines the structure of the categories object.
  // This helps TypeScript understand that categories is a mapping from string keys to string values.
  const categories: Record<string, string> = {
    breadsSandwichesAndPizza: "Breads, Sandwiches, and Pizza",
    eggsAndBreakfast: "Eggs & Breakfast",
    dessertsAndBakedGoods: "Desserts & Baked Goods",
    fishAndSeafood: "Fish & Seafood",
    vegetables: "Vegetables",
  };

  return categories[categoryKey];
}
