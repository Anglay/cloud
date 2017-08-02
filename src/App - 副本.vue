<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
        <router-view></router-view> -->
    <div style="z-index:99">
      <button @click="onShow">onShow</button>
      <button @click="onHide">onHide</button>
    </div>
    <drawer :show="drawerShow" pos="left" tran="overlay" @on-hide="onHide" @on-show="onShow">
      <div class="layout" slot="drawer">
        layout
      </div>
    </drawer>
  </div>
</template>

<script>
import Drawer from '@/components/drawer.vue'
export default {
  data() {
    return {
      drawerShow: false
    }
  },
  methods: {
    onHide() {
      this.drawerShow = false;
    },
    onShow() {
      this.drawerShow = true;
    }
  },
  components: { Drawer }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  height: 100%;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.layout {
  width: 300px;
}

button,
input[type="button"],
a.button {
  color: #fff;
  background-color: #3779d0;
  border: 0;
  font-size: 14px;
  border-radius: 4px;
  padding: 0px 8px;
  height: 40px;
  min-width: 40px;
  line-height: 40px;
  overflow: hidden;
  display: inline-block;
  outline: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  -webkit-transition: all;
  -moz-transition: all;
  transition: all;
  -webkit-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-transition-duration: .2s;
  -moz-transition-duration: .2s;
  transition-duration: .2s;
}

button:active {
  color: #fff;
  background-color: #377000;
}
</style>
