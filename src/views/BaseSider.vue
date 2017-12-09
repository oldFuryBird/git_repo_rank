<template>
  <div>

    <SiderBar :rank="gitrank" @selectLanguage="language"></SiderBar>
<!-- main content -->
<!-- loading -->
<div class="loading-box" v-show="loadingItem"></div>
<TheMostPopularRepo :top30="top30" v-show="!loadingItem"></TheMostPopularRepo>
<!-- <p class="navtime"><span><i class="iconfont icon-github-o"></i></span>The latest data updated from cache {{updateTime}}</p> -->
  </div>
</template>
<script>
import api from '../api/index'
import SiderBar from '../components/BaseSideBar.vue'
import TheMostPopularRepo from '../components/BaseMainContent.vue'
export default {
  data() {
    return {
      gitrank: {},
      lang: 'php',
      top30:[],
      updateTime:'',
      loadingItem:true
    }
  },
  mounted () {
    api.getData('total').then(response => {this.gitrank = this.dataFormat(response)},reject => {
      console.log(reject)

    })

    api.getData(this.lang).then(response =>{
      this.top30 = response
      this.loadingItem=false
    })
  },
  watch:{
    lang(val,oldVal){
        console.log('new :%s,old:%s', val,oldVal)
         this.loadingItem=true
        api.getData(this.lang).then(response =>{
          this.top30 = response
          this.loadingItem=false
        })
    }
  },
  methods:{
    dataFormat(data){
      var result = {}
      for (let key in data) {
        if (key === 'time') {
          this.updateTime = this.timeToString(data[key])
        }else{
          result[key] = this.numberFormat(data[key])
        }
      }
        return result
    },
    numberFormat (number) {
      return (number || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    },
    timeToString(time){
      return (new Date(time*1000)).toLocaleString()
      /**
       * new Date   Date return different result
       */
    },
    language(lang){
        this.lang=lang
        console.log(lang)
    }
  },
   components:{ SiderBar ,TheMostPopularRepo}

}
</script>
<style lang='scss' scope='scoped'>
  .navtime{
      background: #eee;
      // position: fixed;

  }
  .loading-box{
    margin: auto;

  }
</style>
