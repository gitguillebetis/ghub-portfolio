import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Grundfos from './pages/Grundfos';
import Concordium from './pages/Concordium';
import Vass from './pages/Vass';
import Agco from './pages/AGCO';
import AltaPay from './pages/Altapay';
import Philips from './pages/Philips';
import ScrollToTop from './components/ScrollToTop';
import './styles/_global.scss'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/grundfos" element={<Grundfos />} />
                <Route path="/concordium" element={<Concordium />} />
                <Route path="/vass" element={<Vass />} />
                <Route path="/agco" element={<Agco />} />
                <Route path="/altapay" element={<AltaPay />} />
                <Route path="/philips" element={<Philips />} />
            </Routes>
        </Router>
    );
}

export default App;
