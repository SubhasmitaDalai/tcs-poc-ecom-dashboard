import React from 'react';

export const ProductDescription = ({ selectedProduct }) => {
  return (
    <div className="panel product-description-panel">
      <h2>P.D (Product Description)</h2>
      {selectedProduct ? (
        <div className="pd-details">
          <h3>{selectedProduct.name}</h3>
          <p><strong>Sale Impacted:</strong> {selectedProduct.saleImpacted}%</p>
          <p><strong>Avg. Sale:</strong> {selectedProduct.avgSale}%</p>
          <p><strong>Not Sold:</strong> {selectedProduct.notSold}%</p>
        </div>
      ) : (
        <p className="placeholder-text">Select a product card to view details.</p>
      )}
    </div>
  );
};