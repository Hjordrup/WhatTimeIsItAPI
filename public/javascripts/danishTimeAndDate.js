module.exports.getTime = () => {
  return new Date().toLocaleTimeString();
};

module.exports.getDate = () => {
  return new Date().toISOString().slice(0, 10);
};
