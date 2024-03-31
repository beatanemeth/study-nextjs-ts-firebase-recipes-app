import { CloseIcon } from "@/reactIcons";
import { iconClose, modalBodyWrapper, modalHeader } from "./Modal.css";
import clsx from "clsx";
import { unstyledBtn } from "../Button/Button.css";

type ModalWrapperProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ModalWrapper({ children, onClose }: ModalWrapperProps) {
  return (
    <>
      <div className={modalHeader}>
        <button
          type="button"
          className={clsx(unstyledBtn, iconClose)}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={modalBodyWrapper}>{children}</div>
    </>
  );
}
