export interface Toy {
  id: number;
  brand: string;
  category: string;
  model: string;
  age: number;
  price: number;
  image: string;
  link: string;
}

export interface Filters {
  age: string;
  categories: string[];
}
