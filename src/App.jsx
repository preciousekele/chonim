import Navbar from './components/Navbar'
import Home from './pages/Home'
import OurJourney from './pages/OurJourney'
import Connect from './pages/Connect'
import Moments from './pages/Moments'
import Header from './components/Header'
import Rsvp from './pages/Rsvp'
import Registry from './pages/Registry'
import ColorPalette from './pages/ColorPalette'
import Streaming from './pages/Streaming'
import BackgroundMusic from './components/BackgroundMusic'

export default function App() {
  return (
    <>
    <BackgroundMusic />
      <Header />
      <Navbar />
      <section id="home"><Home /></section>
      <section id="our-journey"><OurJourney /></section>
      <section id="rsvp"><Rsvp /></section>
      <section id="registry"><Registry /></section>
      <section id="dresscode"><ColorPalette /></section>
      <section id="connect"><Connect /></section>
      <section id="streaming"><Streaming /></section>
      <section id="moments"><Moments /></section>
    </>
  )
}