export interface Evento {
  id?: number,
  date: string,
  hour: string,
  name: string,
  place: string,
  price: number,
  link_external: string,
  link_shop: string,
  created_at?: string,
  updated_at?: string
}