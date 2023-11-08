import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home/container/Home';
import Game from './pages/Game/container/Game';
import { AppContextProvider } from './Context';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
    <AppContextProvider>
      <Analytics/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
</div>
  );
}

export default App;
