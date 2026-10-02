import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { formatCurrency } from '../utils/formatters.js';
import DemoCheckoutModal from '../components/DemoCheckoutModal.jsx';

export default function Cart() {
  const { cart, updateCartQuantity, removeFromCart, clearCart, cartTotal, cartCount } = useApp();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 1.25rem' }}>
        <div className="empty-state">
          <ShoppingBag className="empty-icon" />
          <h2 className="empty-title">Your Demo Cart is Empty</h2>
          <p className="empty-text">
            Add items to the cart while exploring products and comparing technical features.
          </p>
          <Link to="/products" className="btn btn-primary">
            Browse Catalog
          </Link>
        </div>
      </div>
    );
  }

  const shipping = 0;
  const estimatedTax = Math.round(cartTotal * 0.08);
  const orderTotal = cartTotal + estimatedTax + shipping;

  return (
    <div className="container" style={{ padding: '2rem 1.25rem 4rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
            Shopping Cart
          </h1>
          <span className="badge badge-neutral">Demo Shopping Cart</span>
        </div>

        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={clearCart}
          style={{ color: 'var(--text-muted)' }}
        >
          <Trash2 size={15} />
          Clear Cart ({cartCount})
        </button>
      </div>

      <div className="cart-layout">
        <div>
          {cart.map((item) => (
            <div key={item.key} className="cart-item-card">
              <Link to={`/product/${item.product.id}`}>
                <img src={item.product.image} alt={item.product.name} className="cart-thumb" />
              </Link>

              <div className="cart-item-info">
                <h4>
                  <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                </h4>
                <div className="cart-item-meta">
                  <span>{item.product.brand}</span>
                  {item.color && <span> • Color: {item.color}</span>}
                  {item.storage && <span> • {item.storage}</span>}
                </div>
                <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                  {formatCurrency(item.product.price)}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
                <div className="cart-qty-controller">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => updateCartQuantity(item.key, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="qty-val">{item.quantity}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => updateCartQuantity(item.key, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  Total: {formatCurrency(item.product.price * item.quantity)}
                </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.key)}
                  className="btn btn-ghost btn-sm"
                  style={{ color: 'var(--text-muted)', padding: '0.2rem' }}
                  aria-label="Remove item"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="order-summary-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>
            Order Summary
          </h3>

          <div className="summary-row">
            <span>Items Subtotal ({cartCount})</span>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{formatCurrency(cartTotal)}</span>
          </div>

          <div className="summary-row">
            <span>Estimated Shipping</span>
            <span style={{ color: 'var(--accent-success)', fontWeight: 600 }}>FREE (Demo)</span>
          </div>

          <div className="summary-row">
            <span>Estimated Sales Tax (8%)</span>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{formatCurrency(estimatedTax)}</span>
          </div>

          <div className="summary-row summary-total">
            <span>Estimated Total</span>
            <span style={{ color: 'var(--accent-primary)' }}>{formatCurrency(orderTotal)}</span>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1.5rem', padding: '0.85rem' }}
            onClick={() => setIsCheckoutModalOpen(true)}
          >
            Demo Checkout
            <ArrowRight size={16} />
          </button>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.4 }}>
            This checkout simulates an ordering workflow. No financial transactions will occur.
          </p>
        </aside>
      </div>

      <DemoCheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        total={orderTotal}
        onClearCart={clearCart}
      />
    </div>
  );
}
