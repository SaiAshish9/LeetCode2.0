import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./layout";
import { Home, QSList } from "./screens";
import { Container } from "./styles";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor =
      pathname === "/" ? "rgb(26 26 26)" : "#fff";
  }, [pathname]);

  return (
    <Container isHome={pathname === "/"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tag/*" element={<QSList />} />
      </Routes>
    </Container>
  );
}

export default App;
