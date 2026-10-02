import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, Scale, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { formatCurrency } from '../utils/formatters.js';
import Rating from '../components/Rating.jsx';

export default function Wishlist() {
  const {
    wishlistProducts,
    removeFromWishlist,
    addToCart,
    addToCompare,
    isInCompare
  } = useApp();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem' }}>
        <div className="empty-state">
          <Heart className="empty-icon" style={{ color: 'var(--accent-danger)' }} />
          <h2 className="empty-title">Your Wishlist is Empty</h2>
          <p className="empty-text">
            Save items you are interested in tracking while browsing the ShopSmart catalog.
          </p>
          <Link to="/products" className="btn btn-primary">
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '2rem 1.25rem 4rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
          Saved Wishlist
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          You have {wishlistProducts.length} saved {wishlistProducts.length === 1 ? 'item' : 'items'} in your local storage.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {wishlistProducts.map((product) => {
          const inCompare = isInCompare(product.id);
          return (
            <div
              key={product.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr auto',
                gap: '1.5rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                alignItems: 'center'
              }}
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                />
              </Link>

              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  {product.brand}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0.2rem 0' }}>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <Rating value={product.rating} count={product.reviewCount} />
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginTop: '0.4rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{formatCurrency(product.price)}</span>
                  {product.previousPrice && (
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {formatCurrency(product.previousPrice)}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '150px' }}>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => handleMoveToCart(product)}
                >
                  <ShoppingBag size={14} />
                  Move to Cart
                </button>

                <button
                  type="button"
                  className={`btn btn-secondary btn-sm ${inCompare ? 'btn-outline' : ''}`}
                  onClick={() => addToCompare(product)}
                >
                  <Scale size={14} />
                  {inCompare ? 'In Comparison' : 'Add to Compare'}
                </button>

                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => removeFromWishlist(product.id)}
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Trash2 size={14} />
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
