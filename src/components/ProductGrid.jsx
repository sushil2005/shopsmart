import { SearchX } from 'lucide-react';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products = [], onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <SearchX className="empty-icon" />
        <h3 className="empty-title">No products found</h3>
        <p className="empty-text">
          Try another search or clear your filters to find what you are looking for.
        </p>
        {onResetFilters && (
          <button type="button" className="btn btn-secondary btn-sm" onClick={onResetFilters}>
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
