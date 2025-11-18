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
type itemsType = Array<{ title: string; rating: number }>;

const filterByRating = (books: itemsType): itemsType => {
  return books.filter((item) => item.rating >= 4);
};

/* 5. filterActiveUsers function problem */

type userType = Array<{
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}>;

const filterActiveUsers = (users: userType): userType => {
  return users.filter((user) => user.isActive === true);
};

/* 6. printBookDetails function problem */
interface Book{
  title:string;
  author:string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails =(book:Book)=>{
  return console.log(
    `Title: ${book.title}, 
    Author: ${book.author}, 
    Published: ${book.publishedYear}, 
    Available: ${book.isAvailable}`
  )
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
/* 7. getUniqueValues function problem */
/* 8. calculateTotalPrice function problem */
