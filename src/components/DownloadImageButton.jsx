import React from "react";
import { Button } from "rsuite";

const DownloadImageButton = ({ imageUrl, imageName }) => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName || "image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <Button  onClick={handleDownloadClick}>Descargar Imagen</Button>;
};

export default DownloadImageButton;
