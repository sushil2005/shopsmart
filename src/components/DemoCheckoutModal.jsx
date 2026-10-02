import { ShieldCheck, X } from 'lucide-react';
import { formatCurrency } from '../utils/formatters.js';

export default function DemoCheckoutModal({ isOpen, onClose, total, onClearCart }) {
  if (!isOpen) return null;

  const handleFinishDemo = () => {
    if (onClearCart) onClearCart();
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--accent-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldCheck size={20} />
            </div>
            <h3 className="modal-title">Demo Order Simulation</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-icon"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ margin: '1.25rem 0', color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Notice:</strong> ShopSmart is a frontend portfolio demonstration project. This checkout flow is simulated and is <strong>not connected to a real payment processor or live order fulfillment pipeline</strong>.
          </p>
          <div style={{
            background: 'var(--bg-surface-elevated)',
            padding: '1rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Simulated Order Total:</span>
              <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>{formatCurrency(total)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
              <span>Transaction Status:</span>
              <span style={{ color: 'var(--accent-success)', fontWeight: 600 }}>Demo Authorized (No Charge)</span>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem' }}>
            In a full production environment, this step would securely transmit a customer token to a server-side Stripe or payment gateway webhook.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Back to Cart
          </button>
          <button type="button" className="btn btn-primary" onClick={handleFinishDemo}>
            Complete Demo & Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
