import { auth } from "../firebase/config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { User } from "firebase/auth";

const registerUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error: any) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

const loginUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error: any) {
    console.error("Error logging in:", error.message);
    throw error;
  }
};

const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    console.error("Error resetting password:", error.message);
    throw error;
  }
};

const loginUserWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error logging in with Google:", error.message);
    throw error;
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Error logging out:", error.message);
    throw error;
  }
};

const authenticatedUser = (
  handleAuthenticatedUser: (user: User | null) => void,
) => {
  onAuthStateChanged(auth, (user) => {
    handleAuthenticatedUser(user);
  });
};

const authFirebaseService = {
  registerUserWithEmailAndPassword,
  loginUserWithEmailAndPassword,
  resetPassword,
  loginUserWithGoogle,
  logoutUser,
  authenticatedUser,
};

export default authFirebaseService;
