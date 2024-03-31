import { useState, useRef, ChangeEvent } from "react";
import {
  createFormInputField,
  createFormInputFieldWrapper,
} from "@/app/(PAGES)/(PROTECTED PAGES)/create/CreateRecipePage.css";
import { vars } from "@/styles/colors.css";
import Image from "next/image";
import Button from "@/components/shared/Button";

type ImageUploadPreviewProps = {
  onChooseImage: (image?: File) => void;
};

export default function ImageUploadPreview({
  onChooseImage,
}: ImageUploadPreviewProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  async function handleImageChanged(event: ChangeEvent<HTMLInputElement>) {
    const images = event.target.files;
    const image = images?.[0];
    console.log(image);

    if (image) {
      // Read the image file and set the preview
      const previewURL = URL.createObjectURL(image);
      setImagePreview(previewURL);
      console.log(previewURL);

      // Lift the state up to the parent
      onChooseImage(image);
    }
  }

  function handleImageCancel() {
    setImagePreview("");

    // Lift the state up to the parent
    onChooseImage();
  }

  return (
    <div className={createFormInputFieldWrapper}>
      <label>
        <sup>*</sup>Upload Image:
      </label>
      <input
        type="file"
        className={createFormInputField}
        accept="image/*"
        onChange={handleImageChanged}
        ref={imageInputRef}
      />

      {imagePreview ? (
        <div
          className={createFormInputFieldWrapper}
          style={{
            padding: ".5rem",
            border: `.2rem dashed ${vars.color.strongOrange}`,
          }}
        >
          <small>Image preview:</small>
          <Image
            src={imagePreview}
            alt={imagePreview}
            width={85}
            height={85}
            style={{ width: "85px", height: "auto", margin: "0 auto" }}
          />
          <div style={{ textAlign: "center", padding: ".5rem 0" }}>
            <Button
              type="button"
              onClick={handleImageCancel}
              variant="tertiaryBtn"
            >
              Cancel Image
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
