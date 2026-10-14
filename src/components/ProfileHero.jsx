import { profileMeta, biologicos, coverageByTerritory, coverageStatus, lowerLabel } from '../data/profileData'
import Icon from './icons'
import heroBanner from '../assets/banner.jpg'
import './ProfileHero.css'

export default function ProfileHero({ selectedId, onChange }) {
  const selected = biologicos.find((b) => b.id === selectedId) ?? biologicos[0]
  const rows = coverageByTerritory[selected.id]
  const topThree = [...rows].sort((a, b) => b.cobertura - a.cobertura).slice(0, 1)
  const bottomOne = [...rows].sort((a, b) => a.cobertura - b.cobertura)[0]
  const avgCobertura = Math.round(rows.reduce((s, r) => s + r.cobertura, 0) / rows.length)

  return (
    <section id="perfil" className="profile-hero">
      <img className="profile-hero__bg" src={heroBanner} alt="" aria-hidden="true" />
      <span className="profile-hero__overlay" aria-hidden="true" />

      <div className="container profile-hero__inner">
        <nav className="profile-hero__crumbs" aria-label="Ruta de navegación">
          {profileMeta.breadcrumb.map((step, i) => (
            <span key={step}>
              {i > 0 && <span className="profile-hero__crumb-sep">/</span>}
              {step}
            </span>
          ))}
        </nav>

        <div className="profile-hero__top">
          <div>
            <span className="eyebrow eyebrow--on-dark">Perfil epidemiológico</span>
            <h1 className="profile-hero__title">{selected.label}</h1>
            <p className="profile-hero__subtitle">{profileMeta.subtitle}</p>
          </div>
          <div className="profile-hero__actions">
            <a className="btn btn-ghost btn-ghost--on-dark" href="#comparativo">
              Ver metodología
            </a>
            <button type="button" className="btn btn-primary">
              Compartir perfil
            </button>
          </div>
        </div>

        <div className="profile-hero__body">
          <div className="profile-hero__facts">
            {profileMeta.quickFacts.map((f) => (
              <div className="profile-hero__fact" key={f.label}>
                <Icon name={f.icon} width={18} height={18} />
                <div>
                  <span className="profile-hero__fact-label">{f.label}</span>
                  <span className="profile-hero__fact-value">{f.value}</span>
                </div>
              </div>
            ))}

            <label className="profile-hero__select">
              <span>Seleccionar otro biológico</span>
              <select value={selectedId} onChange={(e) => onChange(e.target.value)}>
                {biologicos.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label}
                  </option>
                ))}
              </select>
              <Icon name="chevron" />
            </label>
          </div>

          <div className="profile-hero__panel">
            <div className="profile-hero__panel-head">
              <span className="profile-hero__panel-label">Estado de {lowerLabel(selected.label)}</span>
              <span className="profile-hero__panel-value">{avgCobertura}%</span>
            </div>
            <ul className="profile-hero__panel-list">
              <li>
                <span className={`dot dot-${coverageStatus(topThree[0].cobertura)}`} />
                {topThree[0].territorio} lidera con {topThree[0].cobertura}%
              </li>
              <li>
                <span className={`dot dot-${coverageStatus(bottomOne.cobertura)}`} />
                {bottomOne.territorio} en rezago con {bottomOne.cobertura}%
              </li>
              <li>
                <span className="dot dot-amber" />
                Datos ilustrativos, corte agosto de 2026
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
