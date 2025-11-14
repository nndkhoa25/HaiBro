export interface Drink {
  id: number;
  name: string;
  category: string;
  price_m: number | null;
  price_l: number | null;
  image: string;
  ishaveM: boolean | null;
  ishaveL: boolean | null;
  description: string | null;
}
