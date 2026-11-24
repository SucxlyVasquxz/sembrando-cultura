import React, { useState } from 'react';
import { culturalData } from '../data/culturalData';
import CulturalImage from './CulturalImage';

export default function StudentsView() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [completedChallenges, setCompletedChallenges] = useState({});

  const challenges = [
    {
      id: "c1",
      title: "El audio de 3 minutos",
      desc: "Pídele a tu mamá, papá o abuelo que te cuente una anécdota de cómo era su pueblo o barrio cuando eran niños. Graba su voz para siempre."
    },
    {
      id: "c2",
      title: "El platillo con historia",
      desc: "Aprende a preparar una receta tradicional de tu casa (aunque sea una salsa o bebida típica) y conoce quién se la enseñó a tu familia."
    },
    {
      id: "c3",
      title: "Defensa activa del respeto",
      desc: "Si escuchas a alguien burlarse del origen, dialecto o costumbre de un compañero en el recreo o en un grupo de WhatsApp, di con firmeza: 'Eso no da risa, respeta su historia'."
    }
  ];

  const toggleChallenge = (id) => {
    setCompletedChallenges(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="alumnos" className="section-container role-section student-theme">
      <div className="section-header">
        <div className="role-pill student-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
          Zona de Concientización Estudiantil
        </div>
        <h2 className="section-title">¡Tu origen no es un límite, es tu mayor superpoder!</h2>
        <p className="section-subtitle">
          {culturalData.studentsGuide.intro}
        </p>
      </div>

      {/* Banner Fotográfico Estudiantil */}
      <div className="role-banner-showcase">
        <CulturalImage
          src={culturalData.studentsGuide.bannerImage}
          alt="Estudiantes en el aula"
          caption={culturalData.studentsGuide.bannerCaption}
          tag={culturalData.studentsGuide.bannerTag}
          aspectRatio="21/8"
          className="role-banner-img"
        />
      </div>

      {/* Pilares para estudiantes */}
      <div className="student-pillars-grid">
        {culturalData.studentsGuide.pillars.map((pillar, idx) => (
          <div key={idx} className="student-pillar-card">
            <div className="pillar-header">
              <span className="pillar-tag">Pilar {idx + 1}</span>
              <h3>{pillar.title}</h3>
            </div>
            <p className="pillar-desc">{pillar.description}</p>
            <div className="pillar-action-box">
              <span className="action-label">Acción inmediata para ti:</span>
              <p className="action-text">{pillar.action}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Retos semanales interactivos */}
      <div className="student-challenges-panel">
        <div className="challenges-header">
          <div>
            <h3>Retos de la Semana: "Siembra tu propia raíz"</h3>
            <p>Pequeñas acciones cotidianas que transforman cómo te ves a ti mismo y a tus raíces.</p>
          </div>
          <span className="challenges-counter">
            {Object.values(completedChallenges).filter(Boolean).length} de {challenges.length} completados
          </span>
        </div>

        <div className="challenges-list">
          {challenges.map((c) => {
            const isDone = !!completedChallenges[c.id];
            return (
              <div 
                key={c.id} 
                className={`challenge-item ${isDone ? 'completed' : ''}`}
                onClick={() => toggleChallenge(c.id)}
              >
                <div className="checkbox-visual">
                  {isDone ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : null}
                </div>
                <div className="challenge-content">
                  <strong>{c.title}</strong>
                  <p>{c.desc}</p>
                </div>
                <span className="challenge-badge">
                  {isDone ? '¡Logrado!' : 'Pendiente'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preguntas de autoexploración */}
      <div className="student-questions-section">
        <h3>Preguntas para reflexionar frente al espejo</h3>
        <p className="questions-intro">Haz clic en cada pregunta para descubrir una pista que te ayudará a pensar en tu respuesta:</p>
        <div className="questions-accordion">
          {culturalData.studentsGuide.reflectionQuestions.map((q, idx) => {
            const isOpen = activeQuestion === idx;
            const clues = [
              "Piensa en los domingos familiares, en los aromas de la cocina de tu abuela o en las palabras que solo se dicen en tu casa.",
              "A veces la sociedad nos hace creer que lo extranjero vale más. Date cuenta de que imitar a otros solo te hace una copia, mientras que tu raíz te hace irrepetible.",
              "Tus abuelos cruzaron desafíos increíbles, migraron o aprendieron oficios admirables para que hoy estés aquí. ¡Descubre su épica!",
              "El rap en lenguas indígenas, los videojuegos basados en leyendas locales o el diseño textil contemporáneo demuestran que la cultura es el mejor combustible del futuro."
            ];

            return (
              <div key={idx} className={`question-card ${isOpen ? 'active' : ''}`}>
                <button 
                  type="button" 
                  className="question-trigger"
                  onClick={() => setActiveQuestion(isOpen ? null : idx)}
                >
                  <span className="question-text">{q}</span>
                  <span className="question-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="question-clue">
                    <span className="clue-tag">Pista de autorreflexión:</span>
                    <p>{clues[idx]}</p>
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
