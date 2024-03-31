"use client";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import authFirebaseService from "@/services/authFirebaseService";
import { User } from "firebase/auth";

type AuthContextProviderProps = { children: ReactNode };

/**
 * step-1: Creating the context
 * The built-in factory function createContext(default) creates a context instance.
 * The factory function accepts one optional argument: the default value.
 */
export const AuthContext = createContext<{ user: User | null }>({ user: null });

/**
 * step-2: Provide the context
 * Wrap all the code with the <Context.Provider> component that needs access to the info in the context.
 * It has a single prop called value which is going to be whatever the value of your context is.
 */

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  //  This line declares a constant variable named value and initializes it with an object.
  // { user }: This uses object shorthand notation. It's a concise way of writing { user: user }.
  // The context value is an object with a property user containing the current user state; e.g. { user: { email: 'example@example.com' } }.
  const value = { user };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        authFirebaseService.authenticatedUser(setUser);
      } catch (error: any) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * step-3: Consume the context
 * Use the useAuth() hook in your components to access the authentication context.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return null;
  }

  return context;
};
