import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/Home'
import Disclaimer from '../pages/Disclaimer'
import NotFound from '../pages/NotFound'
import MetaTags from './MetaTags'

const AnimatedRoutes: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <MetaTags path={location.pathname} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes