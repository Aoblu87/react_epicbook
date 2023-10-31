import "bootstrap/dist/css/bootstrap.min.css";
import AllTheBooks from "./AllTheBooks";
import { useState } from "react";
import "./App.scss";
import MyFooter from "./MyFooter";
import MyNav from "./MyNav";
import Welcome from "./Welcome";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <MyNav query={query} setQuery={setQuery} />
      <Welcome />
      <AllTheBooks query={query} setQuery={setQuery} />
      <MyFooter />
    </>
  );
}

export default App;
