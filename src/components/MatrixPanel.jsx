import React from 'react';

export const MatrixPanel = ({ selectedMetric, onMetricChange }) => {
  return (
    <div className="panel matrix-panel">
      <h2>Matrix</h2>
      <div className="dropdown-container">
        <label htmlFor="matrix-select">Select Metric:</label>
        <select
          id="matrix-select"
          value={selectedMetric}
          onChange={(e) => onMetricChange(e.target.value)}
        >
          <option value="saleImpacted">Sale Impacted</option>
          <option value="avgSale">Avg. Sale</option>
          <option value="notSold">Not Sold</option>
        </select>
      </div>

      <div className="color-legend">
        <h4>Threshold Legend</h4>
        <div className="legend-item green">
          <span className="box"></span> Green (Low): 0 - 33.33%
        </div>
        <div className="legend-item yellow">
          <span className="box"></span> Yellow (Mid): 34 - 66.66%
        </div>
        <div className="legend-item red">
          <span className="box"></span> Red (High): 67 - 100%
        </div>
      </div>
    </div>
  );
};