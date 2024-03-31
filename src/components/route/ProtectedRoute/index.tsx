import { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import AuthPage from "@/app/(PAGES)/auth/page";

type ProtectedRouteProps = { children: ReactNode };

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // "Extract the user property from the result of useAuth(), and if the result is null, set user to null."
  const { user } = useAuth() || { user: null };

  // Render AuthPage if not authenticated
  if (!user) {
    return <AuthPage />;
  }

  return <>{children}</>;
}
