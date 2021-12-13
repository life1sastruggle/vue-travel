<template>
  <div id='home'>
    <div class='header'>
      <div id='u'>
        <a id="toindex" href="/">首页</a>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first"></el-tab-pane>
        <el-tab-pane label="评论" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div v-if='flag=="first"'>
      <main-page/>
    </div>
    <div v-if='flag == "second"'>
      <comment-page/>
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
  border-bottom: 1px solid #000;

  #u {
    z-index: 301;
    position: absolute;
    right: 0;
    top: 0;
    margin: 21px 9px 5px 0;
    padding: 0;
  }

  #toinfo {
    text-align: center;
  }
}

#content {
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#home {
  display: flex;
  justify-content: space-between;

}

</style>
