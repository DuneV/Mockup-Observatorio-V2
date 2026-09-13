import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <div className="site-footer__brand">
          <span className="site-footer__mark">OSP</span>
          <p>
            Observatorio de Salud Pública
            <br />
            Facultad de Medicina, Universidad de los Andes
          </p>
        </div>

        <p className="site-footer__note">
          Perfil epidemiológico con datos ilustrativos, inspirado en el formato de perfiles de ciudad
          de SALURBAL. No sustituye fuentes oficiales.
        </p>
      </div>

      <div className="container site-footer__legal">
        <p>© 2026 Observatorio de Salud Pública. Datos ilustrativos con fines de demostración.</p>
      </div>
    </footer>
  )
}
