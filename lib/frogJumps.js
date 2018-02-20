module.exports = (start, end, jumpDistance) => {
  return Math.ceil((end - start) / jumpDistance);
};
