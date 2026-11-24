import React, { useState, useEffect } from 'react';
import { culturalData } from '../data/culturalData';
import CulturalImage from './CulturalImage';

export default function CommitmentWall() {
  const [pledges, setPledges] = useState(() => {
    try {
      const saved = localStorage.getItem('sembrando_pledges');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return culturalData.initialPledges;
  });

  const [filterRole, setFilterRole] = useState('all');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Estudiante');
  const [school, setSchool] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sembrando_pledges', JSON.stringify(pledges));
    } catch {
      // ignore
    }
  }, [pledges]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newPledge = {
      id: 'p_' + Date.now(),
      author: name.trim(),
      role: role,
      school: school.trim() || 'Comunidad Educativa',
      badge: role.split(' ')[0],
      message: message.trim(),
      date: 'Reciente',
      likes: 1
    };

    setPledges([newPledge, ...pledges]);
    setName('');
    setSchool('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id) => {
    setPledges(pledges.map(p => {
      if (p.id === id) {
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    }));
  };

  const filteredPledges = filterRole === 'all' 
    ? pledges 
    : pledges.filter(p => p.badge.toLowerCase().includes(filterRole.toLowerCase()));

  return (
    <section id="muro" className="section-container">
      <div className="section-header">
        <span className="section-kicker">Mural Participativo</span>
        <h2 className="section-title">El Muro de las Semillas: Siembra tu Compromiso</h2>
        <p className="section-subtitle">
          Alumnos, profesores y familias de diferentes escuelas dejan aquí su promesa 
          para proteger y enaltecer nuestra identidad cultural. ¡Súmate a la cosecha!
        </p>
      </div>

      {/* Banner del Muro */}
      <div className="wall-banner-showcase">
        <CulturalImage
          src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1200&q=80"
          alt="Sembrando raíces vivas"
          caption="Cada compromiso sembrado es un árbol de dignidad que florecerá en tu escuela."
          tag="Siembra Colectiva"
          aspectRatio="24/7"
          className="wall-banner-img"
        />
      </div>

      <div className="wall-layout-grid">
        {/* Formulario para sembrar semilla */}
        <div className="pledge-form-card">
          <div className="form-card-header">
            <div className="form-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <div>
              <h3>Siembra tu raíz</h3>
              <p>Deja tu compromiso o mensaje para tu escuela</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="pledge-form">
            <div className="form-group">
              <label htmlFor="pledge-name">Tu Nombre o Seudónimo *</label>
              <input 
                id="pledge-name"
                type="text" 
                placeholder="Ej. Sofía Mendoza / Prof. Manuel" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pledge-role">Tu Rol en la Escuela</label>
                <select 
                  id="pledge-role"
                  value={role} 
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Estudiante">Estudiante</option>
                  <option value="Docente">Docente</option>
                  <option value="Directivo">Directivo Escolar</option>
                  <option value="Padre/Madre">Padre/Madre de Familia</option>
                  <option value="Exalumno">Exalumno / Comunidad</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pledge-school">Escuela o Localidad</label>
                <input 
                  id="pledge-school"
                  type="text" 
                  placeholder="Ej. Sec. Técnica #12 / Oaxaca" 
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="pledge-message">Tu Compromiso o Mensaje de Concientización *</label>
              <textarea 
                id="pledge-message"
                rows="3"
                placeholder="¿Qué harás tú para valorar tus raíces o las de tus compañeros?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-full">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              Publicar mi Compromiso en el Muro
            </button>

            {submitted && (
              <div className="form-success-banner">
                ¡Gracias por sembrar tu semilla! Tu compromiso ya es visible en el mural.
              </div>
            )}
          </form>
        </div>

        {/* Tablero de compromisos */}
        <div className="pledges-board">
          <div className="board-filter-bar">
            <span className="filter-label">Filtrar por:</span>
            <button 
              type="button" 
              className={`filter-btn ${filterRole === 'all' ? 'active' : ''}`}
              onClick={() => setFilterRole('all')}
            >
              Todos ({pledges.length})
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterRole === 'estudiante' ? 'active' : ''}`}
              onClick={() => setFilterRole('estudiante')}
            >
              Estudiantes
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterRole === 'docente' ? 'active' : ''}`}
              onClick={() => setFilterRole('docente')}
            >
              Docentes
            </button>
          </div>

          <div className="pledges-grid">
            {filteredPledges.map((p) => (
              <div key={p.id} className="pledge-card">
                <div className="pledge-card-header">
                  <div>
                    <strong className="pledge-author">{p.author}</strong>
                    <div className="pledge-sub">
                      <span>{p.school}</span> • <span className="pledge-date">{p.date}</span>
                    </div>
                  </div>
                  <span className={`pledge-badge badge-${p.badge.toLowerCase()}`}>
                    {p.badge}
                  </span>
                </div>

                <p className="pledge-message">"{p.message}"</p>

                <div className="pledge-card-footer">
                  <button 
                    type="button" 
                    className="like-btn"
                    onClick={() => handleLike(p.id)}
                    title="Inspirador / Apoyo este compromiso"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="heart-icon">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>{p.likes} apoyos</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
