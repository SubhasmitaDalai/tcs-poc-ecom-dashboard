import React from 'react';
import { getColorByPercentage } from '../utils';

export const ProductCard = ({
  product,
  selectedMetric,
  isSelected,
  onSelect,
}) => {
  // Get percentage value based on active dropdown selection
  const currentValue = product[selectedMetric];
  const colorStatus = getColorByPercentage(currentValue);

  return (
    <div
      className={`product-card status-${colorStatus} ${isSelected ? 'active-card' : ''}`}
      onClick={() => onSelect(product)}
    >
      <div className="card-number">{product.id}</div>
      <div className="card-info">
        <span>{currentValue}%</span>
      </div>
    </div>
  );
};