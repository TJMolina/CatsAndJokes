import { ButtonToolbar } from "rsuite";
export default function Header({ handleOpen }) {
  return (
    <header>
      <i className="fas fa-cat gatitos"></i>
      <h1 className="titulo">Cats And Jokes</h1>
      <i className="fas fa-cat gatitos"></i>
      <ButtonToolbar className="config">
        <i onClick={handleOpen} className="bx bxs-brightness"></i>
      </ButtonToolbar>
    </header>
  );
}
