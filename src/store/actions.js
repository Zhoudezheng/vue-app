import {requestIndex,
         requestCart,
         requestBrand,
         requestClassify
        } from '../api';
import {RECEIVE_INDEX,
        RECEIVE_CART,
        RECEIVE_BRAND,
        RECEIVE_CLASSIFY
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
     },
    async reqbrand({commit}){
        const result=await requestBrand();
        if(result.code===0){
          let brand=result.data;
          commit(RECEIVE_BRAND,{brand})
        }
    },
    async reqclassify({commit},cb){
      const result=await requestClassify();
      if(result.code===0){
        let classify=result.data;
        commit(RECEIVE_CLASSIFY,{classify});
      }
      cb && cb()
    }
}
