import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./layout";
import { Home, Problem, QSList } from "./screens";
import { Container } from "./styles";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor =
      pathname === "/"
        ? "rgb(26 26 26)"
        : pathname?.includes("tags")
        ? "#fff"
        : "#0f0f0f";
  }, [pathname]);

  return (
    <Container isHome={pathname === "/"}>
      {!["problems"].includes(pathname?.split("/")?.[1]) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tag/*" element={<QSList />} />
        <Route path="problems/*" element={<Problem />} />
      </Routes>
    </Container>
  );
}

export default App;
