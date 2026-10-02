import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';

import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Compare from './pages/Compare.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart.jsx';
import AIAssistant from './pages/AIAssistant.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/assistant" element={<AIAssistant />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </Router>
    </AppProvider>
  );
}
