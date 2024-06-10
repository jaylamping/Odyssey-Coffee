import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/menu'
          element={
            <Layout>
              <Menu />
            </Layout>
          }
        />
      </Routes>
      <SpeedInsights />
      <CssBaseline />
    </BrowserRouter>
  );
}

export default App;
