import { useState, useEffect } from 'react'
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
import { Travel } from './pages/Travel'
import WeddingDetails from './pages/WeddingDetails'

export default function App() {
  const [activePage, setActivePage] = useState(null)

  // When navigating to a sub-page, push a new history entry
  const navigateTo = (page) => {
    setActivePage(page)
    window.history.pushState({ page }, '', `#${page}`)
    window.scrollTo(0, 0) 
  }

  // When the user presses back, popstate fires — go back to main
  useEffect(() => {
    const handlePopState = (e) => {
      const page = e.state?.page ?? null
      setActivePage(page)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const goBack = () => window.history.back()

  if (activePage === 'rsvp') return <Rsvp onBack={goBack} />
  if (activePage === 'dresscode') return <ColorPalette onBack={goBack} />
  if (activePage === 'connect') return <Connect onBack={goBack} />
  if (activePage === 'travel') return <Travel onBack={goBack} />
  if (activePage === 'moments') return <Moments onBack={goBack} />
  if (activePage === 'streaming') return <Streaming onBack={goBack} />

  return (
    <>
      <BackgroundMusic />
      <Header />
      <Navbar />
      <section id="home"><Home /></section>
      <section id="our-journey"><OurJourney /></section>
      <section id="giftings"><Registry /></section>
      <section id="wedding-details">
        <WeddingDetails onNavigate={navigateTo} />
      </section>
    </>
  )
}