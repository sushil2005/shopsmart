import { createContext, useContext, useState, useEffect } from 'react';
import {
  getStoredCart,
  setStoredCart,
  getStoredWishlist,
  setStoredWishlist,
  getStoredRecentlyViewed,
  setStoredRecentlyViewed,
  getStoredTheme,
  setStoredTheme
} from '../utils/storage.js';
import { products } from '../data/products.js';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme);
  const [cart, setCart] = useState(getStoredCart);
  const [wishlist, setWishlist] = useState(getStoredWishlist);
  const [compareList, setCompareList] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState(getStoredRecentlyViewed);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setStoredTheme(theme);
  }, [theme]);

  useEffect(() => {
    setStoredCart(cart);
  }, [cart]);

  useEffect(() => {
    setStoredWishlist(wishlist);
  }, [wishlist]);

  useEffect(() => {
    setStoredRecentlyViewed(recentlyViewed);
  }, [recentlyViewed]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product, quantity = 1, color = null, storage = null) => {
    const chosenColor = color || (product.colors && product.colors[0]?.name) || '';
    const chosenStorage = storage || (product.storage && product.storage[0]) || '';
    const itemKey = `${product.id}-${chosenColor}-${chosenStorage}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.key === itemKey);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [
        ...prev,
        {
          key: itemKey,
          id: product.id,
          product,
          quantity,
          color: chosenColor,
          storage: chosenStorage
        }
      ];
    });
    showToast(`Added ${product.name} to cart`, 'success');
  };

  const updateCartQuantity = (itemKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.key === itemKey ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (itemKey) => {
    setCart((prev) => prev.filter((item) => item.key !== itemKey));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
    showToast('Cart cleared', 'info');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleWishlist = (product) => {
    const isPresent = wishlist.some((id) => id === product.id);
    if (isPresent) {
      setWishlist((prev) => prev.filter((id) => id !== product.id));
      showToast(`Removed ${product.name} from wishlist`, 'info');
    } else {
      setWishlist((prev) => [...prev, product.id]);
      showToast(`Saved ${product.name} to wishlist`, 'success');
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    showToast('Item removed from wishlist', 'info');
  };

  const addToCompare = (product) => {
    if (compareList.some((p) => p.id === product.id)) {
      showToast(`${product.name} is already in comparison`, 'warning');
      return false;
    }
    if (compareList.length >= 3) {
      showToast('You can compare up to 3 products at a time', 'warning');
      return false;
    }
    setCompareList((prev) => [...prev, product]);
    showToast(`Added ${product.name} to comparison`, 'success');
    return true;
  };

  const removeFromCompare = (productId) => {
    setCompareList((prev) => prev.filter((p) => p.id !== productId));
    showToast('Removed from comparison', 'info');
  };

  const isInCompare = (productId) => {
    return compareList.some((p) => p.id === productId);
  };

  const clearCompare = () => {
    setCompareList([]);
    showToast('Comparison cleared', 'info');
  };

  const addRecentlyViewed = (product) => {
    if (!product || !product.id) return;
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => (item.id || item) !== product.id);
      return [{ id: product.id, name: product.name, price: product.price, image: product.image, brand: product.brand, category: product.category, rating: product.rating }, ...filtered].slice(0, 8);
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
    showToast('Recently viewed history cleared', 'info');
  };

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        cart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
        wishlist,
        wishlistProducts,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
        recentlyViewed,
        addRecentlyViewed,
        clearRecentlyViewed,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
