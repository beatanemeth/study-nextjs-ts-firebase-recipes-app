import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  getDocs,
  updateDoc,
  Query,
  DocumentData,
} from "firebase/firestore";
import { firestore } from "../firebase/config";
import { Recipe } from "@/types";

/********** region start: GET ALL DOCUMENTS  **********/
/**
 * Cloud Firestore - Get all documents in a collection
 * https://firebase.google.com/docs/firestore/query-data/get-data#get_all_documents_in_a_collection
 */
const findAllRecipesByQuery = async (firestoreQuery: Query<DocumentData>) => {
  try {
    const querySnapshot = await getDocs(firestoreQuery);

    const fetchedRecipesList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Recipe),
    }));

    return fetchedRecipesList;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const findAllRecipesByAuthor = async (authUserId: string) => {
  const firestoreQuery = query(
    collection(firestore, "recipes"),
    where("author", "==", authUserId),
    orderBy("publishDate", "desc"),
  );

  return findAllRecipesByQuery(firestoreQuery);
};

const findAllRecipesByCategory = async (
  categoryFilter: string,
  currentDay: string,
) => {
  const firestoreQuery = query(
    collection(firestore, "recipes"),
    where("publishDate", "<=", currentDay),
    where("category", "==", categoryFilter),
    orderBy("publishDate", "desc"),
  );

  return findAllRecipesByQuery(firestoreQuery);
};

const findAllRecipesByPublishDateDesc = async (currentDay: string) => {
  const firestoreQuery = query(
    collection(firestore, "recipes"),
    where("publishDate", "<=", currentDay),
    orderBy("publishDate", "desc"),
  );

  return findAllRecipesByQuery(firestoreQuery);
};

const findAllRecipesByPublishDateAsc = async (currentDay: string) => {
  const firestoreQuery = query(
    collection(firestore, "recipes"),
    where("publishDate", "<=", currentDay),
    orderBy("publishDate", "asc"),
  );

  return findAllRecipesByQuery(firestoreQuery);
};
/********** region end: GET ALL DOCUMENTS  **********/

/**
 * Cloud Firestore - Get a document
 * https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
 */
const findOneRecipe = async (recipeId: string) => {
  const docRef = doc(firestore, "recipes", recipeId);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};

/**
 * Cloud Firestore - Add a document
 * https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
 */
const createRecipe = async (newRecipeObject: Recipe) => {
  try {
    return await addDoc(collection(firestore, "recipes"), newRecipeObject);
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

/**
 * Cloud Firestore - Update a document
 * https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
 */
const updateRecipe = async (recipeID: string, newRecipe: Recipe) => {
  const recipeRef = doc(firestore, "recipes", recipeID);

  try {
    return await updateDoc(recipeRef, newRecipe);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

/**
 * Cloud Firestore - Delete a document
 * https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents
 */
const deleteRecipe = async (recipeId: string) => {
  try {
    return await deleteDoc(doc(firestore, "recipes", recipeId));
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

const recipeFirestoreService = {
  findAllRecipesByAuthor,
  findAllRecipesByCategory,
  findAllRecipesByPublishDateDesc,
  findAllRecipesByPublishDateAsc,
  findOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};

export default recipeFirestoreService;
