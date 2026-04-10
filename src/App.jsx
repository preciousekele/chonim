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
// import BackgroundMusic from './components/BackgroundMusic'
import { Travel } from './pages/Travel'
import WeddingDetails from './pages/WeddingDetails'

export default function App() {
  const [activePage, setActivePage] = useState(null)

  const navigateTo = (page) => {
    setActivePage(page)
    window.history.pushState({ page }, '', `#${page}`)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handlePopState = (e) => {
      const page = e.state?.page ?? null
      setActivePage(page)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const goBack = () => window.history.back()

  return (
    <>
      {/* <BackgroundMusic /> */}

      {activePage === 'rsvp' && <Rsvp onBack={goBack} />}
      {activePage === 'dresscode' && <ColorPalette onBack={goBack} />}
      {activePage === 'connect' && <Connect onBack={goBack} />}
      {activePage === 'travel' && <Travel onBack={goBack} />}
      {activePage === 'moments' && <Moments onBack={goBack} />}
      {activePage === 'streaming' && <Streaming onBack={goBack} />}
      {activePage === 'giftings' && <Registry onBack={goBack} />}

      {!activePage && (
        <>
          <Header />
          <Navbar />
          <section id="home"><Home /></section>
          <section id="our-journey"><OurJourney /></section>
          <section id="connect"><Connect /></section>
          {/* <section id="giftings"><Registry /></section> */}
          <section id="wedding-details">
            <WeddingDetails onNavigate={navigateTo} />
          </section>
        </>
      )}
    </>
  )
}