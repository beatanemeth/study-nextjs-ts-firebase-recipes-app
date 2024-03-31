import { AuthContextProvider } from "@/context/AuthContext";
import type { Metadata } from "next";
import "src/styles/global.css.ts";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "Recipes App",
  description: "Recipes App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body>
          <ToastProvider>{children}</ToastProvider>
        </body>
      </AuthContextProvider>
    </html>
  );
}
