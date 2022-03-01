<template>
  <div class='comment'>
    <div class=comment-box>
      为了无法计算的价值
    </div>
    <el-divider content-position="right">网友1</el-divider>

    <div class=comment-box>
      This is a comment.This is a comment.This is a comment.This is a comment.This is a comment.
    </div>
    <el-divider content-position="right">Bob</el-divider>
    <div class=comment-box>
      West Lake
    </div>
    <el-divider content-position="right">Bobby</el-divider>

  </div>
</template>
<script>
export default {
  name: 'index',
  methods: {}
}

</script>

<style scoped>
.comment {
  height: 410px;
  width: 300px;
  background: #E0B0C4FF;
  border: solid 1px #c8f3b3;
}

.comment-box {
  width: 300px;
  margin: 10px
}
</style>
