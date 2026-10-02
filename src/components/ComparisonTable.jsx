import { Link } from 'react-router-dom';
import { Trash2, Plus, Sparkles, Check, ShoppingBag } from 'lucide-react';
import { formatCurrency, getComparisonHighlights } from '../utils/formatters.js';
import Rating from './Rating.jsx';
import { useApp } from '../context/AppContext.jsx';

export default function ComparisonTable({ products = [], onRemove, onOpenAddModal, onAskAI }) {
  const { addToCart } = useApp();

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3 className="empty-title">Add products to start comparing</h3>
        <p className="empty-text">
          Select up to 3 products from our catalog to compare specifications, ratings, features, and price points side-by-side.
        </p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  const highlights = getComparisonHighlights(products);

  const allSpecKeys = Array.from(
    new Set(products.flatMap((p) => Object.keys(p.specifications || {})))
  );

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Comparing {products.length} of 3 Products</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Neutral comparative breakdown. Differences highlighted based strictly on catalog metrics.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {products.length < 3 && (
            <button type="button" className="btn btn-secondary btn-sm" onClick={onOpenAddModal}>
              <Plus size={15} />
              Add Product
            </button>
          )}
          {onAskAI && (
            <button type="button" className="btn btn-primary btn-sm" onClick={onAskAI}>
              <Sparkles size={15} />
              Compare with Gemini AI
            </button>
          )}
        </div>
      </div>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th style={{ width: '22%' }}>Product</th>
              {products.map((p) => (
                <th key={p.id} className="comparison-col-product">
                  <div className="comparison-product-header">
                    <button
                      type="button"
                      onClick={() => onRemove(p.id)}
                      className="btn btn-ghost btn-sm"
                      style={{ position: 'absolute', top: 0, right: 0, padding: '0.25rem', color: 'var(--text-muted)' }}
                      title="Remove from comparison"
                      aria-label={`Remove ${p.name} from comparison`}
                    >
                      <Trash2 size={16} />
                    </button>
                    <img src={p.image} alt={p.name} className="comparison-img" />
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-primary)', fontWeight: 700 }}>
                      {p.brand}
                    </span>
                    <Link to={`/product/${p.id}`} style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {p.name}
                    </Link>

                    {highlights[p.id] && highlights[p.id].length > 0 && (
                      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                        {highlights[p.id].map((h, i) => (
                          <span
                            key={i}
                            className={`badge ${h.type === 'positive' ? 'badge-green' : 'badge-neutral'}`}
                          >
                            {h.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Price</td>
              {products.map((p) => (
                <td key={p.id}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>{formatCurrency(p.price)}</span>
                    {p.previousPrice && (
                      <span style={{ fontSize: '0.8125rem', textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                        {formatCurrency(p.previousPrice)}
                      </span>
                    )}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Rating & Reviews</td>
              {products.map((p) => (
                <td key={p.id}>
                  <Rating value={p.rating} count={p.reviewCount} />
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Category</td>
              {products.map((p) => (
                <td key={p.id} style={{ fontSize: '0.9rem' }}>{p.category}</td>
              ))}
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Availability</td>
              {products.map((p) => (
                <td key={p.id}>
                  <span className={`badge ${p.availability === 'In Stock' ? 'badge-green' : 'badge-neutral'}`}>
                    {p.availability}
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Seller</td>
              {products.map((p) => (
                <td key={p.id} style={{ fontSize: '0.9rem' }}>{p.seller}</td>
              ))}
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Storage Options</td>
              {products.map((p) => (
                <td key={p.id} style={{ fontSize: '0.875rem' }}>
                  {Array.isArray(p.storage) ? p.storage.join(', ') : 'Standard'}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Colors</td>
              {products.map((p) => (
                <td key={p.id}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    {p.colors && p.colors.map((c, i) => (
                      <span
                        key={i}
                        title={c.name}
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: c.hex,
                          border: '1px solid var(--border-strong)',
                          display: 'inline-block'
                        }}
                      />
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Key Features</td>
              {products.map((p) => (
                <td key={p.id}>
                  <ul style={{ paddingLeft: '1rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {p.features.map((feat, idx) => (
                      <li key={idx} style={{ marginBottom: '0.35rem' }}>{feat}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            {allSpecKeys.map((key) => (
              <tr key={key}>
                <td style={{ fontWeight: 700, textTransform: 'capitalize', color: 'var(--text-secondary)' }}>
                  {key}
                </td>
                {products.map((p) => (
                  <td key={p.id} style={{ fontSize: '0.875rem' }}>
                    {p.specifications && p.specifications[key] ? (
                      p.specifications[key]
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>Not specified</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>Cart Action</td>
              {products.map((p) => (
                <td key={p.id}>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                    onClick={() => addToCart(p, 1)}
                  >
                    <ShoppingBag size={14} />
                    Add to Cart
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
