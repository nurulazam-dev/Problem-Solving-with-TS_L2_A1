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

/* 3. problem */
/* 4. filterByRating function problem */
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
type itemsType = Array<{ title: string; rating: number }>;

const filterByRating = (books: itemsType): itemsType => {
  return books.filter((item) => item.rating >= 4);
};
console.log(filterByRating(books));

/* 5. filterActiveUsers function problem */
/* 6. printBookDetails function problem */
/* 7. getUniqueValues function problem */
/* 8. calculateTotalPrice function problem */
