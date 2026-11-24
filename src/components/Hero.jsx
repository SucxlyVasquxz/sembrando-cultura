import React from 'react';
import { culturalData } from '../data/culturalData';
import CulturalImage from './CulturalImage';

export default function Hero({ setActiveFilter }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-badge">
        <span className="badge-pulse"></span>
        Campaña de Concientización Escolar • Comunidades Educativas
      </div>

      <h1 className="hero-main-title">
        Nuestras raíces nos sostienen: <br />
        <span className="title-gradient">Sembremos identidad y pertenencia</span> en la escuela
      </h1>

      <p className="hero-subtext">
        En un mundo globalizado que a menudo impone modas pasajeras y diluye lo propio, 
        es urgente que <strong>estudiantes</strong> y <strong>profesores</strong> reconozcan 
        el valor insustituible de su historia, lengua, memorias familiares y tradiciones. 
        Un árbol con raíces profundas jamás teme a las tormentas.
      </p>

      <div className="hero-actions">
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => {
            setActiveFilter('alumnos');
            scrollTo('alumnos');
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          Guía para Alumnos
        </button>

        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={() => {
            setActiveFilter('profesores');
            scrollTo('profesores');
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Recursos para Profesores
        </button>

        <button 
          type="button" 
          className="btn btn-outline"
          onClick={() => scrollTo('test')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
          Test: Mi Brújula Cultural
        </button>
      </div>

      {/* Imagen Hero Estratégica */}
      <div className="hero-showcase">
        <CulturalImage
          src={culturalData.heroImages.main}
          alt={culturalData.heroImages.mainAlt}
          caption={culturalData.heroImages.mainCaption}
          tag="Comunidad Escolar Intercultural"
          aspectRatio="21/9"
          className="hero-main-image"
          loading="eager"
        />
      </div>

      {/* Tarjetas de estadísticas de concientización */}
      <div className="stats-grid">
        {culturalData.stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-detail">{stat.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
