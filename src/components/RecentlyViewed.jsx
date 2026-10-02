import { Link } from 'react-router-dom';
import { History, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { formatCurrency } from '../utils/formatters.js';

export default function RecentlyViewed() {
  const { recentlyViewed, clearRecentlyViewed } = useApp();

  if (!recentlyViewed || recentlyViewed.length === 0) {
    return null;
  }

  return (
    <section className="recently-viewed-section">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <History size={18} style={{ color: 'var(--accent-primary)' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Recently Viewed</h3>
        </div>
        <button
          type="button"
          onClick={clearRecentlyViewed}
          className="btn btn-ghost btn-sm"
          style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
          title="Clear browsing history"
        >
          <Trash2 size={13} />
          Clear History
        </button>
      </div>

      <div className="recently-viewed-grid">
        {recentlyViewed.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="recent-item-card"
          >
            <img src={item.image} alt={item.name} className="recent-thumb" />
            <div style={{ overflow: 'hidden' }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block' }}>
                {item.brand}
              </span>
              <h5 style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'var(--text-primary)'
              }}>
                {item.name}
              </h5>
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                {formatCurrency(item.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
