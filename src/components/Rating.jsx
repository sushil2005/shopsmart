import { Star } from 'lucide-react';

export default function Rating({ value = 0, count, showCount = true }) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;

  return (
    <div className="rating-row">
      <div className="stars-wrapper" aria-label={`Rated ${value} out of 5 stars`}>
        {[...Array(5)].map((_, i) => {
          const isFilled = i < fullStars || (i === fullStars && hasHalfStar);
          return (
            <Star
              key={i}
              size={14}
              fill={isFilled ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth={1.5}
            />
          );
        })}
      </div>
      <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.8125rem' }}>
        {value.toFixed(1)}
      </span>
      {showCount && typeof count === 'number' && (
        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
          ({count})
        </span>
      )}
    </div>
  );
}
