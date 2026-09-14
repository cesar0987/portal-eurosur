/**
 * Layout Principal
 * Estructura base de todas las páginas
 */

import { Footer } from "../components";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
