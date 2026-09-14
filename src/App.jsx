import { MainLayout } from "./layouts";
import "./App.css";

function App() {
  return (
    <MainLayout>
      <section id="inicio" className="hero-section">
        <div className="container">
          <h1>Bienvenido a EUROSUR</h1>
          <p>Capacítate y alcanza nuevas metas con nosotros</p>
        </div>
      </section>
    </MainLayout>
  );
}

export default App;
