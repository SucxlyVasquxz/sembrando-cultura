import React, { useState } from 'react';
import { culturalData } from '../data/culturalData';
import CulturalImage from './CulturalImage';

export default function TeachersView() {
  const [checklist, setChecklist] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false
  });

  const checklistItems = [
    {
      id: "item1",
      text: "En mis clases utilizo ejemplos, literatura y referencias de autores y saberes locales o regionales, no solo extranjeros o centralistas."
    },
    {
      id: "item2",
      text: "He establecido normas explícitas de aula donde las burlas por acentos, apellidos o rasgos físicos son tratadas de raíz como discriminación inaceptable."
    },
    {
      id: "item3",
      text: "Conozco el contexto cultural, familiar y comunitario de la mayoría de mis estudiantes y me intereso por sus historias de vida."
    },
    {
      id: "item4",
      text: "Invito o motivo a los estudiantes a consultar a sus abuelos y familiares mayores como fuentes legítimas de información e investigación."
    },
    {
      id: "item5",
      text: "En lugar de imponer un estándar lingüístico rígido y excluyente, promuevo el aprecio por la diversidad de hablas, lenguas y dialectos."
    }
  ];

  const handleToggle = (id) => {
    setChecklist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;

  return (
    <section id="profesores" className="section-container role-section teacher-theme">
      <div className="section-header">
        <div className="role-pill teacher-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          Guía Pedagógica para Docentes y Directivos
        </div>
        <h2 className="section-title">El aula como semillero de dignidad e interculturalidad</h2>
        <p className="section-subtitle">
          {culturalData.teachersGuide.intro}
        </p>
      </div>

      {/* Banner Fotográfico Docente */}
      <div className="role-banner-showcase">
        <CulturalImage
          src={culturalData.teachersGuide.bannerImage}
          alt="Docente interactuando con estudiantes"
          caption={culturalData.teachersGuide.bannerCaption}
          tag={culturalData.teachersGuide.bannerTag}
          aspectRatio="21/8"
          className="role-banner-img"
        />
      </div>

      {/* Principios pedagógicos */}
      <div className="teacher-principles-grid">
        {culturalData.teachersGuide.keyPrinciples.map((principle, idx) => (
          <div key={idx} className="teacher-principle-card">
            <div className="principle-number">0{idx + 1}</div>
            <h3>{principle.title}</h3>
            <p className="principle-desc">{principle.description}</p>
            <div className="teacher-tip-box">
              <span className="tip-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="tip-icon">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                Estrategia práctica para mañana en clase:
              </span>
              <p className="tip-content">{principle.tip}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Autoevaluación interactiva del docente */}
      <div className="teacher-audit-box">
        <div className="audit-header">
          <div>
            <h3>Autodiagnóstico del Aula Intercultural</h3>
            <p>Evalúa de forma sincera tus prácticas pedagógicas cotidianas frente a la identidad y pertenencia:</p>
          </div>
          <div className="audit-score-badge">
            <span className="score-num">{completedCount}/5</span>
            <span className="score-text">Criterios activos</span>
          </div>
        </div>

        <div className="audit-list">
          {checklistItems.map(item => {
            const isChecked = checklist[item.id];
            return (
              <label 
                key={item.id} 
                className={`audit-item ${isChecked ? 'active' : ''}`}
              >
                <input 
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle(item.id)}
                />
                <span className="audit-custom-check">
                  {isChecked && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </span>
                <span className="audit-text">{item.text}</span>
              </label>
            );
          })}
        </div>

        <div className="audit-feedback">
          {completedCount === 5 ? (
            <p className="feedback-text text-green">
              <strong>¡Extraordinario compromiso docente!</strong> Tu aula es un refugio inspirador de identidad, pertenencia y descolonización del aprendizaje. Comparte tus metodologías con otros colegas en el consejo técnico.
            </p>
          ) : completedCount >= 3 ? (
            <p className="feedback-text text-blue">
              <strong>¡Vas por muy buen camino!</strong> Tienes una sensibilidad valiosa hacia tus estudiantes. Revisa los criterios pendientes para seguir fortaleciendo el tejido cultural de tu grupo.
            </p>
          ) : (
            <p className="feedback-text text-amber">
              <strong>Oportunidad de transformación:</strong> Pequeños cambios en cómo validamos los orígenes familiares y el lenguaje de los alumnos pueden encender una chispa de dignidad que les durará toda la vida.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
