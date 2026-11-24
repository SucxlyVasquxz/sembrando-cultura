import React, { useState } from 'react';
import { culturalData } from '../data/culturalData';
import CulturalImage from './CulturalImage';

export default function ProblemSection() {
  const [selectedCause, setSelectedCause] = useState(culturalData.causes[0].id);
  const [openMyth, setOpenMyth] = useState(0);

  const activeCauseData = culturalData.causes.find(c => c.id === selectedCause) || culturalData.causes[0];

  return (
    <section id="panorama" className="section-container">
      <div className="section-header">
        <span className="section-kicker">Diagnóstico Escolar</span>
        <h2 className="section-title">¿Por qué estamos perdiendo nuestra identidad cultural?</h2>
        <p className="section-subtitle">
          La pérdida de identidad no ocurre de la noche a la mañana. Es un proceso silencioso 
          alimentado por presiones sociales, vergüenza lingüística, burlas cotidianas y currículos 
          desconectados de la realidad comunitaria.
        </p>
      </div>

      {/* Causas interactivas con imagen estratégica */}
      <div className="causes-interactive-grid">
        <div className="causes-nav">
          {culturalData.causes.map((cause) => (
            <button
              key={cause.id}
              type="button"
              className={`cause-nav-item ${selectedCause === cause.id ? 'active' : ''}`}
              onClick={() => setSelectedCause(cause.id)}
            >
              <div className="cause-nav-icon">
                {cause.icon === 'speech' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                )}
                {cause.icon === 'globe' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                )}
                {cause.icon === 'people' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                )}
                {cause.icon === 'book' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                )}
              </div>
              <div className="cause-nav-text">
                <strong>{cause.title}</strong>
                <span>{cause.shortDesc}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="cause-detail-panel">
          <div className="cause-badge">Análisis Profundo</div>
          <h3>{activeCauseData.title}</h3>

          {activeCauseData.image && (
            <CulturalImage
              src={activeCauseData.image}
              alt={activeCauseData.title}
              caption={activeCauseData.imageCaption}
              tag={activeCauseData.imageTag}
              aspectRatio="16/9"
              className="cause-image-box"
            />
          )}

          <p className="cause-full-desc">{activeCauseData.fullDesc}</p>
          
          <div className="cause-callout cause-impact">
            <span className="callout-tag alert">Impacto en la Persona:</span>
            <p>{activeCauseData.impacto}</p>
          </div>

          <div className="cause-callout cause-warning">
            <span className="callout-tag warning">¿Cómo detectarlo en el aula? (Alerta Escolar):</span>
            <p>{activeCauseData.alertaEscolar}</p>
          </div>
        </div>
      </div>

      {/* Consecuencias críticas */}
      <div className="consequences-wrapper">
        <h3 className="sub-heading">Las Consecuencias Invisibles de la Pérdida de Identidad</h3>
        <div className="consequences-grid">
          {culturalData.consequences.map((item, idx) => (
            <div key={idx} className="consequence-card">
              <div className="consequence-idx">0{idx + 1}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mitos vs Realidades */}
      <div className="myths-wrapper">
        <h3 className="sub-heading">Mitos vs. Realidades sobre la Identidad Cultural</h3>
        <p className="myths-intro">
          Para transformar nuestra escuela, primero debemos derribar las falsas creencias 
          que hacen que muchos alumnos y profesores desvaloricen lo local:
        </p>

        <div className="myths-list">
          {culturalData.myths.map((item, index) => {
            const isOpen = openMyth === index;
            return (
              <div key={index} className={`myth-card ${isOpen ? 'open' : ''}`}>
                <button 
                  type="button" 
                  className="myth-header"
                  onClick={() => setOpenMyth(isOpen ? -1 : index)}
                >
                  <div className="myth-title-row">
                    <span className="myth-label">Mito:</span>
                    <span className="myth-question">"{item.myth}"</span>
                  </div>
                  <span className="myth-toggle">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="myth-body">
                    <div className="reality-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="check-icon">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Realidad Emancipadora:
                    </div>
                    <p className="reality-text">{item.reality}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
