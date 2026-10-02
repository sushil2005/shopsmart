import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  Scale,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { products } from '../data/products.js';
import { useApp } from '../context/AppContext.jsx';
import { formatCurrency, calculateDiscount } from '../utils/formatters.js';
import Rating from '../components/Rating.jsx';
import PriceChart from '../components/PriceChart.jsx';
import RecentlyViewed from '../components/RecentlyViewed.jsx';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isInWishlist,
    toggleWishlist,
    isInCompare,
    addToCompare,
    removeFromCompare,
    addToCart,
    addRecentlyViewed
  } = useApp();

  const product = products.find((p) => p.id === id);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [quantity, setQuantity] = useState(1);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      addRecentlyViewed(product);
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
      if (product.storage && product.storage.length > 0) {
        setSelectedStorage(product.storage[0]);
      }
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem' }}>
        <div className="empty-state">
          <AlertCircle className="empty-icon" style={{ color: 'var(--accent-warning)' }} />
          <h2 className="empty-title">Product Not Found</h2>
          <p className="empty-text">
            The product identifier does not match any item in the ShopSmart local catalog.
          </p>
          <Link to="/products" className="btn btn-primary">
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const discount = calculateDiscount(product.price, product.previousPrice);
  const inWishlist = isInWishlist(product.id);
  const inCompare = isInCompare(product.id);

  const handleCompareClick = () => {
    if (inCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(
      product,
      quantity,
      selectedColor ? selectedColor.name : null,
      selectedStorage
    );
  };

  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="600" height="450" fill="%23162032"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-size="20">${encodeURIComponent(product.name)}</text></svg>`;

  return (
    <div className="container" style={{ padding: '2rem 1.25rem 4rem' }}>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Products</Link>
        <span>/</span>
        <Link to={`/products?category=${product.category}`}>{product.category}</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.name}</span>
      </nav>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="btn btn-ghost btn-sm"
        style={{ marginBottom: '1.25rem', paddingLeft: 0 }}
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="detail-layout">
        <div className="detail-gallery">
          <div className="detail-main-img-box">
            <img
              src={imgError ? fallbackSvg : product.image}
              alt={product.name}
              className="detail-main-img"
              onError={() => setImgError(true)}
            />
            <div className="card-top-badges">
              {discount > 0 && (
                <span className="badge badge-green" style={{ fontSize: '0.8125rem' }}>
                  {discount}% SAVING
                </span>
              )}
              <span className="badge badge-blue">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        <div>
          <span className="detail-brand">{product.brand}</span>
          <h1 className="detail-title">{product.name}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <Rating value={product.rating} count={product.reviewCount} />
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Seller: <strong>{product.seller}</strong>
            </span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span className={`badge ${product.availability === 'In Stock' ? 'badge-green' : 'badge-neutral'}`}>
              {product.availability}
            </span>
          </div>

          <div className="detail-price-box">
            <div>
              <span className="detail-price-current">{formatCurrency(product.price)}</span>
              {product.previousPrice && (
                <span className="detail-price-prev" style={{ marginLeft: '0.75rem' }}>
                  {formatCurrency(product.previousPrice)}
                </span>
              )}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
              Demo catalog pricing
            </span>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            {product.description}
          </p>

          {product.colors && product.colors.length > 0 && (
            <div className="options-block">
              <span className="options-title">
                Color: {selectedColor ? selectedColor.name : ''}
              </span>
              <div className="color-options-row">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    className={`color-option-btn ${selectedColor?.name === c.name ? 'selected' : ''}`}
                    style={{ background: c.hex }}
                    onClick={() => setSelectedColor(c)}
                    title={c.name}
                    aria-label={`Select ${c.name} color`}
                  />
                ))}
              </div>
            </div>
          )}

          {product.storage && product.storage.length > 0 && (
            <div className="options-block">
              <span className="options-title">Configuration / Storage</span>
              <div className="storage-options-row">
                {product.storage.map((st) => (
                  <button
                    key={st}
                    type="button"
                    className={`storage-option-btn ${selectedStorage === st ? 'selected' : ''}`}
                    onClick={() => setSelectedStorage(st)}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="detail-actions-row">
            <div className="cart-qty-controller" style={{ height: '42px' }}>
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="qty-val" style={{ padding: '0 0.85rem' }}>{quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '180px' }}
              onClick={handleAddToCart}
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            <button
              type="button"
              className={`btn btn-secondary btn-icon ${inWishlist ? 'active' : ''}`}
              onClick={() => toggleWishlist(product)}
              title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart size={18} fill={inWishlist ? 'var(--accent-danger)' : 'none'} color={inWishlist ? 'var(--accent-danger)' : 'currentColor'} />
            </button>

            <button
              type="button"
              className={`btn btn-secondary btn-icon ${inCompare ? 'compare-active' : ''}`}
              onClick={handleCompareClick}
              title={inCompare ? 'Remove from comparison' : 'Compare side by side'}
              aria-label={inCompare ? 'Remove from comparison' : 'Compare side by side'}
            >
              <Scale size={18} color={inCompare ? 'var(--accent-primary)' : 'currentColor'} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            padding: '1.25rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            marginTop: '1.5rem',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Full Manufacturer Warranty</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Truck size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>Free Fast Shipping Demo</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RotateCcw size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>30-Day Hassle-Free Returns</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <div className="detail-tabs-header">
          <button
            type="button"
            className={`detail-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview & Features
          </button>
          <button
            type="button"
            className={`detail-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            Full Specifications
          </button>
          <button
            type="button"
            className={`detail-tab-btn ${activeTab === 'price-history' ? 'active' : ''}`}
            onClick={() => setActiveTab('price-history')}
          >
            Price History & Insights
          </button>
          <button
            type="button"
            className={`detail-tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviews?.length || 0})
          </button>
        </div>

        {activeTab === 'overview' && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>Key Features</h3>
            <div className="feature-list">
              {product.features.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 size={18} className="feature-check" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>Tags & Indexing</h4>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {product.tags && product.tags.map((tag) => (
                  <span key={tag} className="tag-chip">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>Technical Specifications</h3>
            <div className="spec-grid">
              {Object.entries(product.specifications || {}).map(([key, val]) => (
                <div key={key} className="spec-card">
                  <span className="spec-label">{key}</span>
                  <div className="spec-value">{val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'price-history' && (
          <div>
            <PriceChart product={product} />
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="reviews-summary">
              <div>
                <span className="big-rating-num">{product.rating.toFixed(1)}</span>
                <Rating value={product.rating} showCount={false} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Based on {product.reviewCount} customer reviews
                </span>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '1.5rem' }}>
                <span className="badge badge-neutral" style={{ marginBottom: '0.5rem' }}>
                  Verified Sample Reviews
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Reviews are realistic demo records created to simulate verified purchaser feedback and usability impressions.
                </p>
              </div>
            </div>

            {product.reviews && product.reviews.map((rev) => (
              <div key={rev.id} className="review-card">
                <div className="review-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="review-user">{rev.user}</span>
                    <Rating value={rev.rating} showCount={false} />
                  </div>
                  <span className="review-date">{rev.date}</span>
                </div>
                <h5 className="review-title">{rev.title}</h5>
                <p className="review-text">{rev.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <RecentlyViewed />
    </div>
  );
}
