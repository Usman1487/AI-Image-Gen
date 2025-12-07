import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/Buy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppContext } from './context/AppContext';

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden">
      
      
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] "></div>
        
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] animation-delay-2000"></div>
        
        <div className="absolute bottom-[-20%] left-[30%] w-96 h-96 bg-red-900/30 rounded-full blur-[100px] animation-delay-4000"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/result' element={<Result />} />
            <Route path='/buy' element={<BuyCredit />} />
          </Routes>
        </div>
        <Footer />
      </div>

      {showLogin && <Login />}
      
    </div>
  );
};

export default App;