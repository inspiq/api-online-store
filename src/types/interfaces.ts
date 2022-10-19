export interface Product {
  id: number
  image: string
  title: string
  price: number
  description: string
  qty: number
  rating: Rating
  category: string
}

export interface Rating {
  rate: number
}



