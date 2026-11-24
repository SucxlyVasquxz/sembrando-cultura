import React, { useState } from 'react';

export default function CulturalImage({
  src,
  alt,
  caption,
  tag,
  aspectRatio = '16/9',
  className = '',
  loading = 'lazy'
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={`cultural-image-figure ${className}`}>
      <div 
        className="cultural-image-container" 
        style={{ aspectRatio }}
      >
        {!hasError ? (
          <>
            {!isLoaded && <div className="cultural-image-skeleton" />}
            <img
              src={src}
              alt={alt || caption || 'Fotografía de identidad cultural escolar'}
              loading={loading}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`cultural-image-element ${isLoaded ? 'loaded' : ''}`}
            />
          </>
        ) : (
          <div className="cultural-image-fallback">
            <div className="fallback-pattern"></div>
            <div className="fallback-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="fallback-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="fallback-title">Sembrando Identidad</span>
              <p className="fallback-text">{alt || caption || 'Patrimonio y memoria comunitaria'}</p>
            </div>
          </div>
        )}

        {tag && <span className="cultural-image-tag">{tag}</span>}
      </div>

      {caption && (
        <figcaption className="cultural-image-caption">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="caption-dot-icon">
            <circle cx="12" cy="12" r="3" />
          </svg>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
