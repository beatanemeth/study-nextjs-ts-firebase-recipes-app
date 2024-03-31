import { storage } from "@/firebase/config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

const uploadFile = async (
  file: File,
  fullFilePath: string,
): Promise<string> => {
  // Create a storage reference
  const storageRef = ref(storage, fullFilePath);

  // File type validation
  if (!(file instanceof File)) {
    throw new Error("Invalid file type. Please provide a valid File object.");
  }

  // File size limitation
  const maxFileSizeInBytes = 10 * 1024 * 1024; // 10 MB

  if (file.size > maxFileSizeInBytes) {
    throw new Error("File size exceeds the maximum allowed limit.");
  }

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);

    return downloadUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("Failed to upload file. Please try again.");
  }
};

const deleteFile = async (fileDownloadUrl: string): Promise<void> => {
  try {
    const decodedUrl = decodeURIComponent(fileDownloadUrl);
    const startIndex = decodedUrl.indexOf("/o/") + 3;
    const endIndex = decodedUrl.indexOf("?");
    const filePath = decodedUrl.substring(startIndex, endIndex);

    // Create a storage reference
    const storageRef = ref(storage, filePath);

    return await deleteObject(storageRef);
  } catch (error) {
    console.error("Error deleting file:", error);
    throw new Error("Failed to delete file. Please try again.");
  }
};

const recipeStorageService = {
  uploadFile,
  deleteFile,
};

export default recipeStorageService;
