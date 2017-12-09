<template>
  <div class="data">

            <table>
              <thead>
                <tr>
                  <th><i class="iconfont icon-github-o"></i></th>
                  <th><i class="iconfont icon-description"></i></th>
                  <th><i class="iconfont icon-star"></i></th>
                  <th><i class="iconfont icon-createtime"></i></th>
                  <th><i class="iconfont icon-avator-o"></i></th>
                </tr>
              </thead>

              <tbody>
                     <tr v-for="(item,key) in top30" key="key" class="item_box">
                      <td class="name"><a :href="item['html_url']">{{item['name']}}</a></td>
                      <td class="description" :title="item['description']">{{descriptionToShort(item['description'])}}</td>
                       <td class="stars">{{numberComma(item['stargazers_count'])}}</td>
                      <td class="createtime">{{dateToShort(item['created_at'])}}</td>

                      <td class="owner"><a :href="item['owner_url']"><img :src="item['owner_avatar_url']" :title="item['owner']"></a></td>
                    </tr>
              </tbody>
            </table>


  </div>
</template>
<script>
import '@/assets/loading.css'
import dateFormat from '../utils/index'
  export default {
    name: 'theMostPopularRepo',
    props: {
      top30: {
        type: Array,
        default: () => {
          return []
        },
        require: true

    }

    },
      data(){
      return{
        rending:true
      }
    },
    methods:{
      descriptionToShort(sentences){
            return sentences&&sentences.substring(0, 30)+'...';
      },
      imageLazyLoad(){

      },
      dateToShort(date){
            return dateFormat(new Date(date),'Y-m-d')
      },
      numberComma(number){
          return (number || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      }
    }
  }
</script>
<style lang="scss" scope="scoped">
      .data{
           position: absolute;
           left:25%;
           .item_box{

            img{
             height:50px;
             border-radius:60%;
            }
        }
    }

</style>