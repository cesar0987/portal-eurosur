import './App.css'

const navigation = ['Inicio', 'Comentarios', 'Inscripción']

const highlights = [
  'Docentes expertos',
  'Prácticas reales',
  'Oportunidades laborales',
]

const comments = [
  {
    name: 'Estudiante',
    role: 'Formación docente',
    text:
      'La experiencia de aprendizaje me ayudó a fortalecer mis habilidades y seguir creciendo en mi carrera.',
  },
  {
    name: 'Participante',
    role: 'Técnica y laboral',
    text:
      'Un enfoque práctico y dinámico que hace que cada clase aporte valor real al día a día profesional.',
  },
  {
    name: 'Aprendiz',
    role: 'Desarrollo personal',
    text:
      'La formación brindada por Eurosur me permitió avanzar con confianza, disciplina y nuevas oportunidades.',
  },
]

function App() {
  return (
    <div className="eurosur-page">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#inicio" aria-label="Eurosur">
            <img
              src="https://eurosur.edu.py/wp-content/uploads/2024/08/logoeurosur-blanco.png"
              alt="Logo de Eurosur"
            />
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            className="button button-primary"
            href="https://campus.eurosur.edu.py/"
            target="_blank"
            rel="noreferrer"
          >
            Campus Virtual
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Institución educativa</span>
              <h1>Capacítate y alcanza nuevas metas con Eurosur</h1>
              <p>
                Llevando su aprendizaje en línea y a distancia hasta nuevas alturas.
                Contabilidad, diseño gráfico, gestión empresarial y más…
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#inscribite">
                  Conocer más
                </a>
                <a
                  className="button button-secondary"
                  href="https://campus.eurosur.edu.py/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Campus Virtual
                </a>
              </div>

              <ul className="highlights" aria-label="Puntos clave">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="hero-media">
              <div className="media-frame">
                <img
                  src="https://eurosur.edu.py/wp-content/uploads/2024/11/EDIFICIO.png"
                  alt="Edificio de Eurosur"
                />
              </div>

              <div className="floating-card">
                <span className="tag">Formación</span>
                <strong>Docente • Técnica • Laboral</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="comment-section section" id="comentarios">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow eyebrow-dark">Experiencias</span>
              <h2>Un camino pensado para crecer</h2>
            </div>

            <div className="comment-grid">
              {comments.map(({ name, role, text }) => (
                <article key={name} className="comment-card">
                  <div className="comment-avatar" aria-hidden="true">
                    {name.charAt(0)}
                  </div>

                  <div className="comment-content">
                    <p>{text}</p>

                    <div className="comment-meta">
                      <strong>{name}</strong>
                      <span>{role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="form-section section" id="inscribite">
          <div className="container form-grid">
            <div className="form-copy">
              <span className="eyebrow">Inscripción</span>
              <h2>Inscríbete a nuestros cursos ahora</h2>
              <p>
                Ofrecemos formación de calidad, con programas actualizados que te
                preparan para las demandas del mercado laboral.
              </p>

              <ul className="detail-list">
                <li>Programas actuales y prácticos</li>
                <li>Docentes con experiencia</li>
                <li>Modalidad presencial, en línea o híbrida</li>
              </ul>
            </div>

            <form className="contact-form">
              <div className="field">
                <label htmlFor="name">Nombre</label>
                <input id="name" type="text" name="name" placeholder="Tu nombre" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tuemail@ejemplo.com"
                />
              </div>

              <div className="field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos qué te gustaría estudiar"
                  rows="5"
                />
              </div>

              <button type="submit" className="button button-primary button-block">
                Reservar
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
