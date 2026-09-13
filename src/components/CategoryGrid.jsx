import CategoryCard from './CategoryCard'
import './CategoryGrid.css'

export default function CategoryGrid({ categories }) {
  return (
    <section id="categorias" className="category-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Indicadores por categoría</span>
          <h2>Haga clic en una categoría para ver el detalle</h2>
          <p className="category-section__intro">
            Cada tarjeta se recalcula según el biológico elegido en el perfil. Los valores son
            ilustrativos y siguen el mismo formato del panel de indicadores del Observatorio.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
