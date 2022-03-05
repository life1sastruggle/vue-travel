<template>
  <div class='container'>
    <div class='header'>
      <el-menu
        :unique-opened='true'
        class='menu'
        mode='horizontal'
        text-color='#000'
        menu-trigger='hover'
        active-text-color='#008000'
        :router='true'
        :default-active="this.$route.path"
      >
        <div class="item">
        <el-menu-item :index ="item[0]" background-color="#FFFFFF"	>Route</el-menu-item>
        <el-menu-item :index="item[1]">Spot</el-menu-item>
        <el-menu-item :index="item[2]">Comment</el-menu-item>
        </div>
      </el-menu>
    </div>
    <div class='main'>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <!--    <div class='footer'>-->
    <!--      <a class="toinfo" href="/">AboutUs</a>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: ['/route', '/spot', '/comment', '/weather']
    }
  },
  methods: {}
}

</script>
<style lang="scss" scoped>


.container {
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 0;
  padding: 0;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 80px;
    z-index: 100;
    flex-direction: row;

    .menu{
      margin: 0 auto;
      justify-content: center;
      flex-direction: row;

      .item{
        display: flex;
        width: 400px;
      }
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    margin: 61px 5px 0 5px;
  }

  //.footer {
  //  text-align: left;
  //  height: 82px;
  //  width: 100%;
  //  line-height: 42px;
  //  border-top: none;
  //  margin-top: 0;
  //  background: #111111;
  //}
}

/deep/ .el-tabs__nav {
  margin-left: 20px;
}
</style>
