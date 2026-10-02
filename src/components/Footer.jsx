import { Link } from 'react-router-dom';
import { Layers, Sparkles, Scale, ExternalLink } from 'lucide-react';
import { categories } from '../data/products.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-link" style={{ marginBottom: '0.5rem' }}>
              <div className="brand-icon-box">
                <Layers size={18} />
              </div>
              <span>ShopSmart</span>
            </Link>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
              Compare smarter. Shop better.
            </p>
            <p>
              Discover products, compare features and prices, and get AI-powered shopping assistance in one unified platform.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
              <Link to="/assistant" className="btn btn-secondary btn-sm" style={{ borderColor: 'rgba(139, 92, 246, 0.3)', color: 'var(--accent-secondary)' }}>
                <Sparkles size={14} />
                Try AI Assistant
              </Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/products">Browse All Products</Link></li>
              <li><Link to="/compare">Side-by-Side Compare</Link></li>
              <li><Link to="/wishlist">Saved Wishlist</Link></li>
              <li><Link to="/cart">Demo Shopping Cart</Link></li>
              <li><Link to="/assistant">Gemini Shopping Assistant</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Top Categories</h4>
            <ul className="footer-links">
              {categories.filter((c) => c.id !== 'all').slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/products?category=${cat.name}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Technology & Project</h4>
            <ul className="footer-links">
              <li><span style={{ color: 'var(--text-muted)' }}>React 19 & Vite</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>Vanilla Modern CSS</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>Google Gemini 3.8 Flash</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>Recharts Price Insights</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>LocalStorage Persistence</span></li>
              <li>
                <a href="#github-project" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>Source Code Repository</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} ShopSmart Portfolio Project. All mock specs & prices are for demonstration purposes only.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span>Privacy Note: No Personal Data Collected</span>
            <span>Terms: Demo Use Only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
