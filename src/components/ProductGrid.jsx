import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({
  products,
  selectedMetric,
  selectedProductId,
  onSelectProduct,
}) => {
  return (
    <div className="panel product-grid-panel">
      <div className="grid-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            selectedMetric={selectedMetric}
            isSelected={selectedProductId === product.id}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </div>
  );
};