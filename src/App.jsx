import React, { useState } from 'react';
import { ProductDescription } from './components/ProductDescription';
import { ProductGrid } from './components/ProductGrid';
import { MatrixPanel } from './components/MatrixPanel';
import './App.css';

// Initial Mock Data (matches values from the handwriting reference)
const INITIAL_PRODUCTS = [
  { id: 1, name: 'Product 1', saleImpacted: 30, avgSale: 50, notSold: 70 }, // 30% -> Green
  { id: 2, name: 'Product 2', saleImpacted: 15, avgSale: 40, notSold: 80 },
  { id: 3, name: 'Product 3', saleImpacted: 55, avgSale: 65, notSold: 20 },
  { id: 4, name: 'Product 4', saleImpacted: 85, avgSale: 25, notSold: 45 },
];

export const App = () => {
  const [products] = useState(INITIAL_PRODUCTS);
  const [selectedMetric, setSelectedMetric] = useState('saleImpacted');
  const [selectedProductId, setSelectedProductId] = useState(1);

  const selectedProduct = products.find((p) => p.id === selectedProductId) || null;

  return (
    <div className="dashboard-container">
      {/* Part 1: Product Description Panel */}
      <ProductDescription selectedProduct={selectedProduct} />

      {/* Part 2: Middle 4-Card Grid Panel */}
      <ProductGrid
        products={products}
        selectedMetric={selectedMetric}
        selectedProductId={selectedProductId}
        onSelectProduct={(prod) => setSelectedProductId(prod.id)}
      />

      {/* Part 3: Matrix Panel with Dropdown */}
      <MatrixPanel
        selectedMetric={selectedMetric}
        onMetricChange={setSelectedMetric}
      />
    </div>
  );
};

export default App;