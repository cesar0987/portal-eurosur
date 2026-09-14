import { useState } from 'react'
import './App.css'

const noticias = [
  {
    id: 1,
    category: 'Vida institucional',
    date: '12 de septiembre, 2026',
    dateTime: '2026-09-12',
    title: 'EUROSUR abre un nuevo ciclo de oportunidades para su comunidad educativa',
    excerpt: 'Conocé las novedades, actividades y proyectos que hacen crecer nuestra comunidad.',
    image: 'https://eurosur.edu.py/wp-content/uploads/2024/11/EDIFICIO.png',
  },
  {
    id: 2,
    category: 'Formación profesional',
    date: '04 de septiembre, 2026',
    dateTime: '2026-09-04',
    title: 'Nuevos cursos para impulsar tus habilidades este semestre',
    excerpt: 'Programas actuales, acompañamiento docente y herramientas para tu próximo desafío.',
    image: 'https://eurosur.edu.py/wp-content/uploads/2024/11/WEB-ROBOTICA-PROGRAMACION-1.png',
  },
  {
    id: 3,
    category: 'Comunidad',
    date: '28 de agosto, 2026',
    dateTime: '2026-08-28',
    title: 'Aprender haciendo: experiencias que dejan huella',
    excerpt: 'Descubrí cómo nuestros estudiantes convierten el conocimiento en proyectos reales.',
    image: 'https://eurosur.edu.py/wp-content/uploads/2024/09/educator-img32.jpg',
  },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Eurosur, inicio">
          <span className="brand-mark">E</span>
          <span>
            <strong>EUROSUR</strong>
            <small>Educación que transforma</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
          <span className="sr-only">Abrir menú</span>
        </button>
        <nav id="main-navigation" className={menuOpen ? 'main-navigation is-open' : 'main-navigation'}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#noticias" onClick={() => setMenuOpen(false)}>Noticias</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          <a className="header-cta" href="https://campus.eurosur.edu.py/" target="_blank" rel="noreferrer">Campus Virtual <span>↗</span></a>
        </nav>
      </div>
    </header>
  )
}

function NoticiaCard({ noticia, featured = false }) {
  return (
    <article className={featured ? 'news-card news-card-featured' : 'news-card'}>
      <div className="news-image-wrap">
        <img src={noticia.image} alt="" className="news-image" />
        <span className="news-category">{noticia.category}</span>
      </div>
      <div className="news-content">
        <time dateTime={noticia.dateTime}>{noticia.date}</time>
        <h3>{noticia.title}</h3>
        <p>{noticia.excerpt}</p>
        <a className="read-more" href={`#noticia-${noticia.id}`}>Leer noticia <span aria-hidden="true">→</span></a>
      </div>
    </article>
  )
}

function ListaNoticias({ items }) {
  return (
    <div className="news-list">
      {items.map((noticia) => <NoticiaCard key={noticia.id} noticia={noticia} />)}
    </div>
  )
}

function FormularioNoticia() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <div className="form-intro">
        <span className="eyebrow">Comunidad Eurosur</span>
        <h2>¿Tenés una noticia para compartir?</h2>
        <p>Enviá tu propuesta y ayudanos a contar lo que hace crecer a nuestra comunidad.</p>
      </div>
      <div className="form-fields">
        <label>Nombre<input name="name" type="text" placeholder="Tu nombre" required /></label>
        <label>Correo electrónico<input name="email" type="email" placeholder="nombre@correo.com" required /></label>
        <label className="field-full">Título de la noticia<input name="title" type="text" placeholder="Un título claro y breve" required /></label>
        <label className="field-full">Descripción<textarea name="description" rows="4" placeholder="Contanos los detalles de la noticia" required></textarea></label>
        <button className="submit-button" type="submit">Enviar propuesta <span>→</span></button>
        {submitted && <p className="form-success" role="status">Tu propuesta fue recibida. Nos pondremos en contacto contigo.</p>}
      </div>
    </form>
  )
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="news-hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">Actualidad Eurosur</span>
            <h1>Historias que <em>inspiran</em><br />a seguir creciendo.</h1>
            <p>Conocé las noticias, experiencias y oportunidades de la comunidad educativa Eurosur.</p>
          </div>
          <div className="hero-note"><span>Desde 1995</span><strong>Formando<br />nuevos caminos</strong></div>
        </section>
        <section className="news-section" id="noticias">
          <div className="section-heading"><div><span className="eyebrow">Lo más reciente</span><h2>Noticias y novedades</h2></div><a className="outline-link" href="#noticias">Ver todas <span>↗</span></a></div>
          <div className="featured-grid"><NoticiaCard noticia={noticias[0]} featured /><ListaNoticias items={noticias.slice(1)} /></div>
        </section>
        <section className="form-section" id="contacto"><FormularioNoticia /></section>
      </main>
      <footer className="site-footer"><span>EUROSUR</span><p>Capacítate y alcanza nuevas metas con Eurosur.</p><a href="https://wa.me/595975767720">+595 975 767 720</a></footer>
    </div>
  )
}

export default App
