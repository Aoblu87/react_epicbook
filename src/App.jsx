import "bootstrap/dist/css/bootstrap.min.css";
import AllTheBooks from "./Components/AllTheBooks";
import { useState } from "react";
import "./App.scss";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";
import ThemeContext from "./contexts/theme";

function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} App`}>
          <MyNav query={query} setQuery={setQuery} />
          <Welcome />
          <AllTheBooks query={query} setQuery={setQuery} />
          <MyFooter />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
