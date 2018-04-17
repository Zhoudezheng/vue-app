import {RECEIVE_INDEX,
        RECEIVE_CART

} from './mutation-type';

export default {
   [RECEIVE_INDEX](state,{index}){
      state.index=index
   },
   [RECEIVE_CART](state,{cart}){
     state.cart=cart
  }
}
