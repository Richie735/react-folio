import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Resume from "./pages/Resume";

function App () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Resume" element={<Resume />} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;
