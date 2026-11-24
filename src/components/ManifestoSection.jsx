import React, { useState } from 'react';
import { culturalData } from '../data/culturalData';

export default function ManifestoSection() {
  const [copied, setCopied] = useState(false);

  const copyDecalogo = () => {
    const text = `
DECÁLOGO ESCOLAR POR LA IDENTIDAD Y LA PERTENENCIA
Campaña: Sembrando Identidad en las Escuelas

${culturalData.decalogo.map(d => `${d.num}. ${d.title.toUpperCase()}\n   ${d.text}`).join('\n\n')}

"Sembramos raíces para dar alas al futuro."
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="decalogo" className="section-container bg-subtle">
      <div className="section-header">
        <span className="section-kicker">Compromiso Institucional</span>
        <h2 className="section-title">Decálogo Escolar por la Identidad y la Pertenencia</h2>
        <p className="section-subtitle">
          Diez principios fundamentales para colocar en el periódico mural, leer en asambleas 
          cívicas e integrar en el reglamento de convivencia escolar.
        </p>
      </div>

      <div className="decalogo-action-bar">
        <button type="button" className="btn btn-outline-sm" onClick={copyDecalogo}>
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon"><polyline points="20 6 9 17 4 12"/></svg>
              ¡Decálogo Copiado al Portapapeles!
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              Copiar Texto del Decálogo
            </>
          )}
        </button>

        <button type="button" className="btn btn-secondary-sm" onClick={handlePrint}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Imprimir / Guardar como Cartel PDF
        </button>
      </div>

      <div className="decalogo-grid">
        {culturalData.decalogo.map((item) => (
          <div key={item.num} className="decalogo-card">
            <div className="decalogo-num">{item.num}</div>
            <div className="decalogo-content">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

