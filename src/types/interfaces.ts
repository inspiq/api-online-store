export interface Product {
  id: number
  image: string
  title: string
  price: number
  description: string
  rating: Rating
  category: string
  currentProduct: number
}

export interface Cart {
  id: number
  image: string
  title: string
  description: string
  rating: Rating
  price: number
}

export interface Rating {
  rate: number
  count: number
} 



