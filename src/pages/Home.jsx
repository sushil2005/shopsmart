import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Sparkles,
  Scale,
  ShieldCheck,
  Zap,
  TrendingDown,
  Layers
} from 'lucide-react';
import { products, categories } from '../data/products.js';
import CategoryCard from '../components/CategoryCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import RecentlyViewed from '../components/RecentlyViewed.jsx';

export default function Home() {
  const [heroSearch, setHeroSearch] = useState('');
  const navigate = useNavigate();

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/products?search=${encodeURIComponent(heroSearch.trim())}`);
    } else {
      navigate('/products');
    }
  };

  const featuredProducts = products.filter((p) => p.popularity >= 95).slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="hero-tagline-badge">
            <Sparkles size={14} />
            AI-Enhanced Product Discovery
          </div>

          <h1 className="hero-title">
            Shop Smarter.<br />Choose Better.
          </h1>

          <p className="hero-description">
            Discover products, compare what matters, and make better buying decisions with ShopSmart.
          </p>

          <form onSubmit={handleHeroSearch} className="hero-search-bar">
            <input
              type="text"
              className="hero-search-input"
              placeholder="Search across smartphones, laptops, audio, wearables..."
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
            />
            <button type="submit" className="hero-search-btn">
              <Search size={16} />
              <span>Search</span>
            </button>
          </form>

          <div className="hero-cta-group">
            <Link to="/products" className="btn btn-primary">
              Browse Products
              <ArrowRight size={16} />
            </Link>
            <a href="#categories" className="btn btn-secondary">
              Explore Categories
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <section id="categories" style={{ paddingTop: '2rem' }}>
          <div className="section-header">
            <div>
              <h2 className="section-title">Explore by Category</h2>
              <p className="section-subtitle">Browse curated electronics and smart hardware categories</p>
            </div>
            <Link to="/products" className="btn btn-ghost btn-sm" style={{ color: 'var(--accent-primary)' }}>
              View all products <ArrowRight size={14} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.filter((c) => c.id !== 'all').map((cat) => {
              const count = products.filter((p) => p.category === cat.name).length;
              return (
                <CategoryCard key={cat.id} category={cat} productCount={count} />
              );
            })}
          </div>
        </section>

        <section style={{ marginTop: '2.5rem' }}>
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured High-Performance Tech</h2>
              <p className="section-subtitle">Top-rated flagship selections verified for build quality and performance</p>
            </div>
            <Link to="/products" className="btn btn-ghost btn-sm">
              See full catalog <ArrowRight size={14} />
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="promo-banner">
          <div className="promo-content">
            <span className="promo-badge">Side-by-Side Comparison Engine</span>
            <h2 className="promo-title">Compare Before You Buy</h2>
            <p className="promo-desc">
              Tired of switching between endless browser tabs? Select up to 3 products and inspect side-by-side specifications, objective strengths, price differences, and real hardware tradeoffs without biased sales tricks.
            </p>
            <Link to="/compare" className="btn btn-primary">
              <Scale size={16} />
              Open Comparison Table
            </Link>
          </div>
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            maxWidth: '360px',
            width: '100%',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem', fontWeight: 700 }}>
              <Scale size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Objective Parameter Highlights</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge badge-green">Lower Price</span>
                Identifies cost advantage without brand bias
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge badge-blue">Higher Rating</span>
                Reflects verified customer satisfaction
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge badge-purple">Hardware Specs</span>
                Direct processor, display, and battery contrast
              </li>
            </ul>
          </div>
        </section>

        <section style={{ margin: '3.5rem 0' }}>
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h2 className="section-title">How ShopSmart Works</h2>
              <p className="section-subtitle">A balanced three-step discovery and decision framework</p>
            </div>
          </div>

          <div className="how-it-works-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3 className="step-title">Discover & Filter</h3>
              <p className="step-desc">
                Browse detailed product cards across smartphones, ultrabooks, audio gear, and wearables with responsive filters for brand, price, rating, and availability.
              </p>
            </div>

            <div className="step-card">
              <div className="step-num">02</div>
              <h3 className="step-title">Compare What Matters</h3>
              <p className="step-desc">
                Analyze up to 3 products in a clean, side-by-side comparison grid with neutral indicators and simulated 6-month historical price trend charts.
              </p>
            </div>

            <div className="step-card">
              <div className="step-num">03</div>
              <h3 className="step-title">Assisted by Gemini AI</h3>
              <p className="step-desc">
                Consult our integrated AI Shopping Assistant to translate your budget, use case, and performance priorities into grounded, balanced recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="promo-banner" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(59, 130, 246, 0.12))', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
          <div className="promo-content">
            <span className="promo-badge" style={{ background: 'rgba(59, 130, 246, 0.2)', color: 'var(--accent-primary)' }}>
              Intelligent Guidance
            </span>
            <h2 className="promo-title">Meet Your AI Shopping Assistant</h2>
            <p className="promo-desc">
              Have specific constraints like "a laptop under $1000 for university coding" or "wireless headphones for quiet study"? Gemini analyzes the entire ShopSmart dataset to explain real trade-offs and suggest realistic options.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/assistant" className="btn btn-primary" style={{ background: 'var(--accent-secondary)' }}>
                <Sparkles size={16} />
                Ask Shopping Assistant
              </Link>
              <Link to="/products" className="btn btn-secondary">
                View Full Catalog
              </Link>
            </div>
          </div>
        </section>

        <RecentlyViewed />
      </div>
    </div>
  );
}
