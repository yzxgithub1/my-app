<template>
  <div id="app">
    <Vheader />
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import Vheader from "./components/header/headers";
export default {
  components: {
    Vheader
  }
};
</script>



<style lang="scss">
@import "./common/mixin.scss";
.tab {
  display: flex;
  @include border-1px(#ccc);
  .tab-item {
    flex: 1;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.14rem;
    text-align: center;
    color: rgb(77, 85, 93);
    & > a {
      display: block;
      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
