import './Header.css'

const nav = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#comparativo', label: 'Comparativo' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a className="site-header__brand" href="#perfil">
          <span className="site-header__mark">OSP</span>
          <span className="site-header__wordmark">
            Observatorio de Salud Pública
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
