/**
 * Componente Footer
 * Muestra las 4 sedes, redes sociales y links importantes
 */
import { LOCATIONS } from "../constants/content";
import { BRAND, SOCIAL, LINKS, COLORS } from "../constants/branding";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Secciones */}
        <div className="footer-grid">
          {/* Sedes */}
          <div className="footer-section">
            <h3 className="footer-title">Nuestras Sedes</h3>
            <ul className="locations-list">
              {LOCATIONS.map((location) => (
                <li key={location.id} className="location-item">
                  <span className="location-name">{location.name}</span>
                  <p className="location-address">{location.address}</p>
                  <a href={`tel:${location.phone}`} className="location-phone">
                    {location.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Rápidos */}
          <div className="footer-section">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li>
                <a
                  href={LINKS.campusVirtual}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🎓 Campus Virtual
                </a>
              </li>
              <li>
                <a
                  href={LINKS.biblioteca}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📖 Biblioteca CICCO
                </a>
              </li>
              <li>
                <a href={`tel:${SOCIAL.phone}`}>{SOCIAL.phone}</a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="footer-section">
            <h3 className="footer-title">Síguenos</h3>
            <ul className="social-links">
              <li>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="contact-info">
              <p>
                <strong>{BRAND.name}</strong>
              </p>
              <p>Desde {BRAND.since}</p>
              <p className="tagline">{BRAND.tagline}</p>
              <a href={`tel:${SOCIAL.phone}`} className="cta-button">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="footer-divider" />

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} {BRAND.name}. Todos los derechos
            reservados.
          </p>
          <div className="footer-legal">
            <a href="#privacidad">Privacidad</a>
            <a href="#terminos">Términos de Servicio</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
