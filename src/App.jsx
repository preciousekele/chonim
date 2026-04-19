import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Connect from './pages/Connect'
import Moments from './pages/Moments'
import Header from './components/Header'
import Rsvp from './pages/Rsvp'
import Registry from './pages/Registry'
import ColorPalette from './pages/ColorPalette'
import Streaming from './pages/Streaming'
import { Travel } from './pages/Travel'
import WeddingDetails from './pages/WeddingDetails'
import ConnectNim from './pages/ConnectNim'

function MainLayout() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Navbar />
      <section id="home"><Home /></section>
      <section id="our-story"><Connect /></section>
      <section id="connect-nim"><ConnectNim /></section>
      <section id="wedding-details">
        <WeddingDetails onNavigate={(key) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate(`/${key}`);
        }} />
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/rsvp" element={<Rsvp onBack={() => window.history.back()} />} />
        <Route path="/dresscode" element={<ColorPalette onBack={() => window.history.back()} />} />
        <Route path="/connect" element={<Connect onBack={() => window.history.back()} />} />
        <Route path="/travel" element={<Travel onBack={() => window.history.back()} />} />
        <Route path="/moments" element={<Moments onBack={() => window.history.back()} />} />
        <Route path="/streaming" element={<Streaming onBack={() => window.history.back()} />} />
        <Route path="/giftings" element={<Registry onBack={() => window.history.back()} />} />
      </Routes>
    </BrowserRouter>
  );
}