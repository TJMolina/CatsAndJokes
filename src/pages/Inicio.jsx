import "../styles/inicio.css";
import { useEffect, useState } from "react";
import { Modal, Button, Checkbox, CheckboxGroup, FlexboxGrid } from "rsuite";
import { gatoAndChiste } from "../utils/recibirGatoAndChiste";
import Gato from "../components/Gato";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Inicio() {
  const [open, setOpen] = useState(false);
  const [categoria, setCategoria] = useState();
  const [filtros, setFiltros] = useState();
  const [gato, setGato] = useState();
  const [chiste, setChiste] = useState(null);

  const handleOpen = () => {
    setCategoria(undefined);
    setFiltros(undefined);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleCategoriachange = (event) => {
    setCategoria(event);
  };
  
  const handleFiltrochange = (event) => {
    setFiltros(event);
  };
  useEffect(() => {
    gatoAndChiste(setGato, setChiste, categoria, filtros);
  }, []);

  return (
    <div className="container">
      <Header handleOpen={handleOpen} />
      <main className="main">
        <Gato gato={gato} chiste={chiste} />
        <button className="boton-chiste" onClick={() => gatoAndChiste(setGato, setChiste, categoria, filtros)}>
          Hazme un chiste
        </button>
      </main>
      <Footer />
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Filtro de bromas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="show-grid">
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item colspan={6}>
                <CheckboxGroup
                  name="categoria"
                  onChange={handleCategoriachange}
                >
                  <p>Categoria</p>
                  <Checkbox value="Programming">Programacion</Checkbox>
                  <Checkbox value="Miscellaneous">Miscellaneous</Checkbox>
                  <Checkbox value="Dark">Dark</Checkbox>
                </CheckboxGroup>
              </FlexboxGrid.Item>

              <FlexboxGrid.Item colspan={6}>
                <CheckboxGroup name="filtro" onChange={handleFiltrochange}>
                  <p>Temas prohibidos</p>
                  <Checkbox value="nsfw">NSFW</Checkbox>
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
          <Button
            onClick={() => {
              handleClose();
              gatoAndChiste(setGato, setChiste, categoria, filtros);
            }}
            appearance="primary"
          >
            Hazme un chiste
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
