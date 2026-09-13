function toPct(v, min, max) {
  if (max === min) return 50
  return Math.min(100, Math.max(0, ((v - min) / (max - min)) * 100))
}

export default function RangeBar({ min, max, value, valueLabel, median, medianLabel, unit = '' }) {
  const valuePct = toPct(value, min, max)
  const medianPct = toPct(median, min, max)

  return (
    <div className="range-bar" role="img" aria-label={`${valueLabel}: ${value}${unit}. ${medianLabel}: ${median}${unit}. Rango de ${min}${unit} a ${max}${unit}.`}>
      <div className="range-bar__markers" style={{ '--value-pct': `${valuePct}%` }}>
        <span className="range-bar__value-label">
          {value}
          {unit}
        </span>
        <span className="range-bar__pin" />
      </div>

      <div className="range-bar__track">
        <span className="range-bar__triangle" style={{ left: `${medianPct}%` }} title={medianLabel} />
      </div>

      <div className="range-bar__scale">
        <span>
          {min}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </div>

      <div className="range-bar__legend">
        <span>
          <span className="range-bar__legend-pin" /> {valueLabel}
        </span>
        <span>
          <span className="range-bar__legend-triangle" /> {medianLabel}
        </span>
      </div>
    </div>
  )
}
