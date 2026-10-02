import { ArrowUpDown } from 'lucide-react';

export default function SortSelect({ value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <ArrowUpDown size={15} style={{ color: 'var(--text-muted)' }} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="catalog-sort-select"
        aria-label="Sort products"
      >
        <option value="relevance">Sort: Relevance</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popularity">Most Popular</option>
        <option value="newest">Newest Releases</option>
      </select>
    </div>
  );
}
