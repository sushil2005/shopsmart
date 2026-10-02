import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, ShoppingBag, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { formatCurrency, calculateDiscount } from '../utils/formatters.js';
import Rating from './Rating.jsx';

export default function ProductCard({ product }) {
  const { isInWishlist, toggleWishlist, isInCompare, addToCompare, removeFromCompare, addToCart } = useApp();
  const [imgError, setImgError] = useState(false);

  const discount = calculateDiscount(product.price, product.previousPrice);
  const inWishlist = isInWishlist(product.id);
  const inCompare = isInCompare(product.id);

  const handleCompareClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23162032"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-size="16">${encodeURIComponent(product.name)}</text></svg>`;

  return (
    <div className="product-card">
      <div className="card-image-box">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img
            src={imgError ? fallbackSvg : product.image}
            alt={product.name}
            className="product-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        </Link>

        <div className="card-top-badges">
          {discount > 0 && (
            <span className="badge badge-green">
              {discount}% OFF
            </span>
          )}
          {product.availability === 'Low Stock' && (
            <span className="badge badge-neutral" style={{ color: 'var(--accent-warning)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              Low Stock
            </span>
          )}
        </div>

        <div className="card-floating-actions">
          <button
            type="button"
            className={`floating-action-btn ${inWishlist ? 'active' : ''}`}
            onClick={handleWishlistClick}
            title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart size={16} fill={inWishlist ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            className={`floating-action-btn ${inCompare ? 'compare-active' : ''}`}
            onClick={handleCompareClick}
            title={inCompare ? 'Remove from comparison' : 'Compare product'}
            aria-label={inCompare ? 'Remove from comparison' : 'Compare product'}
          >
            <Scale size={16} />
          </button>
        </div>
      </div>

      <div className="card-body">
        <span className="card-brand">{product.brand}</span>
        <h3 className="card-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>

        <Rating value={product.rating} count={product.reviewCount} />

        <div className="card-price-row">
          <span className="current-price">{formatCurrency(product.price)}</span>
          {product.previousPrice && (
            <span className="previous-price">{formatCurrency(product.previousPrice)}</span>
          )}
        </div>

        <div className="card-actions">
          <Link to={`/product/${product.id}`} className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
            <Eye size={15} />
            Details
          </Link>
          <button
            type="button"
            className="btn btn-primary btn-sm btn-icon"
            onClick={handleAddToCart}
            title="Add to cart"
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
