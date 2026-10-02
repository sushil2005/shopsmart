import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '5rem 1.25rem', textAlign: 'center' }}>
      <div className="empty-state" style={{ maxWidth: '520px' }}>
        <Compass className="empty-icon" style={{ color: 'var(--accent-primary)' }} />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>404</h1>
        <h2 className="empty-title">Page Not Found</h2>
        <p className="empty-text">
          The requested page address does not exist or has moved. Explore the ShopSmart catalog or return to the overview page.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} /> Return to Home
          </Link>
          <Link to="/products" className="btn btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
