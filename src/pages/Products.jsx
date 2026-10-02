import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products.js';
import { filterProducts, sortProducts } from '../utils/filterSort.js';
import ProductGrid from '../components/ProductGrid.jsx';
import FilterPanel from '../components/FilterPanel.jsx';
import SortSelect from '../components/SortSelect.jsx';
import RecentlyViewed from '../components/RecentlyViewed.jsx';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [filters, setFilters] = useState({
    search: initialSearch,
    category: initialCategory,
    brands: [],
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
    availability: 'all',
    selectedTags: []
  });

  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    const urlCategory = searchParams.get('category') || 'all';
    const urlSearch = searchParams.get('search') || '';
    setFilters((prev) => ({
      ...prev,
      category: urlCategory,
      search: urlSearch
    }));
  }, [searchParams]);

  const availableBrands = useMemo(() => {
    const brandSet = new Set(products.map((p) => p.brand));
    return Array.from(brandSet).sort();
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set(products.flatMap((p) => p.tags || []));
    return Array.from(tagSet).slice(0, 15);
  }, []);

  const maxCatalogPrice = useMemo(() => {
    return Math.max(...products.map((p) => p.price), 2500);
  }, []);

  const filtered = useMemo(() => {
    return filterProducts(products, filters);
  }, [filters]);

  const sortedAndFiltered = useMemo(() => {
    return sortProducts(filtered, sortBy);
  }, [filtered, sortBy]);

  const handleResetFilters = () => {
    setFilters({
      search: '',
      category: 'all',
      brands: [],
      minPrice: 0,
      maxPrice: Infinity,
      minRating: 0,
      availability: 'all',
      selectedTags: []
    });
    setSearchParams({});
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const params = {};
    if (newFilters.category && newFilters.category !== 'all') {
      params.category = newFilters.category;
    }
    if (newFilters.search) {
      params.search = newFilters.search;
    }
    setSearchParams(params);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.25rem 3rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
          Explore Products
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Compare specs, ratings, and price trends across {products.length} electronics and devices.
        </p>
      </div>

      <div className="catalog-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm mobile-nav-toggle"
            onClick={() => setMobileFilterOpen((prev) => !prev)}
            style={{ display: 'inline-flex' }}
          >
            <SlidersHorizontal size={15} />
            Filters {filters.brands.length > 0 || filters.category !== 'all' || filters.minRating > 0 ? `(${filters.brands.length + (filters.category !== 'all' ? 1 : 0) + (filters.minRating > 0 ? 1 : 0)})` : ''}
          </button>
          <span className="catalog-count">
            Showing <strong>{sortedAndFiltered.length}</strong> of {products.length} items
          </span>
        </div>

        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>

      <div className="catalog-layout">
        <div style={{ display: mobileFilterOpen ? 'block' : undefined }} className={mobileFilterOpen ? 'mobile-filter-visible' : undefined}>
          <FilterPanel
            filters={filters}
            onChange={handleFilterChange}
            onReset={handleResetFilters}
            availableCategories={categories}
            availableBrands={availableBrands}
            allTags={allTags}
            maxCatalogPrice={maxCatalogPrice}
          />
        </div>

        <main>
          <ProductGrid
            products={sortedAndFiltered}
            onResetFilters={handleResetFilters}
          />
        </main>
      </div>

      <RecentlyViewed />
    </div>
  );
}
