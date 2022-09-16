import "./App.css";
import { Image, Table, Form } from "./components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 4px",
          paddingBottom: "2rem",
        }}
      >
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Form formTitle={"title"} />
      <Image />
      <Table />
    </div>
  );
}

export default App;
