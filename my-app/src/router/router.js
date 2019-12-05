import Vue from 'vue'
import VueRouter from 'vue-router'

import Goods from '../components/goods/goods.vue'
import Seller from '../components/seller/seller.vue'
import Ratings from '../components/ratings/ratings.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {path:'/',redirect:'/goods'},
        {path:'/seller',component:Seller},
        {path:'/goods',component:Goods},
        {path:'/ratings',component:Ratings},
    ],
    linkExactActiveClass:'active',
    linkActiveClass:'active'
})