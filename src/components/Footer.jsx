import React from 'react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="brand-logo footer-logo">
            <div className="logo-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sprout-icon">
                <path d="M7 20h10" />
                <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4.1 5.5.8z" />
                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">Sembrando</span>
              <span className="brand-subtitle">Identidad & Pertenencia</span>
            </div>
          </div>
          <p className="footer-desc">
            Iniciativa pedagógica para sembrar en cada aula el respeto profundo por las raíces, 
            la historia comunitaria y el orgullo de origen de estudiantes y maestros.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación Rápida</h4>
          <ul className="footer-links">
            <li><button type="button" onClick={() => scrollTo('panorama')}>Causas de la Pérdida</button></li>
            <li><button type="button" onClick={() => scrollTo('importancia')}>Importancia y Valor</button></li>
            <li><button type="button" onClick={() => scrollTo('alumnos')}>Guía para Alumnos</button></li>
            <li><button type="button" onClick={() => scrollTo('profesores')}>Recursos para Profesores</button></li>
            <li><button type="button" onClick={() => scrollTo('dinamicas')}>Dinámicas de Aula</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Acciones Escolares</h4>
          <ul className="footer-links">
            <li><button type="button" onClick={() => scrollTo('test')}>Test: Mi Brújula Cultural</button></li>
            <li><button type="button" onClick={() => scrollTo('decalogo')}>Decálogo Escolar Imprimible</button></li>
            <li><button type="button" onClick={() => scrollTo('muro')}>Muro de Compromisos</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Para Recordar Siempre</h4>
          <div className="footer-reminder-box">
            <p>
              «Un pueblo sin conocimiento de su historia pasada, origen y cultura es como un árbol sin raíces.»
            </p>
            <span>— Marcus Garvey</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© 2026 Sembrando Identidad • Concientización Escolar para la Transformación Social y Cultural.</p>
        <p>Material pedagógico libre y abierto para ser replicado en todas las escuelas.</p>
      </div>
    </footer>
  );
}

