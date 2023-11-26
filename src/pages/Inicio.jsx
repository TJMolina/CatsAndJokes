import '../styles/inicio.css'
import { useEffect, useState } from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import { gatoAndChiste } from "../utils/gatos";
import Gato from "../components/Gato";

export default function Inicio() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [gato, setGato] = useState();
  const [chiste, setChiste] = useState(null);

  useEffect(() => {
    gatoAndChiste(setGato, setChiste);
  }, []);

  return (
    <div className="container">
      <header>
        <h1 className="titulo">CatsAndJokes</h1>
        <ButtonToolbar>
        <i onClick={handleOpen} className='bx bxs-brightness'></i>
      </ButtonToolbar>
        
      </header>
      <main className='main'>
        <Gato gato={gato} chiste={chiste} />
        <button className='newGatoAndJoke' onClick={()=>gatoAndChiste(setGato, setChiste)}>Hazme un chiste</button>
      </main>
      <footer>
        <a href="https://github.com/TJMolina/CatsAndJokes">
          <i className="bx bxl-github"></i>
        </a>
        <img
          className="ap"
          src="https://campusvirtual.ing.unlpam.edu.ar/pluginfile.php/37478/coursecat/description/FONDO%20JPG-%20sin%20espacios.png"
          alt=""
        />
      </footer>


      
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
