import { biologicos, buildComparisonMetrics } from '../data/profileData'
import RangeBarCard from './RangeBarCard'
import './RangeBarCard.css'
import './CompareSection.css'

export default function CompareSection({ selectedId, onChange }) {
  const bio = biologicos.find((b) => b.id === selectedId) ?? biologicos[0]
  const metrics = buildComparisonMetrics(bio.id)

  return (
    <section id="comparativo" className="compare-section">
      <div className="container">
        <div className="section-head compare-section__head">
          <span className="eyebrow">Comparativo</span>
          <h2>
            Compare <span className="compare-section__accent">{bio.label}</span> con la meta nacional
          </h2>
          <p>
            Seleccione un biológico para comparar su cobertura, su cifra en frontera y su avance de
            meta frente al rango observado y el valor de referencia nacional.
          </p>
        </div>

        <div className="compare-section__tabs" role="tablist" aria-label="Biológico a comparar">
          {biologicos.map((b) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={b.id === selectedId}
              className={`compare-section__tab ${b.id === selectedId ? 'is-active' : ''}`}
              style={{ '--tab-color': b.color }}
              onClick={() => onChange(b.id)}
            >
              <span className="compare-section__tab-dot" />
              {b.label}
            </button>
          ))}
        </div>

        <div className="compare-section__grid">
          {metrics.map((m) => (
            <RangeBarCard key={m.id} metric={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
