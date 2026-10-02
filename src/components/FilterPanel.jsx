import { FilterX } from 'lucide-react';
import { formatCurrency } from '../utils/formatters.js';

export default function FilterPanel({
  filters,
  onChange,
  onReset,
  availableCategories = [],
  availableBrands = [],
  allTags = [],
  maxCatalogPrice = 3000
}) {
  const handleCategoryChange = (catName) => {
    onChange({
      ...filters,
      category: filters.category === catName ? 'all' : catName
    });
  };

  const handleBrandToggle = (brand) => {
    const exists = filters.brands.includes(brand);
    const updated = exists
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onChange({
      ...filters,
      brands: updated
    });
  };

  const handlePriceChange = (e) => {
    onChange({
      ...filters,
      maxPrice: Number(e.target.value)
    });
  };

  const handleRatingChange = (val) => {
    onChange({
      ...filters,
      minRating: filters.minRating === val ? 0 : val
    });
  };

  const handleAvailabilityChange = (val) => {
    onChange({
      ...filters,
      availability: val
    });
  };

  const handleTagToggle = (tag) => {
    const exists = filters.selectedTags.includes(tag);
    const updated = exists
      ? filters.selectedTags.filter((t) => t !== tag)
      : [...filters.selectedTags, tag];
    onChange({
      ...filters,
      selectedTags: updated
    });
  };

  return (
    <aside className="filter-sidebar">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Filters</h3>
        <button
          type="button"
          onClick={onReset}
          className="btn btn-ghost btn-sm"
          style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
        >
          <FilterX size={14} />
          Reset All
        </button>
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Category</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <label className="filter-checkbox-item">
            <input
              type="checkbox"
              checked={filters.category === 'all'}
              onChange={() => handleCategoryChange('all')}
            />
            <span>All Categories</span>
          </label>
          {availableCategories.filter((c) => c.id !== 'all').map((cat) => (
            <label key={cat.id} className="filter-checkbox-item">
              <input
                type="checkbox"
                checked={filters.category.toLowerCase() === cat.name.toLowerCase()}
                onChange={() => handleCategoryChange(cat.name)}
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Max Price</h4>
        <div className="price-slider-group">
          <input
            type="range"
            min="50"
            max={maxCatalogPrice}
            step="50"
            value={filters.maxPrice === Infinity ? maxCatalogPrice : filters.maxPrice}
            onChange={handlePriceChange}
            className="range-input"
            aria-label="Filter by maximum price"
          />
          <div className="price-slider-values">
            <span>$50</span>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
              {formatCurrency(filters.maxPrice === Infinity ? maxCatalogPrice : filters.maxPrice)}
            </span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Brands</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', maxHeight: '180px', overflowY: 'auto' }}>
          {availableBrands.map((brand) => (
            <label key={brand} className="filter-checkbox-item">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Minimum Rating</h4>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {[4.8, 4.7, 4.5, 4.0].map((star) => (
            <button
              key={star}
              type="button"
              className={`tag-chip ${filters.minRating === star ? 'active' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              ★ {star}+
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Availability</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {['all', 'In Stock', 'Low Stock'].map((status) => (
            <label key={status} className="filter-checkbox-item">
              <input
                type="radio"
                name="availability"
                checked={filters.availability === status}
                onChange={() => handleAvailabilityChange(status)}
                style={{ accentColor: 'var(--accent-primary)' }}
              />
              <span>{status === 'all' ? 'All Items' : status}</span>
            </label>
          ))}
        </div>
      </div>

      {allTags.length > 0 && (
        <div className="filter-section">
          <h4 className="filter-heading">Tags</h4>
          <div className="tag-cloud">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-chip ${filters.selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => handleTagToggle(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
