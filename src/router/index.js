import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import Pagination from '../components/Pagination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        show:PostList,
        Pagination:Pagination
      }
    },
    {
      name:'post_content',
      path:'/topic/:id',
      components:{
        show:Article,
        SlideBar:SlideBar
      }
    },
    {
      name:'UserInfo',
      path:'/userinfo/:name',
      components:{
        show:UserInfo
      }
    }
  ],

})
