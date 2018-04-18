import {RECEIVE_INDEX,
        RECEIVE_CART,
        RECEIVE_BRAND,
        RECEIVE_CLASSIFY
} from './mutation-type';

export default {
   [RECEIVE_INDEX](state,{index}){
      state.index=index
   },
   [RECEIVE_CART](state,{cart}){
     state.cart=cart
  },
  [RECEIVE_BRAND](state,{brand}){
     state.brand=brand
  },
  [RECEIVE_CLASSIFY](state,{classify}){
    state.classify=classify
  }
}
