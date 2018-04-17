import {requestIndex,
         requestCart
        } from '../api';
import {RECEIVE_INDEX,
        RECEIVE_CART
       } from './mutation-type'

export default {
      async reqindex({commit}){
        const result=await requestIndex();
        if(result.code===0){
          let index=result.data;
          commit(RECEIVE_INDEX,{index})
        }
      },
     async reqcart({commit}){
        const result=await requestCart();
        if(result.code===0){
          let cart=result.data;
          commit(RECEIVE_CART,{cart})
        }
     }
}
