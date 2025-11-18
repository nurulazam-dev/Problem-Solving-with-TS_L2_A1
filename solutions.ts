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


const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return value;
  }
};


class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}';`;
  }
}



type itemsType = Array<{ title: string; rating: number }>;

const filterByRating = (books: itemsType): itemsType => {
  return books.filter((item) => item.rating >= 4);
};



type userType = Array<{
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}>;

const filterActiveUsers = (users: userType): userType => {
  return users.filter((user) => user.isActive === true);
};



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



const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const uniqueArray: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if (uniqueArray.indexOf(arr1[i]) === -1) {
      uniqueArray.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (uniqueArray.indexOf(arr2[i]) === -1) {
      uniqueArray.push(arr2[i]);
    }
  }
  return uniqueArray;
};



interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice =(products:Product[])=>{
const totalProductPrice=products.reduce((price: number, product: Product) => {
    price += product.price * product.quantity;
    return price;
  }, 0);
return totalProductPrice;
}