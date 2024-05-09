import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './layout';
import { Home } from './screens';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Home />
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
