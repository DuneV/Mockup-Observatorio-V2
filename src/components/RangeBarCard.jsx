import { useState } from 'react'
import RangeBar from './RangeBar'
import Icon from './icons'
import './RangeBar.css'

const colLabels = {
  territorio: 'Territorio',
  cobertura: 'Cobertura',
  municipio: 'Municipio',
  frontera: 'Frontera',
  nacional: 'Nacional',
  biologico: 'Biológico',
  avance: 'Avance',
  meta: 'Meta',
}

export default function RangeBarCard({ metric }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="range-card">
      <h3 className="range-card__title">{metric.title}</h3>

      <RangeBar
        min={metric.min}
        max={metric.max}
        value={metric.value}
        valueLabel={metric.valueLabel}
        median={metric.median}
        medianLabel={metric.medianLabel}
        unit={metric.unit}
      />

      <p className="range-card__caption">Los valores son relativos y dependen del contexto.</p>

      <button type="button" className="range-card__details-toggle" onClick={() => setOpen((v) => !v)}>
        Ver detalles
        <Icon name="chevron" style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && (
        <table className="range-card__table">
          <thead>
            <tr>
              {metric.detailCols.map((col) => (
                <th key={col}>{colLabels[col] ?? col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metric.detail.map((row, i) => (
              <tr key={i}>
                {metric.detailCols.map((col) => (
                  <td key={col}>
                    {row[col]}
                    {typeof row[col] === 'number' ? metric.unit : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </article>
  )
}
