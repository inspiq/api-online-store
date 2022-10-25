export interface Product {
  id: number
  image: string
  title: string
  price: number
  description: string
  rating: Rating
  category: string
  currentProduct: number
  qty: number
}

export interface Cart {
  id: number
  image: string
  title: string
  description: string
  price: number
  qty: number
}

export interface Rating {
  rate: number
  count: number
} 



