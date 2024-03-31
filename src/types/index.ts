export type User = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
};

export type Recipe = {
  id?: string;
  title: string;
  imageUrl: string;
  category: string;
  publishDate: string;
  ingredients: string[];
  directions: string;
  author?: string;
};
