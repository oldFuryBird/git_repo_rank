<template>
  <div class="siderbox">
  <ul class="sider">
    <li v-for="(item,key) in rank" key="key" v-on:click="selectLanguage(key)">

      <span>{{key}}:</span> <i>{{item}}</i>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  name: 'siderBar',
  props: {
    rank: {
      type: Object,
      default: () => {
        return {}
      },
      require: true
    }
  },
  methods: {
    selectLanguage(key){
        this.$emit("selectLanguage",key)
    }
  }

}
</script>
<style scope="scoped" lang="scss">
 .siderbox{
    background: #aaa;
    width:20%;
    left:0;
    float: left;
    display:block;
    position: fixed;
    height:100%;
  .sider{
    li{
      display: block;
      font-size: 18px;
      bold:normal;
      line-height:30px;
      margin:20px;
      cursor: pointer;
      border:1px solid #000;
    }
  }
 }

</style>