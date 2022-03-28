import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Coifferie from './component/Coifferie';
import Jacobin from './component/Jacobin';
import Poterne from './component/Poterne';
import Contact from './component/Contact';

function App() {
    return (
        <div>
            <h1 className='title'>Appartement</h1>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coifferie" element={<Coifferie />} />
                    <Route path="/jacobin" element={<Jacobin />} />
                    <Route path="/poterne" element={<Poterne />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
