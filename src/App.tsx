import { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from './pages/Home';
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
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
