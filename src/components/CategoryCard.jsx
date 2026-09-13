import { useState } from 'react'
import Icon from './icons'

export default function CategoryCard({ category }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`category-card ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="category-card__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="category-card__icon">
          <Icon name={category.icon} />
        </span>

        <span className="category-card__body">
          <span className="category-card__title">{category.title}</span>
          <span className="category-card__desc">{category.description}</span>

          <span className="category-card__value-row">
            {category.status && <span className={`semaforo-dot dot-${category.status}`} />}
            <span className="category-card__value">{category.value}</span>
            {category.corte && <span className="category-card__corte">({category.corte})</span>}
          </span>
        </span>

        <span className="category-card__plus">
          <Icon name="plus" />
        </span>
      </button>

      {open && (
        <div className="category-card__detail">
          <p>
            Esta cifra hace parte de los indicadores ilustrativos del biológico seleccionado. Cambia
            el biológico en la parte superior del perfil para recalcular esta y las demás categorías.
          </p>
        </div>
      )}
    </article>
  )
}
