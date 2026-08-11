import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import IntegrationBar from './components/sections/IntegrationBar'
import AISalesperson from './components/sections/AISalesperson'
import RuleEngine from './components/sections/RuleEngine'
import Solutions from './components/sections/Solutions'
import HowItWorks from './components/sections/HowItWorks'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import ChatToCheckout from './components/sections/ChatToCheckout'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <IntegrationBar />
        <AISalesperson />
        <RuleEngine />
        <Solutions />
        <HowItWorks />
        <Pricing />
        <ChatToCheckout />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
