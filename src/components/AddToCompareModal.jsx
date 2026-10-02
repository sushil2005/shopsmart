import { useState } from 'react';
import { Search, X, Plus, Check } from 'lucide-react';
import { products } from '../data/products.js';
import { formatCurrency } from '../utils/formatters.js';
import { useApp } from '../context/AppContext.jsx';

export default function AddToCompareModal({ isOpen, onClose }) {
  const { compareList, addToCompare, removeFromCompare } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = products.filter((p) => {
    const q = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  const handleToggle = (product) => {
    const isAlready = compareList.some((p) => p.id === product.id);
    if (isAlready) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
      if (compareList.length >= 2) {
        onClose();
      }
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" style={{ maxWidth: '620px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Add Product to Comparison</h3>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-icon"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="search-input-wrapper" style={{ margin: '1rem 0' }}>
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search catalog by name, brand, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        <div style={{ maxHeight: '360px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {filtered.map((product) => {
            const isSelected = compareList.some((p) => p.id === product.id);
            return (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isSelected ? 'var(--bg-surface-active)' : 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                  />
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-primary)', fontWeight: 700 }}>
                      {product.brand}
                    </span>
                    <h5 style={{ fontSize: '0.9rem', fontWeight: 700 }}>{product.name}</h5>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                      {formatCurrency(product.price)} • {product.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => handleToggle(product)}
                >
                  {isSelected ? (
                    <>
                      <Check size={14} /> Added
                    </>
                  ) : (
                    <>
                      <Plus size={14} /> Add
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
