<template>
  <div class='container'>
    <div class='header'>
      <el-menu
        :unique-opened='true'
        class='el-menu-demo mo'
        mode='horizontal'
        background-color='#026DC8'
        text-color='#fff'
        menu-trigger='hover'
        active-text-color='#ffd04b'
        :router='true'
      >
        <el-menu-item index="routes">路线选择</el-menu-item>
        <el-menu-item index="spots">地点选择</el-menu-item>
        <el-menu-item index="comments">评论</el-menu-item>
        <el-menu-item index="weather">天气</el-menu-item>
      </el-menu>
    </div>
    <div class='main'>
      <router-view/>
    </div>
<!--    <div class='footer'>-->
<!--      <a class="toinfo" href="/">AboutUs</a>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}

</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  height: 50px;
  background-color: rgb(255, 255, 255);
  color: #000;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  flex-direction: row;
}

.main {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  overflow: hidden;
  margin: 80px 5vw 0 5vw;
}

.container {
  flex-direction: column;
  justify-content: space-between;

}

.footer {
  text-align: left;
  height: 82px;
  width: 100%;
  line-height: 42px;
  border-top: none;
  margin-top: 0;
  background: #111111;
}

/deep/ .el-tabs__nav {
  margin-left: 20px;
}
</style>
