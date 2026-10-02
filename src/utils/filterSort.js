export function filterProducts(products, filters) {
  if (!products || !Array.isArray(products)) return [];
  const {
    search = '',
    category = 'all',
    brands = [],
    minPrice = 0,
    maxPrice = Infinity,
    minRating = 0,
    availability = 'all',
    selectedTags = []
  } = filters;

  const searchLower = search.trim().toLowerCase();

  return products.filter((product) => {
    if (searchLower) {
      const matchName = product.name.toLowerCase().includes(searchLower);
      const matchBrand = product.brand.toLowerCase().includes(searchLower);
      const matchCategory = product.category.toLowerCase().includes(searchLower);
      const matchTags = Array.isArray(product.tags) && product.tags.some((tag) => tag.toLowerCase().includes(searchLower));
      if (!matchName && !matchBrand && !matchCategory && !matchTags) {
        return false;
      }
    }

    if (category && category !== 'all' && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    if (brands.length > 0 && !brands.includes(product.brand)) {
      return false;
    }

    if (typeof product.price === 'number') {
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }
    }

    if (minRating > 0 && product.rating < minRating) {
      return false;
    }

    if (availability && availability !== 'all' && product.availability !== availability) {
      return false;
    }

    if (selectedTags.length > 0) {
      const hasAllTags = selectedTags.every((t) => product.tags && product.tags.includes(t));
      if (!hasAllTags) {
        return false;
      }
    }

    return true;
  });
}

export function sortProducts(products, sortBy) {
  if (!products || !Array.isArray(products)) return [];
  const list = [...products];

  switch (sortBy) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price);
    case 'rating':
      return list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    case 'popularity':
      return list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    case 'newest':
      return list.sort((a, b) => new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0));
    case 'relevance':
    default:
      return list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }
}
