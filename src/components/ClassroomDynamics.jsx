import React, { useState } from 'react';
import { culturalData } from '../data/culturalData';
import CulturalImage from './CulturalImage';

export default function ClassroomDynamics() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const dynamic = culturalData.classroomDynamics[activeTab];

  const copyToClipboard = () => {
    const textToCopy = `
PLAN DIDÁCTICO: ${dynamic.title}
Enfoque: ${dynamic.category}
Audiencia: ${dynamic.audience} | Duración: ${dynamic.duration}

OBJETIVO PEDAGÓGICO:
${dynamic.objective}

MATERIALES NECESARIOS:
${dynamic.materials}

PASO A PASO:
${dynamic.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

PREGUNTA DETONADORA DE REFLEXIÓN:
"${dynamic.reflexion}"

(Fuente: Campaña Sembrando Identidad y Pertenencia Escolar)
    `.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="dinamicas" className="section-container bg-subtle">
      <div className="section-header">
        <span className="section-kicker">Herramientas Prácticas</span>
        <h2 className="section-title">Banco de Dinámicas para el Aula y la Escuela</h2>
        <p className="section-subtitle">
          Actividades listas para implementar en clase. Diseñadas para activar el diálogo,
          reparar el tejido comunitario y hacer visible el valor de cada familia.
        </p>
      </div>

      {/* Tabs de dinámicas */}
      <div className="dynamics-tab-bar">
        {culturalData.classroomDynamics.map((d, index) => (
          <button
            key={d.id}
            type="button"
            className={`dynamic-tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="dynamic-tab-index">0{index + 1}</span>
            <span className="dynamic-tab-title">{d.title}</span>
          </button>
        ))}
      </div>

      {/* Ficha didáctica con fotografía estratégica */}
      <div className="dynamic-card-sheet">
        <div className="sheet-top-bar">
          <div>
            <span className="sheet-category-badge">{dynamic.category}</span>
            <h3 className="sheet-main-title">{dynamic.title}</h3>
          </div>
          <button
            type="button"
            className="btn btn-outline-sm"
            onClick={copyToClipboard}
            title="Copiar contenido de la dinámica para pegarlo en tu planeación docente"
          >
            {copied ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon"><polyline points="20 6 9 17 4 12" /></svg>
                ¡Ficha Copiada!
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                Copiar para Planeación
              </>
            )}
          </button>
        </div>

        {dynamic.image && (
          <div className="dynamic-image-wrap">
            <CulturalImage
              src={dynamic.image}
              alt={dynamic.title}
              caption={dynamic.imageCaption}
              tag={dynamic.imageTag}
              aspectRatio="21/9"
              className="dynamic-banner-img"
            />
          </div>
        )}

        <div className="sheet-meta-grid">
          <div className="meta-item">
            <span className="meta-label">Público Recomendado:</span>
            <span className="meta-value">{dynamic.audience}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Duración Estimada:</span>
            <span className="meta-value">{dynamic.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Materiales Requeridos:</span>
            <span className="meta-value">{dynamic.materials}</span>
          </div>
        </div>

        <div className="sheet-objective-box">
          <strong>Propósito formativo:</strong> {dynamic.objective}
        </div>

        <div className="sheet-steps-box">
          <h4>Secuencia Didáctica (Paso a Paso):</h4>
          <ol className="steps-ordered-list">
            {dynamic.steps.map((step, idx) => (
              <li key={idx} className="step-item">
                <span className="step-number">{idx + 1}</span>
                <span className="step-desc">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="sheet-reflexion-box">
          <div className="reflexion-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="reflexion-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <strong>Pregunta de Cierre para el Círculo de Reflexión:</strong>
          </div>
          <p className="reflexion-phrase">"{dynamic.reflexion}"</p>
        </div>
      </div>
    </section>
  );
}
