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
        <img src='../assets/image/logo.png' style="height: 60px;width:100px; padding: 0 20px">
        <el-menu-item :index="item[0]" class="item">Routes</el-menu-item>
        <el-menu-item :index="item[1]" class="item">Attractions</el-menu-item>
      </el-menu>
    </div>
    <div class='main'>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: ['/route', '/spot',]
    }
  },
  methods: {}
}

</script>
<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;

  .header {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    flex-direction: row;

    .menu {
      display: flex;
      margin: 0 auto;
      justify-content: center;
      flex-direction: row;
      width: 100%;

      .item {
        display: flex;
        width: 200px;
        justify-content: center;
        font-weight: bold;
      }
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    margin: 61px 5px 0 5px;
  }

}

</style>
