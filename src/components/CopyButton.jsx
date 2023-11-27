import React, { useRef } from "react";
import { Button, Notification } from "rsuite";

const CopyButton = ({ textToCopy }) => {
  const textRef = useRef(null);

  const handleCopyClick = () => {
    if (textRef.current) {
      textRef.current.select();
      document.execCommand("copy");
      Notification.success({
        title: "Texto Copiado",
        description: "El texto ha sido copiado al portapapeles.",
      });
    }
  };

  return (
    <>
      <textarea
        ref={textRef}
        value={textToCopy}
        style={{ position: "absolute", left: "-9999px" }}
        readOnly
      />
      <Button onClick={handleCopyClick}>Copiar Texto</Button>
    </>
  );
};

export default CopyButton;
