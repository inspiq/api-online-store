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
const qty = window.localStorage.getItem('qty');
const totalPrice = window.localStorage.getItem('totalPrice');

export const useStore = defineStore("store", {
  state: () => ({
    products: [],
    filteredProducts: [],
    cart: cart ? JSON.parse(cart) : [],
    isLoading: true,
    currentProduct: null,
    totalPrice: totalPrice ? parseInt(totalPrice) : 0,
    qty: qty ? parseInt(qty) : 1,
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
    },
    addProduct(currentProduct: Cart) {
      const found = this.cart.find(item => item.id === currentProduct.id);

      if (found) {
        this.qty++
        this.totalPrice = this.totalPrice + currentProduct.price
      } else {
        this.cart.push(currentProduct)
        this.totalPrice = this.totalPrice + currentProduct.price * this.qty
      }

      window.localStorage.setItem('cart', JSON.stringify(this.cart));
      window.localStorage.setItem('totalPrice', "" + this.totalPrice);
    },
    increment(item: { price: number }) {
      if (this.currentProduct.rating.count >= this.qty) {
        this.qty++
        this.totalPrice = this.totalPrice + item.price
        window.localStorage.setItem('totalPrice', "" + this.totalPrice);
        window.localStorage.setItem('qty', "" + this.qty);
      }
    },
    decrement(item: { price: number }) {
      if (this.qty > 1) {
        this.qty--
        this.totalPrice = this.totalPrice - item.price
        window.localStorage.setItem('totalPrice', "" + this.totalPrice);
        window.localStorage.setItem('qty', "" + this.qty);
      }
    },
    deleteEvent(item: number | any) {
      this.cart.splice(item, 1);
      this.totalPrice = this.totalPrice - item.price * this.qty
      window.localStorage.setItem('cart', JSON.stringify(this.cart));
      window.localStorage.setItem('totalPrice', "" + this.totalPrice);
    }
  }
})