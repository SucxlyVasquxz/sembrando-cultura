import React from 'react';
import { culturalData } from '../data/culturalData';
import CulturalImage from './CulturalImage';

export default function ImportanceSection() {
  const pillars = culturalData.importancePillars;

  return (
    <section id="importancia" className="section-container bg-subtle">
      <div className="section-header">
        <span className="section-kicker">El Poder de Nuestras Raíces</span>
        <h2 className="section-title">La Importancia de la Identidad y el Sentido de Pertenencia</h2>
        <p className="section-subtitle">
          Pertenecer no es uniformarse; es saber que tu voz tiene peso, que tu historia es sagrada
          y que formas parte de una comunidad que te cuida y te impulsa.
        </p>
      </div>

      <div className="importance-grid">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="importance-card">
            <CulturalImage
              src={pillar.image}
              alt={pillar.title}
              caption={pillar.imageCaption}
              tag={pillar.imageTag}
              aspectRatio="16/10"
              className="importance-card-image"
            />
            <div className="importance-card-content">
              <h3>{pillar.title}</h3>
              <p className="importance-summary">{pillar.summary}</p>
              <p className="importance-desc">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quote-banner">
        <div className="quote-mark">“</div>
        <blockquote className="quote-body">
          «Nadie educa a nadie, nadie se educa a sí mismo; los hombres se educan entre sí con la mediación del mundo y de su cultura. La escuela que ignora las raíces de su pueblo solo enseña a callar y a obedecer.»
        </blockquote>
        <div className="quote-author">— Paulo Freire, <em>Pedagogía de la Autonomía</em></div>
      </div>
    </section>
  );
}
