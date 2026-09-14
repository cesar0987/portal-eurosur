/**
 * Contenido y textos del sitio
 * Centralizado para fácil mantenimiento y actualizaciones
 */

export const MENU_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Niveles Educativos", href: "#niveles", submenu: true },
  { label: "Contacto", href: "#contacto" },
];

export const EDUCATIONAL_LEVELS = [
  {
    id: "formacion-docente",
    title: "Instituto de Formación Docente",
    icon: "https://eurosur.edu.py/wp-content/uploads/2024/11/empresa.png",
  },
  {
    id: "instituto-tecnico",
    title: "Instituto Técnico Superior",
    icon: "https://eurosur.edu.py/wp-content/uploads/2024/11/trabajador.png",
  },
  {
    id: "formacion-laboral",
    title: "Centro de Formación y Capacitación Laboral",
    icon: "https://eurosur.edu.py/wp-content/uploads/2024/11/lenguaje-de-programacion.png",
  },
];

export const COURSES = [
  {
    id: "robotica",
    title: "Robótica y Programación",
    category: "Tecnología",
    rating: 4.5,
    students: "60+",
    image:
      "https://eurosur.edu.py/wp-content/uploads/2024/11/WEB-ROBOTICA-PROGRAMACION-1.png",
  },
  {
    id: "ingles",
    title: "Inglés Intensivo",
    category: "Negocios",
    rating: 4.8,
    students: "100+",
    image: "https://eurosur.edu.py/wp-content/uploads/2024/11/WEB-INGLES.png",
  },
  {
    id: "diseno",
    title: "Informática y Diseño Gráfico",
    category: "Comunicación",
    rating: 4.7,
    students: "40+",
    image:
      "https://eurosur.edu.py/wp-content/uploads/2024/11/WEB-DISENO-INFORMATICA.png",
  },
];

export const LOCATIONS = [
  {
    id: "encarnacion",
    name: "Encarnación",
    address: "Calle Gral. Artigas 1433 c/ Villarrica",
    phone: "0975 767 720",
  },
  {
    id: "hohenau",
    name: "Hohenau",
    address: "Av. San Roque González esq. Carlos Reverchon",
    phone: "0973 215 665",
  },
  {
    id: "maria-auxiliadora",
    name: "Ma. Auxiliadora",
    address: "Av. Tomás R. Pereira esq. Tajy",
    phone: "0986 852 312",
  },
  {
    id: "santa-rita",
    name: "Santa Rita",
    address: "Fulgencio R. Moreno esq. Acosta Ñú",
    phone: "0975 530 222",
  },
];

export const FEATURES = [
  "Formación de calidad con programas actualizados",
  "Docentes expertos con experiencia profesional",
  "Prácticas reales y red de contactos profesionales",
];

export const COPYWRITING = {
  hero: "Capacítate y alcanza nuevas metas con Eurosur. Llevando su aprendizaje en línea y a distancia hasta nuevas alturas.",
  whyChoose:
    "Ofrecemos formación de calidad, con programas actualizados que te preparan para las demandas del mercado laboral. Contamos con docentes expertos, prácticas reales, y una red de contactos que te ayudará a crecer profesionalmente.",
  courses:
    "¡Aprende rápido, crece más! Descubre los cursos cortos, diseñados para mejorar tus habilidades en el menor tiempo posible.",
  ctaFinal:
    "Te ofrecemos programas innovadores que te abren puertas hacia un mundo de oportunidades.",
};
