import React from "react";
import style from "../styles/image.module.css";
import { ButtonGroup, IconButton } from "rsuite";
import CopyIcon from "@rsuite/icons/Copy";
import FileDownloadIcon from "@rsuite/icons/FileDownload";
import html2pdf from 'html2pdf.js';

export default function Gato({ gato, chiste }) {
  const handleDownloadClick = () => {
    const element = document.getElementById("contenedorChiste"); // Reemplaza 'htmlElementId' con el ID del elemento HTML que deseas convertir a PDF
    html2pdf().from(element).save();
  };
  return (
    <div id="contenedorChiste" className={style.contenedorChiste}>
      <img src={gato} alt="gato" id="gato" className={style.imagen} />
      <p id="chiste" className={style.chiste}>
        {chiste}
      </p>
      <div id="herramientas" className={style.herramientas}>
        <ButtonGroup vertical>
          <IconButton
            size="xs"
            icon={<CopyIcon />}
            onClick={() =>
              navigator.clipboard.writeText(
                document.getElementById("chiste").textContent
              )
            }
          />
          <IconButton
            size="xs"
            icon={<FileDownloadIcon />}
            onClick={handleDownloadClick}
          />
        </ButtonGroup>
      </div>
    </div>
  );
}
