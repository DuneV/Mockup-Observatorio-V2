import { useState } from 'react'
import Header from './components/Header'
import ProfileHero from './components/ProfileHero'
import CategoryGrid from './components/CategoryGrid'
import CompareSection from './components/CompareSection'
import Team from './components/Team'
import Footer from './components/Footer'
import { defaultBiologicoId, buildCategories } from './data/profileData'

export default function App() {
  const [selectedId, setSelectedId] = useState(defaultBiologicoId)
  const categories = buildCategories(selectedId)

  return (
    <>
      <Header />
      <main>
        <ProfileHero selectedId={selectedId} onChange={setSelectedId} />
        <CategoryGrid categories={categories} />
        <CompareSection selectedId={selectedId} onChange={setSelectedId} />
        <Team />
      </main>
      <Footer />
    </>
  )
}
