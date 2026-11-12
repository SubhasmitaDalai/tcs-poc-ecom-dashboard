/**
 * Returns color status based on the handwritten rule thresholds:
 * Green:  0.00% - 33.33%
 * Yellow: 34.00% - 66.66%
 * Red:    67.00% - 100.00%
 */
export const getColorByPercentage = (percentage) => {
  if (percentage <= 33.33) {
    return 'green';
  } else if (percentage >= 34 && percentage <= 66.66) {
    return 'yellow';
  } else {
    return 'red';
  }
};