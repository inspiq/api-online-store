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
      return state.cart.reduce((totalPrice, product) => Math.round(totalPrice += product.price * product.rating.count), 0)
    },
    getQuantityProducts(state) {
      return state.cart.reduce((totalQuantity, product) => totalQuantity += product.rating.count, 0)
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
    deleteEvent(id: number) {
      this.cart = this.cart.filter((e) => e.id !== id )
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
})

