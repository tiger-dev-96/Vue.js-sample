export interface Event {
  id: number;
  title: string;
  start: string | number;
  end: string;
  description: string;
  image: string;
  price?: number;
}
