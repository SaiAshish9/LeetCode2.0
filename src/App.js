import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
