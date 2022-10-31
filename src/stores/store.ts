import { defineStore } from 'pinia'
import { Product, Cart } from '../types/interfaces'
import axios from 'axios'

interface State {
  cart: Cart[]
  products: Product[]
  isLoading: boolean
  currentProduct: Product
  filteredProducts: Product[]
}

const cart = window.localStorage.getItem('cart');

export const useStore = defineStore("store", {
  state: () => ({
    products: [],
    filteredProducts: [],
    cart: cart ? JSON.parse(cart) : [],
    isLoading: true,
    currentProduct: null,
  } as State),
  getters: {
    getTotalPrice(state) {
      return state.cart.reduce((a, b) => {
        return Math.round(a += b.price * b.rating.count)
      }, 0)
    }
  },
  actions: {
    async getProducts() {
      axios
        .get('https://fakestoreapi.com/products/')
        .then((res) => {
          this.products = res.data
          this.filteredProducts = [...this.products]
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.isLoading = false
        })
    },
    addProduct(currentProduct: Cart) {
      const found = this.cart.find(item => item.id === currentProduct.id);

      if (!found) {
        this.cart.push({...currentProduct, rating: {count: 1, rate: currentProduct.rating.rate}})
      } else {
        found.rating.count++
      }
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    deleteEvent(item: number) {
      this.cart.splice(item, 1);
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
})
