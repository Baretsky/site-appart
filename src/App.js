import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Appart1 from './component/Appart1';
import Appart2 from './component/Appart2';
import Appart3 from './component/Appart3';

function App() {
    return (
        <div>
            <h1 className='title'>Appart' Dulon</h1>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/appart1" element={<Appart1 />} />
                    <Route path="/appart2" element={<Appart2 />} />
                    <Route path="/appart3" element={<Appart3 />} />
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
