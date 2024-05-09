import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./layout";
import { Home, QSList } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tag/*" element={<QSList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
