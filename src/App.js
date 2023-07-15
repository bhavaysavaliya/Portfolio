import { Route, Routes } from 'react-router-dom';
import PortFolio from './PortFolio/PortFolio';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortFolio />} />
      </Routes>
    </>
  );
}

export default App;
