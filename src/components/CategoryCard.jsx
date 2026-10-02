import { Link } from 'react-router-dom';
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Mouse,
  Speaker,
  Grid
} from 'lucide-react';

const iconMap = {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Mouse,
  Speaker,
  Grid
};

export default function CategoryCard({ category, productCount }) {
  const IconComponent = iconMap[category.icon] || Grid;
  const linkTo = category.id === 'all' ? '/products' : `/products?category=${category.name}`;

  return (
    <Link to={linkTo} className="category-card">
      <div className="category-icon-box">
        <IconComponent size={22} />
      </div>
      <div>
        <h4 className="category-name">{category.name}</h4>
        <p className="category-desc">
          {category.description || `${productCount || 0} Products available`}
        </p>
      </div>
    </Link>
  );
}
