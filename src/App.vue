<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <!-- show定义为显示的组件 -->
      <router-view name="SlideBar"></router-view>
      <router-view name="show"></router-view>
      <router-view name="Pagination"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'
import Article from './components/Article'
import UserInfo from './components/UserInfo'
import SlideBar from './components/SlideBar'

export default {
  name: 'App',
  components:{
    Header,
    PostList,
    Article,
    UserInfo,
    SlideBar
  }
}
</script>

<style scope>
.main{
    width: 1344px;
    margin: 0 auto;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
