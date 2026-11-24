import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ImportanceSection from './components/ImportanceSection';
import StudentsView from './components/StudentsView';
import TeachersView from './components/TeachersView';
import ClassroomDynamics from './components/ClassroomDynamics';
import InteractiveQuiz from './components/InteractiveQuiz';
import ManifestoSection from './components/ManifestoSection';
import CommitmentWall from './components/CommitmentWall';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <main className="main-content">
        <Hero setActiveFilter={setActiveFilter} />

        {/* Sección de Diagnóstico y Causas */}
        <ProblemSection />

        {/* Sección de Importancia de la Identidad y Pertenencia */}
        <ImportanceSection />

        {/* Sección para Alumnos */}
        {(activeFilter === 'all' || activeFilter === 'alumnos') && (
          <StudentsView />
        )}

        {/* Sección para Docentes */}
        {(activeFilter === 'all' || activeFilter === 'profesores') && (
          <TeachersView />
        )}

        {/* Dinámicas didácticas para el aula */}
        <ClassroomDynamics />

        {/* Test interactivo Mi Brújula Cultural */}
        <InteractiveQuiz />

        {/* Decálogo escolar por la identidad */}
        <ManifestoSection />

        {/* Muro interactivo de compromisos */}
        <CommitmentWall />
      </main>

      <Footer />

      {/* Botón flotante para volver arriba */}
      {showScrollTop && (
        <button 
          type="button"
          className="btn-scroll-top"
          onClick={scrollToTop}
          title="Volver al inicio"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow-icon">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
