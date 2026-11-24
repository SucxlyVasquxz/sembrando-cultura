import React, { useState } from 'react';
import { culturalData } from '../data/culturalData';

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const question = culturalData.quizQuestions[currentQuestion];
  const totalQuestions = culturalData.quizQuestions.length;

  const handleSelectOption = (qId, option) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: option
    }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResult(false);
  };

  // Calcular puntaje
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + (curr?.score || 0), 0);

  const getProfile = (score) => {
    if (score >= 13) {
      return {
        level: "Guardián de la Identidad y la Pertenencia",
        icon: "🌳",
        tagline: "¡Tus raíces son sólidas, vivas y dan sombra protectora a los demás!",
        color: "text-green",
        description: "Tienes una conciencia cultural profunda y generosa. Entiendes que la tradición y la modernidad dialogan, no te da pena tu origen y defiendes la dignidad de tus compañeros frente al prejuicio.",
        nextStep: "Conviértete en facilitador: impulsa un club escolar de saberes locales, graba entrevistas a ancianos de tu comunidad o apoya a compañeros que sientan timidez por su acento o costumbres."
      };
    } else if (score >= 9) {
      return {
        level: "Raíz en Crecimiento",
        icon: "🌱",
        tagline: "¡Tienes curiosidad genuina y estás comenzando a valorar tu historia!",
        color: "text-blue",
        description: "Valoras las costumbres de tu familia y sabes que la diversidad importa, aunque a veces la presión social de las redes o el miedo al qué dirán te hacen dudar de mostrarte al 100%.",
        nextStep: "Atrévete a dar un paso más: pregunta hoy en casa por el significado de tus apellidos o el origen de tus abuelos. Lo que descubras te llenará de orgullo."
      };
    } else {
      return {
        level: "Semilla por Despertar",
        icon: "🌰",
        tagline: "¡Estás a tiempo de descubrir la inmensa riqueza que llevas dentro!",
        color: "text-amber",
        description: "Quizás nunca te habías detenido a pensar en esto, o sentías que la cultura era algo lejano o anticuado. La buena noticia es que tus raíces están vivas en ti, esperando ser regadas con atención y cariño.",
        nextStep: "Empieza por algo sencillo: platica con alguien mayor de tu familia sobre cómo era su infancia, escucha con atención y nota cómo su historia también forma parte de ti."
      };
    }
  };

  const currentSelection = answers[question?.id];

  return (
    <section id="test" className="section-container">
      <div className="section-header">
        <span className="section-kicker">Autoevaluación Consciente</span>
        <h2 className="section-title">Mi Brújula Cultural: ¿Qué tan conectado estás con tus raíces?</h2>
        <p className="section-subtitle">
          Un breve test interactivo para reflexionar sobre tus actitudes cotidianas frente a tu origen, 
          el respeto a la diversidad y el sentido de pertenencia en tu escuela.
        </p>
      </div>

      <div className="quiz-card-wrapper">
        {!showResult ? (
          <div className="quiz-card">
            <div className="quiz-progress-bar">
              <div 
                className="quiz-progress-fill" 
                style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>

            <div className="quiz-header-meta">
              <span className="quiz-counter">Pregunta {currentQuestion + 1} de {totalQuestions}</span>
              <span className="quiz-hint">Elige la opción que mejor describa lo que sientes o haces:</span>
            </div>

            <h3 className="quiz-question-title">{question.question}</h3>

            <div className="quiz-options-list">
              {question.options.map((opt, idx) => {
                const isSelected = currentSelection?.text === opt.text;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`quiz-option-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(question.id, opt)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="option-text">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Retroalimentación inmediata si hay opción seleccionada */}
            {currentSelection && (
              <div className="quiz-feedback-box">
                <span className="feedback-tag">Reflexión pedagógica:</span>
                <p>{currentSelection.feedback}</p>
              </div>
            )}

            <div className="quiz-nav-actions">
              <button 
                type="button" 
                className="btn btn-outline-sm"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                Anterior
              </button>

              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!currentSelection}
              >
                {currentQuestion === totalQuestions - 1 ? 'Ver Mi Diagnóstico' : 'Siguiente Pregunta'}
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-result-card">
            {(() => {
              const profile = getProfile(totalScore);
              return (
                <>
                  <div className="result-icon-large">{profile.icon}</div>
                  <span className="result-kicker">Tu Diagnóstico de Pertenencia</span>
                  <h3 className={`result-title ${profile.color}`}>{profile.level}</h3>
                  <p className="result-tagline">"{profile.tagline}"</p>

                  <div className="result-score-badge">
                    Puntaje Obtenido: <strong>{totalScore} / 15 puntos</strong>
                  </div>

                  <p className="result-description">{profile.description}</p>

                  <div className="result-next-step">
                    <h4>Paso transformador sugerido:</h4>
                    <p>{profile.nextStep}</p>
                  </div>

                  <div className="result-actions">
                    <button type="button" className="btn btn-outline" onClick={resetQuiz}>
                      Repetir el Test
                    </button>
                    <a href="#muro" className="btn btn-primary">
                      Sembrar mi Compromiso en el Muro
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}

