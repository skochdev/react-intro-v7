import { render } from "react-dom";
import ThemeContext from "./ThemeContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState, useContext } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const [theme] = useContext(ThemeContext);
  const currentTheme = useState(theme);
  return (
    <StrictMode>
      <ThemeContext.Provider value={currentTheme}>
        <BrowserRouter>
          <div>
            <header>
              <Link to="/">
                <h1>Adopt Me</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
