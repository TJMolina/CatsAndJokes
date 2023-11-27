import style from "../styles/image.module.css";
import { IconButton } from "rsuite";
import CopyIcon from "@rsuite/icons/Copy";

export default function Gato({ gato, chiste }) {
  return (
    <div id="contenedorChiste" className={style.contenedorChiste}>
      <img src={gato} alt="gato" id="gato" className={style.imagen} />
      <p id="chiste" className={style.chiste}>
        {chiste}
      </p>
      <div id="herramientas" className={style.herramientas}>
          <IconButton
            size="xs"
            icon={<CopyIcon />}
            onClick={() =>
              navigator.clipboard.writeText(
                document.getElementById("chiste").textContent
              )
            }
          />
      </div>
    </div>
  );
}
