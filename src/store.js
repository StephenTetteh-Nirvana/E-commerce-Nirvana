import { reactive } from 'vue';
import { createStore } from 'vuex';

const CART_STORAGE_KEY = 'cart';

const state = reactive({
  cart: [],
  totalPrice:0
});

const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  },
  TotalPrice(state, total) {
    state.totalPrice = total;
  }
};
const actions={
  loadCartFromLocalStorage({ commit }) {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || []
    commit('setCart', savedCart)
  },
  saveCartToLocalStorage({ state }) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart))
  }
}

const store = createStore({
  state,
  mutations,
  actions
});

export default store;

  
  
  
  
  
  
  