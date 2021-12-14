<template>
  <div class='home'>
    <div class='header'>
      <div class='u'>
        <a class="toindex" href="/">设置</a>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="评论" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div class='container'>
      <div class='content'>
        <div v-if='flag=="first"'>
          <main-page/>
        </div>
        <div v-if='flag == "second"'>
          <comment-page/>
        </div>
      </div>
      <div class='footer'>
        <a class="toinfo" href="/">AboutUs</a>
      </div>
    </div>
  </div>
</template>

<script>
import MainPage from '@/views/MainPage'
import CommentPage from '@/views/CommentPage'

export default {
  data () {
    return {
      flag: 'first'
    }
  },
  components: {
    MainPage,
    CommentPage
  },
  methods: {
    handleClick (tab) {
      this.flag = tab.name
    }
  }
}

</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  height: 75px;
  background-color: rgb(255, 255, 255);
  color: #000;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  .u {
    z-index: 301;
    position: absolute;
    right: 0;
    top: 0;
    margin: 21px 20px 5px 0;
    padding: 0;
  }

  .toinfo {
    text-align: center;
  }
}

.container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: 90px;
  width: 100vw;
}

.home {
  display: flex;
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

.content {
  display: flex;
  overflow: hidden;
  margin: 0 5vw 0 5vw;
}
/deep/ .el-tabs__nav{
  margin-left: 20px;
}
</style>
