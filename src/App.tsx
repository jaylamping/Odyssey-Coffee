import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Navbar from './components/Navbar';

const Layout = ({
  children,
  isHome = false,
}: {
  children: ReactNode;
  isHome?: boolean;
}) => {
  return (
    <div>
      <Navbar isHome={isHome} />
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
            <Layout isHome={true}>
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
