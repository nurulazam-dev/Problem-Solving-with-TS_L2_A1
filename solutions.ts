/* 1. formatValue function problem */
const formatValue = (
  input: string | number | boolean
): string | number | boolean => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  }
  return input;
};

/* 2. getLength function problem */
const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return value;
  }
};
console.log(getLength("This is a test"));
console.log(getLength([10, 20, 30, 40]));

/* 3. problem */
/* 4. filterByRating function problem */
/* 5. filterActiveUsers function problem */
/* 6. printBookDetails function problem */
/* 7. getUniqueValues function problem */
/* 8. calculateTotalPrice function problem */
