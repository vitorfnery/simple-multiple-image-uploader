// ImageUploader.tsx
import React, { useState } from "react";

interface ImageUploaderProps {
  onSubmit: (images: File[]) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onSubmit }) => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const submitImages = () => {
    onSubmit(images);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{ width: "100px", height: "100px" }}
            />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={submitImages}>Submit</button>
    </div>
  );
};
