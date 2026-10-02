const WISHLIST_KEY = 'shopsmart_wishlist';
const CART_KEY = 'shopsmart_cart';
const RECENT_VIEWED_KEY = 'shopsmart_recently_viewed';
const THEME_KEY = 'shopsmart_theme';
const RECENT_SEARCHES_KEY = 'shopsmart_recent_searches';

export function getStoredWishlist() {
  try {
    const data = localStorage.getItem(WISHLIST_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function setStoredWishlist(items) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
  } catch (e) {}
}

export function getStoredCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function setStoredCart(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch (e) {}
}

export function getStoredRecentlyViewed() {
  try {
    const data = localStorage.getItem(RECENT_VIEWED_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function setStoredRecentlyViewed(items) {
  try {
    localStorage.setItem(RECENT_VIEWED_KEY, JSON.stringify(items.slice(0, 10)));
  } catch (e) {}
}

export function getStoredTheme() {
  try {
    const theme = localStorage.getItem(THEME_KEY);
    return theme === 'light' ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
}

export function setStoredTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}
}

export function getStoredRecentSearches() {
  try {
    const data = localStorage.getItem(RECENT_SEARCHES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function saveRecentSearch(term) {
  if (!term || typeof term !== 'string') return;
  const clean = term.trim();
  if (!clean) return;
  try {
    const existing = getStoredRecentSearches();
    const updated = [clean, ...existing.filter((item) => item.toLowerCase() !== clean.toLowerCase())].slice(0, 8);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  } catch (e) {}
}

export function clearRecentSearches() {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch (e) {}
}
