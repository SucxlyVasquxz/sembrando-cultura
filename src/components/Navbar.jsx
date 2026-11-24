import React from 'react';

export default function Navbar({ activeFilter, setActiveFilter }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#inicio" className="brand-logo">
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
        </a>

        <nav className="main-nav">
          <a href="#panorama">Causas & Pérdida</a>
          <a href="#importancia">Importancia</a>
          <a href="#alumnos">Alumnos</a>
          <a href="#profesores">Profesores</a>
          <a href="#dinamicas">Dinámicas</a>
          <a href="#test">Test</a>
          <a href="#muro">Muro</a>
        </nav>

        <div className="role-switcher">
          <span className="role-label">Enfoque:</span>
          <button 
            type="button"
            className={`role-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </button>
          <button 
            type="button"
            className={`role-btn ${activeFilter === 'alumnos' ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter('alumnos');
              const el = document.getElementById('alumnos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Alumnos
          </button>
          <button 
            type="button"
            className={`role-btn ${activeFilter === 'profesores' ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter('profesores');
              const el = document.getElementById('profesores');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Docentes
          </button>
        </div>
      </div>
    </header>
  );
}

