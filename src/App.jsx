import './App.css'

const navigation = ['Inicio', 'Comentarios', 'Noticias', 'Inscripción']

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

const newsItems = [
  {
    category: 'Formación docente',
    title: 'Nuevos programas para fortalecer la práctica educativa',
    date: '12 Ago 2026',
    summary:
      'Exploramos herramientas y metodologías actuales para acompañar mejor a estudiantes y comunidades.',
  },
  {
    category: 'Tecnología',
    title: 'Robótica y programación, una oportunidad de innovación',
    date: '20 Ago 2026',
    summary:
      'Los cursos tecnológicos impulsan habilidades prácticas con enfoque real y aplicable al mercado laboral.',
  },
  {
    category: 'Desarrollo profesional',
    title: 'Habilidades clave para mejorar tus oportunidades laborales',
    date: '03 Sep 2026',
    summary:
      'Aprender a comunicarte, liderar y adaptarte al entorno laboral marca la diferencia en cada carrera.',
  },
]

const footerSedes = [
  'Encarnación',
  'Hohenau',
  'María Auxiliadora',
  'Santa Rita',
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
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
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

      <main className="page-main">
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

        <section className="news-section section" id="noticias">
          <div className="container">
            <div className="section-header align-left">
              <span className="eyebrow eyebrow-dark">Noticias</span>
              <h2>Actualidad y oportunidades</h2>
            </div>

            <div className="news-layout">
              <article className="news-featured-card">
                <div className="news-featured-image">
                  <img
                    src="https://eurosur.edu.py/wp-content/uploads/2024/11/WEB-ROBOTICA-PROGRAMACION-1.png"
                    alt="Curso de robótica y programación"
                  />
                </div>

                <div className="news-featured-copy">
                  <span className="news-tag">Destacado</span>
                  <h3>Robótica y programación para aprender creando</h3>
                  <p>
                    Nuevas propuestas para desarrollar pensamiento crítico,
                    creatividad y habilidades digitales de forma práctica.
                  </p>
                  <a href="#inscribite" className="text-link">
                    Ver más
                  </a>
                </div>
              </article>

              <div className="news-list" aria-label="Lista de noticias">
                {newsItems.map(({ category, title, date, summary }) => (
                  <article key={title} className="news-item">
                    <div className="news-item-top">
                      <span>{category}</span>
                      <time>{date}</time>
                    </div>

                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <a href="#inscribite" className="text-link">
                      Leer noticia
                    </a>
                  </article>
                ))}
              </div>
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

        <section className="news-form-section section" id="formulario-noticia">
          <div className="container news-form-container">
            <div className="news-form-copy">
              <span className="eyebrow eyebrow-dark">Formulario noticia</span>
              <h2>Envía una noticia o propuesta</h2>
              <p>
                Compartí información relevante para nuestra comunidad educativa,
                programas, eventos o actividades destacadas.
              </p>
            </div>

            <form className="news-form">
              <div className="field">
                <label htmlFor="news-title">Título</label>
                <input
                  id="news-title"
                  type="text"
                  name="news-title"
                  placeholder="Ej: Jornada de innovación educativa"
                />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="news-category">Categoría</label>
                  <input
                    id="news-category"
                    type="text"
                    name="news-category"
                    placeholder="Ej: Educación"
                  />
                </div>

                <div className="field">
                  <label htmlFor="news-author">Autor</label>
                  <input
                    id="news-author"
                    type="text"
                    name="news-author"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="news-message">Detalle</label>
                <textarea
                  id="news-message"
                  name="news-message"
                  rows="5"
                  placeholder="Escribe el contenido de la noticia o propuesta"
                />
              </div>

              <button type="submit" className="button button-primary button-block">
                Enviar noticia
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img
              src="https://eurosur.edu.py/wp-content/uploads/2024/08/logoeurosur-blanco.png"
              alt="Logo Eurosur"
            />
            <p>
              Capacítate y alcanza nuevas metas con Eurosur.
            </p>
          </div>

          <div className="footer-links">
            <h3>Secciones</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#comentarios">Comentarios</a></li>
              <li><a href="#noticias">Noticias</a></li>
              <li><a href="#inscribite">Inscripción</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Sedes</h3>
            <ul>
              {footerSedes.map((sede) => (
                <li key={sede}>{sede}</li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contacto</h3>
            <ul>
              <li><a href="http://wa.me/595975767720" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://campus.eurosur.edu.py/" target="_blank" rel="noreferrer">Campus Virtual</a></li>
              <li><a href="https://www.facebook.com/eurosur" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/eurosur/" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 EUROSUR. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  )
}

export default App;
