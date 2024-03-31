import Button from "@/components/shared/Button";
import Image from "next/image";
import Link from "next/link";
import {
  contentContainer,
  contentWrapper,
  homeImage,
  mainContainer,
  textWrapper,
} from "./HomePage.css";

export default function HomePage() {
  return (
    <main className={mainContainer}>
      <div className={contentContainer}>
        <h3 style={{ marginTop: "-3rem" }}>Recipes App</h3>

        <div className={contentWrapper}>
          <div className={textWrapper}>
            <h1>Welcome!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Link href="/recipes">
            <Button type="button" variant="secondaryBtn">
              Start here
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src="https://images.pexels.com/photos/5941880/pexels-photo-5941880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Picture of the author"
        width={900}
        height={600}
        className={homeImage}
      />
    </main>
  );
}
