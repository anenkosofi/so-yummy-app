export const getColor = (
  errors,
  values,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (errors) {
    return '#E74A3B';
  }
  return values ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};
