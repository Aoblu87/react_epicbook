import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AllTheBooks from "./Components/AllTheBooks";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";
import ThemeContext from "./contexts/theme";
import BookDetails from "./Components/BookDetails";

function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} App`}>
          <BrowserRouter>
            <MyNav query={query} setQuery={setQuery} />
            <Welcome />
            <AllTheBooks query={query} setQuery={setQuery} />
            <MyFooter />
            <Routes>
              <Route
                path="/"
                element={<AllTheBooks query={query} setQuery={setQuery} />}
              />
              <Route path="/BookDetails/:id" element={<BookDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
