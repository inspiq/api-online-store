import { defineStore } from 'pinia'
import { Product } from '../types/interfaces'
import axios from 'axios'

interface State {
  products: Product[]
  isLoading: boolean
  filteredProducts: Product[]
  currentProduct: Product
}

export const useStore = defineStore("store", {
  state: () => ({
    products: [],
    filteredProducts: [],
    isLoading: true,
    currentProduct: null
  } as State),
  actions: {
    async getProducts() {
      axios
        .get('https://fakestoreapi.com/products/')
        .then((res) => {
          this.products = res.data
          this.filteredProducts = [...this.products]
        })
        .catch(err => console.log(err))
        .finally(() => this.isLoading = false)
    }
  }
})