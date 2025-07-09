import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./layout";
import { Home, Problem, QSList, RevisionSheet } from "./screens";
import { Container } from "./styles";
import { useEffect } from "react";
import PDFs from "./screens/pdf";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor =
      pathname === "/"
        ? "rgb(26 26 26)"
        : pathname?.includes("tags") || pathname?.includes("revision_sheet")
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
        <Route path="revision_sheet/*" element={<RevisionSheet />} />
        <Route path="pdf/*" element={<PDFs />} />
      </Routes>
    </Container>
  );
}

// import Modal from "./Modal";
// import { useState } from "react";
// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   return (
//     <div className="app1">
//       <button onClick={openModal}>Open Modal</button>
//       <div id="modal-root"></div>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <h2>This is a modal!</h2>
//         </Modal>
//       )}
//     </div>
//   );
// }

export default App;
