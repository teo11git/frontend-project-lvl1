const intervalForGenerator = {
  min: 0,
  max: 100,
};

export default function(config = intervalForGenerator) => {
  let { min, max } = config;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
