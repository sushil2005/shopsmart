export function formatCurrency(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) return '$0';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

export function calculateDiscount(currentPrice, previousPrice) {
  if (!previousPrice || previousPrice <= currentPrice) return 0;
  return Math.round(((previousPrice - currentPrice) / previousPrice) * 100);
}

export function formatDate(dateString) {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
}

export function getComparisonHighlights(productList) {
  if (!productList || productList.length < 2) return {};

  const highlights = {};
  productList.forEach((p) => {
    highlights[p.id] = [];
  });

  const validPrices = productList.filter((p) => typeof p.price === 'number');
  if (validPrices.length >= 2) {
    const minPrice = Math.min(...validPrices.map((p) => p.price));
    const lowest = validPrices.filter((p) => p.price === minPrice);
    if (lowest.length === 1) {
      highlights[lowest[0].id].push({ label: 'Lower Price', type: 'positive' });
    }
  }

  const validRatings = productList.filter((p) => typeof p.rating === 'number');
  if (validRatings.length >= 2) {
    const maxRating = Math.max(...validRatings.map((p) => p.rating));
    const highest = validRatings.filter((p) => p.rating === maxRating);
    if (highest.length === 1) {
      highlights[highest[0].id].push({ label: 'Higher Rating', type: 'positive' });
    }
  }

  const validReviews = productList.filter((p) => typeof p.reviewCount === 'number');
  if (validReviews.length >= 2) {
    const maxReviews = Math.max(...validReviews.map((p) => p.reviewCount));
    const highestReviews = validReviews.filter((p) => p.reviewCount === maxReviews);
    if (highestReviews.length === 1) {
      highlights[highestReviews[0].id].push({ label: 'Most Reviewed', type: 'neutral' });
    }
  }

  return highlights;
}
