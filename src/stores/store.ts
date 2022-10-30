import { defineStore } from 'pinia'
import { Product, Cart } from '../types/interfaces'
import axios from 'axios'

interface State {
  cart: Cart[]
  products: Product[]
  isLoading: boolean
  totalPrice: number
  currentProduct: Product
  filteredProducts: Product[]
  qty: number
}

const cart = window.localStorage.getItem('cart');
const totalPrice = window.localStorage.getItem('totalPrice');

export const useStore = defineStore("store", {
  state: () => ({
    products: [],
    filteredProducts: [],
    cart: cart ? JSON.parse(cart) : [],
    isLoading: true,
    currentProduct: null,
    totalPrice: totalPrice ? parseInt(totalPrice) : 0,
    qty: 0
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
        .finally(() => {
          this.isLoading = false
        })
    },
    addProduct(currentProduct: Cart) {
      const found = this.cart.find(item => item.id === currentProduct.id);

      if (!found) {
        this.cart.push({...currentProduct, rating: {count: 1, rate: currentProduct.rating.rate}})
        this.totalPrice += currentProduct.price * 1
      } else {
        found.rating.count++
        this.totalPrice += found.price
      }

      window.localStorage.setItem('cart', JSON.stringify(this.cart));
      window.localStorage.setItem('totalPrice', "" + this.totalPrice);
    },
    increment(item: { rating: { count: number }; price: number }) {
      item.rating.count++
      this.totalPrice += item.price
      
      window.localStorage.setItem('totalPrice', "" + this.totalPrice);
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    decrement(item: { rating: { count: number }; price: number }) {
      if (item.rating.count > 1) {
        item.rating.count--
        this.totalPrice -= item.price

        window.localStorage.setItem('totalPrice', "" + this.totalPrice);
        window.localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    },
    deleteEvent(item: { price: number } | any) {
      this.cart.splice(item, 1);
      this.totalPrice -= item.price * item.rating.count
      
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
      window.localStorage.setItem('totalPrice', "" + this.totalPrice);
    }
  }
})