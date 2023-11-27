import "../styles/inicio.css";
import CopyButton from "../components/CopyButton";
import DownloadImageButton from "../components/DownloadImageButton";

import { useEffect, useState } from "react";
import {
  Modal,
  Button,
  ButtonToolbar,
  Checkbox,
  CheckboxGroup,
  Divider,
  FlexboxGrid,
} from "rsuite";
import { gatoAndChiste } from "../utils/gatos";
import Gato from "../components/Gato";

export default function Inicio() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [gato, setGato] = useState();
  const [chiste, setChiste] = useState(null);

  const [categoria, setCategoria] = useState();
  const [filtros, setFiltros] = useState();

  const handleCategoriachange = (event)=>{
    setCategoria(event);
  }
  const handleFiltrochange = (event)=>{
    setFiltros(event);
  }
  useEffect(() => {
    gatoAndChiste(setGato, setChiste, categoria, filtros);
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="titulo">CatsAndJokes</h1>
        <ButtonToolbar>
          <i onClick={handleOpen} className="bx bxs-brightness"></i>
        </ButtonToolbar>
      </header>
      <main className="main">
        <Gato gato={gato} chiste={chiste} />
        <button
          className="newGatoAndJoke"
          onClick={() => gatoAndChiste(setGato, setChiste, categoria, filtros)}
        >
          Hazme un chiste
        </button>
      
        <CopyButton textToCopy="Texto a copiar" />
        <DownloadImageButton imageUrl="#" imageName="#" />

      </main>
      <footer>
        <a href="https://github.com/TJMolina/CatsAndJokes">
          <i className="bx bxl-github"></i>
        </a>
        <img
          className="ap"
          src="https://campusvirtual.ing.unlpam.edu.ar/pluginfile.php/37478/coursecat/description/FONDO%20JPG-%20sin%20espacios.png"
          alt="ArgentinaPrograma"
        />
      </footer>
      <Modal open={open} onClose={handleClose} size='xs'>
        <Modal.Header>
          <Modal.Title>Filtro de bromas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="show-grid">
              <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item colspan={6}>
                  <CheckboxGroup name="categoria" onChange={handleCategoriachange}>
                    <p>Categoria</p>
                    <Checkbox value="Programming">Programacion</Checkbox>
                    <Checkbox value="Miscellaneous">Miscellaneous</Checkbox>
                    <Checkbox value="Dark">Dark</Checkbox>
                  </CheckboxGroup>
                </FlexboxGrid.Item>

                <FlexboxGrid.Item colspan={6}>
                  <CheckboxGroup name="filtro" onChange={handleFiltrochange}>
                    <p>Temas prohibidos</p>
                    <Checkbox value="nsfw">
                      NSFW
                    </Checkbox>
                    <Checkbox value="religious">Religion</Checkbox>
                    <Checkbox value="political">Politica</Checkbox>
                    <Checkbox value="racist">Racismo</Checkbox>
                    <Checkbox value="sexist">Sexista</Checkbox>
                    <Checkbox value="explicit">Explicito</Checkbox>
                  </CheckboxGroup>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{handleClose();gatoAndChiste(setGato, setChiste, categoria, filtros);}} appearance="primary">
            Hazme un chiste
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
