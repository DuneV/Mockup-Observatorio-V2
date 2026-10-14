import obsLogo from '../assets/logo_.png'
import './Header.css'

const nav = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#comparativo', label: 'Comparativo' },
  { href: '#equipo', label: 'Equipo' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a className="site-header__brand" href="#perfil">
          <img
            className="site-header__logo"
            src={`${import.meta.env.BASE_URL}uniandes-medicina.png`}
            alt="Universidad de los Andes — Facultad de Medicina"
            width="184"
            height="40"
          />
          <span className="site-header__divider" aria-hidden="true" />
          <img
            className="site-header__obs-logo"
            src={obsLogo}
            alt="Observatorio de Salud Pública y Epidemiología"
          />
          <span className="site-header__wordmark">
            <small>Perfiles epidemiológicos</small>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
