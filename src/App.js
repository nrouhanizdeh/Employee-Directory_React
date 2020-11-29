import { Navbar } from "react-bootstrap";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand
          href="#"
          style={{ color: "white" }}
          className="text-center"
        >
          Employee Directory
        </Navbar.Brand>
      </Navbar>

      <Main />
    </div>
  );
}

export default App;
