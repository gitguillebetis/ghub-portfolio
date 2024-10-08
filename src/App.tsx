// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Grundfos from './pages/Grundfos/Grundfos';
import Concordium from './pages/Concordium/Concordium';
import Vass from './pages/Vass/Vass';
import Agco from './pages/AGCO/AGCO';
import AltaPay from './pages/Altapay/Altapay';
import Philips from './pages/Philips/Philips';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/Grundfos/Grundfos" element={<Grundfos />} />
        <Route path="/page/Concordium/Concordium" element={<Concordium />} />
        <Route path="/page/Vass/Vass" element={<Vass />} />
        <Route path="/page/AGCO/AGCO" element={<Agco />} />
        <Route path="/page/AltaPay/AltaPay" element={<AltaPay />} />
        <Route path="/page/Philips/Philips" element={<Philips />} />
      </Routes>
    </Router>
  );
}

export default App;
