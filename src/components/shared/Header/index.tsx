import Link from "next/link";
import Navigation from "@/components/route/Navigation";
import {
  headerContainer,
  headerContentWrapper,
  logoWrapper,
} from "./Header.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={headerContainer}>
      <div className={headerContentWrapper}>
        <div className={logoWrapper}>
          <Link href="/">
            <Image
              src="/chocolate.png"
              alt="Picture of the logo"
              width={95}
              height={95}
            />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
