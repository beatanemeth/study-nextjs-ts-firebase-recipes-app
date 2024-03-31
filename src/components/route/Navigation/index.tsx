"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { helloImg, helloUser, navigationWrapper } from "./Navigation.css";
import Image from "next/image";
import authFirebaseService from "@/services/authFirebaseService";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";

export default function Navigation() {
  // "Extract the user property from the result of useAuth(), and if the result is null, set user to null."
  const { user } = useAuth() || { user: null };
  const router = useRouter();

  function handleLogout() {
    authFirebaseService.logoutUser();
    router.push("/");
  }

  return (
    <nav className={navigationWrapper}>
      <Link href="/recipes">Recipes</Link>
      {user && (
        <>
          <Link href="/create">Create</Link>
          <Link href="/profile">Profile</Link>
        </>
      )}
      <Link href="/about">About</Link>
      {user ? (
        <Button type="button" onClick={handleLogout} variant="logoutBtn">
          Logout
        </Button>
      ) : (
        <Link href="/auth">Login</Link>
      )}

      {user && (
        <div className={helloUser}>
          <p>hello {user?.email}</p>

          {user?.photoURL ? (
            <Image
              className={helloImg}
              src={user?.photoURL}
              alt="profile image"
              width={50}
              height={50}
            />
          ) : (
            <Image
              className={helloImg}
              src="https://cdn.pixabay.com/photo/2018/02/18/19/06/gugelhupf-3163116_1280.jpg"
              alt="profile image"
              width={50}
              height={50}
            />
          )}
        </div>
      )}
    </nav>
  );
}
