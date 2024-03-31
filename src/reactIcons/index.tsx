import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { ImSpinner6 } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { vars } from "@/styles/colors.css";

export function GoogleIcon() {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div>
        <FcGoogle />
      </div>
    </IconContext.Provider>
  );
}

export function LoadingSpinner() {
  return <ImSpinner6 />;
}

export function CloseIcon() {
  return (
    <IconContext.Provider
      value={{ color: vars.color.strongBlue, size: "2rem" }}
    >
      <div>
        <AiOutlineClose />
      </div>
    </IconContext.Provider>
  );
}
