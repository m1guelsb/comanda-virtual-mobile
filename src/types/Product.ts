export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imagePath: string;
  ingredients: {
    icon: string;
    name: string;
  }[];
}
