<template>
   <div class="user-info">
     <div class="homepage">
       <router-link :to="{name:'root'}"><span>主页</span></router-link>
       <div class="reader">
         <img :src="userinfo.avatar_url" alt="">
         <span>{{userinfo.loginname}}</span>
         <p>{{userinfo.score}}积分</p>
         <p>注册时间：{{userinfo.create_at | formatDate}}</p>
       </div>
    <div class="replies">
      <p>最近回复的话题</p>
      <ul>
        <li v-for="item in userinfo.recent_replies">
          <router-link :to="{
          name:'post_content',
          params:{
            id:item.id
          }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="topics">
      <p>最近创建的话题</p>
      <ul>
        <li v-for="item in userinfo.recent_topics">
          <router-link :to="{
          name:'post_content',
          params:{
            id:item.id
          }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userinfo:{}
    }
  },
  methods:{
    getData(){
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      .then(res=>{
        this.userinfo = res.data.data
      })
      .catch(function(err){
        console.log(err)
      })
    }
  },
  beforeMount(){
    this.getData()
  }
}
</script>

<style scoped>
 
</style>