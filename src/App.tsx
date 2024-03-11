// App.tsx
import React from "react";
import { ImageUploader } from "./components/ImageUploader/ImageUploader";

const App: React.FC = () => {
  const handleSubmit = (images: File[]) => {
    // Handle the submission of images here
    console.log(images);
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <ImageUploader onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
