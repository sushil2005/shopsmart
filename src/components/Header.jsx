import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Compass,
  Search,
  Scale,
  Heart,
  ShoppingBag,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { products } from '../data/products.js';
import { formatCurrency } from '../utils/formatters.js';

export default function Header() {
  const { theme, toggleTheme, cartCount, wishlist, compareList } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowSuggestions(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const suggestions = searchQuery.trim().length > 1
    ? products
        .filter((p) => {
          const q = searchQuery.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
          );
        })
        .slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSelectProduct = (productId) => {
    navigate(`/product/${productId}`);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-link">
          <div className="brand-icon-box">
            <Layers size={20} />
          </div>
          <span>ShopSmart</span>
        </Link>

        <div className="header-search" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search smartphones, laptops, audio..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              aria-label="Search catalog"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
              >
                <X size={15} />
              </button>
            )}
          </form>

          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions-dropdown">
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, padding: '0.25rem 0.5rem', display: 'block' }}>
                Catalog Suggestions
              </span>
              {suggestions.map((p) => (
                <div
                  key={p.id}
                  className="suggestion-item"
                  onClick={() => handleSelectProduct(p.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={p.image} alt={p.name} className="suggestion-thumb" />
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {p.brand} • {formatCurrency(p.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Products
          </NavLink>
          <NavLink to="/compare" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Scale size={16} />
            Compare
            {compareList.length > 0 && (
              <span className="nav-counter-badge">{compareList.length}</span>
            )}
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Heart size={16} />
            Wishlist
            {wishlist.length > 0 && (
              <span className="nav-counter-badge">{wishlist.length}</span>
            )}
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <ShoppingBag size={16} />
            Cart
            {cartCount > 0 && (
              <span className="nav-counter-badge">{cartCount}</span>
            )}
          </NavLink>
          <NavLink to="/assistant" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={{ color: 'var(--accent-secondary)' }}>
            <Sparkles size={16} />
            AI Assistant
          </NavLink>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="btn btn-ghost btn-sm btn-icon"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="btn btn-ghost btn-sm btn-icon mobile-nav-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <form onSubmit={handleSearchSubmit} className="search-input-wrapper" style={{ marginBottom: '1rem' }}>
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/compare" className="nav-link">
          <Scale size={16} />
          Compare ({compareList.length})
        </NavLink>
        <NavLink to="/wishlist" className="nav-link">
          <Heart size={16} />
          Wishlist ({wishlist.length})
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          <ShoppingBag size={16} />
          Cart ({cartCount})
        </NavLink>
        <NavLink to="/assistant" className="nav-link" style={{ color: 'var(--accent-secondary)' }}>
          <Sparkles size={16} />
          AI Shopping Assistant
        </NavLink>
      </div>
    </header>
  );
}
