import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Popular from './Components/Popular';
import './App.css';
import Irrecha from './Components/Holidays/Irrecha';
import ScrollToTop from './Components/Scrolltotop';
import Eid from './Components/Holidays/Eid';
import Lalibela from './Components/Places/Lalibela';
import Footer from './Components/Footer';
import Fasiledes from './Components/Places/Fasiledes';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/register" element={<Register setAuthenticated={setAuthenticated} />} />
        {authenticated ? (
          <>
            
            <Route path="/" element={<Home />} />
            
          </>
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <Header />
      <h1 className="text-xl font-bold text-gray-1000 px-4">Popular</h1>
      <Popular />
      <h1 className="text-xl font-bold text-gray-1000 px-4 py-10 flex justify-center" id="holidays">
        Holidays
      </h1>
      <p className="flex justify-center py-4 px-10 py-8 text-gray-400 italic">
        "Ethiopia celebrates diverse holidays, including Irrecha, Meskel, Timket, and Eid. Irrecha is an Oromo festival of gratitude and marks the end of the rainy season. Meskel commemorates the finding of the True Cross, and Timket celebrates the baptism of Jesus. Eid marks the end of Ramadan for the Muslim community. These holidays showcase Ethiopia's cultural richness and religious diversity, fostering unity and joyous celebrations among its people."
      </p>
      <h1 className="text-xl font-bold text-gray-1000 px-4">Irrecha</h1>
      <Irrecha />
      <h1 className="text-xl font-bold text-gray-1000 px-4">Eid</h1>
      <Eid />
      <h1 className="text-xl font-bold text-gray-1000 px-4 py-10 flex justify-center" id="places">
        Places
      </h1>
      <p className="flex justify-center py-8 px-10 text-gray-400 italic">
        "Lalibela is famous for its rock-hewn churches, while Fasiledes refers to Emperor Fasilides and his royal compound in Gondar. Lalibela's churches are remarkable UNESCO World Heritage Sites, carved out of rock in the 12th century. Fasiledes' royal enclosure, known as Fasil Ghebbi, showcases stunning castles and palaces from the 17th century. Both sites hold historical and cultural significance, attracting visitors to explore Ethiopia's rich heritage."
      </p>
      <h1 className="text-xl font-bold text-gray-1000 px-4">Lalibela</h1>
      <Lalibela />
      <h1 className="text-xl font-bold text-gray-1000 px-4">Fasiledes</h1>
      <Fasiledes />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;