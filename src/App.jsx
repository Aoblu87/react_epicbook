import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AlertDismissible from "./components/AlertDismissible";
import AllTheBooks from "./components/AllTheBooks";
import BookDetails from "./components/BookDetails";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import ThemeContext from "./contexts/theme";

function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`${theme} App`}>
            <MyNav query={query} setQuery={setQuery} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AlertDismissible />
                    <Welcome />
                    <AllTheBooks query={query} setQuery={setQuery} />
                  </>
                }
              />
              <Route path="/BookDetails/:id" element={<BookDetails />} />
            </Routes>
            <MyFooter />
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
