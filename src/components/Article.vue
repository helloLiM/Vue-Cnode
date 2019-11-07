<template>
    <div class="article">
        <div>
            <div class="top_header">
                <div class="top_title">{{post.title}}</div>
                <ul>
                    <li><span>·</span>发布于:{{post.create_at | formatDate}}</li>
                    <li><span>·</span>作者：{{post.author && post.author.loginname}}</li>
                    <li><span>·</span>{{post.visit_count}}次浏览</li>
                    <li><span>·</span>来自{{post | tabFormatter}}</li>
                </ul>
                <div v-html="post.content" class="topic_content"></div>
            </div>
            <div class="contents">
                <div class="topbar"><span>{{post.reply_count}}</span> 回复</div>
                <div class="reply" v-for="(reply,index) in post.replies">
                    <router-link :to="{
                      name:'UserInfo',
                      params:{
                        name:reply.author.loginname
                      }
                    }">
                      <img :src="reply.author.avatar_url" alt="">
                    </router-link>
                    <span>{{reply.author && reply.author.loginname}}</span>
                    <!-- <router-link to="{userinfo}"><span>{{reply.author.loginname}}</span></router-link> -->
                    <span class="changcolor">{{index+1}}楼</span>
                    <span class="changcolor">{{post.last_reply_at | formatDate}}</span>
                    <span>{{post | isAuthor}}</span>
                    <div><p v-html="reply.content"></p></div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>


// console.log(res)
export default {
  name: 'Article',
  data () {
    return {
        post:{}  //代表了当前文章的所有内容和属性
    }
  },
  methods:{
      getArticleData(){
          this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
            .then(res=>{
                if(res.data.success == true){
                    this.post = res.data.data
                }
            })
            .catch(function(err){
                console.log(err)
            })
      }
  },
  beforeMount(){
      this.getArticleData()
  }
}
</script>

<style>
    @import url('../assets/markdown-github.css');
    html {
        background-color: #e1e1e1;
    }
    .article{
      width: 995px;
        margin-left: 0;        
    }
    .top_header{
        color: #333;
        font-size: 14px;
        background-color: #fff;
        padding: 10px;
    }
    .top_title{
        font-size: 22px;
        font-weight: 800;
    }
    .top_header ul {
        margin-left: -40px;
    }
    .top_header li {
        display: inline-block;
        font-size: 14px;
        color: #838383;
    }
     .top_header li span{
        font-weight: bold;
        display: inline-block;
        margin: 0 5px;
    }
    .topic_content{
        font-size: 16px;
        line-height: 1.7em;
    }
    .contents {
        background-color: #fff;
        margin-top: 20px;
    }
    .topbar {
        padding: 15px 10px;
        background-color: #ccc;
    }
    .reply {
        padding: 10px 0 20px 10px;
        border-bottom: 1px solid #ccc;
    }
    .reply img {
        width: 30px;
        height: 30px;
    }
    .changcolor {
        color: skyblue;
    }


    /* 以下是copy内容*/
  /* .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .markdown-text img {
    width: 92% !important;
  } */
</style> 
