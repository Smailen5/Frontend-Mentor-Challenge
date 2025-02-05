export interface ProductData {
  company: string;
  title: string;
  description: string;
  price: {
    original: number;
    current: number;
    discount?: number;
  };
}
