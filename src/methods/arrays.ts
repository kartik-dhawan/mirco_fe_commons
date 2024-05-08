export const getUniqueBykey = <T>(items: T[], key: keyof T): T[] => {
  const unique = new Map();
  items.forEach((item) => {
    if (!unique.has(item[key])) {
      unique.set(item[key], item);
    }
  });
  return Array.from(unique.values());
};

export const sumArray = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export const mapArray = <T, U>(items: T[], mapFn: (item: T) => U): U[] => {
  return items.map(mapFn);
};
