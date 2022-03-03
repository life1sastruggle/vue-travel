<template>
  <div class='comment'>
    <el-divider content-position="left">INTRODUCE</el-divider>
    <div class=comment-box>
      A beautiful place.
    </div>
    <el-divider content-position="left">COMMENT</el-divider>
    <div class=comment-box>
      <div v-for="(item,i) in comment" class="list_product_box" :key=i>
        <div class=inner-comment-box>
          <p>{{ item.body }}</p>
          <el-divider/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getComment} from '../../common/api'
import {mapState} from 'vuex'
import util from '../../common/util'

export default {
  name: 'index',
  data () {
    return {
      comment: [],
    }
  },
  mounted () {
    let that = this
    util.$on('getComment', function (msg) {
      console.log(msg)
      that.getComment()
    })
  },
  computed: {
    ...mapState(['selectedSpot'])

  },
  methods: {
    getComment () {
      getComment(this.selectedSpot.id, res => {
        this.comment = res.data
      })
    }
  }
}

</script>

<style scoped>
.comment {
  height: 400px;
  width: 300px;
  border: solid 1px #c8f3b3;
}

.comment-box {
  width: 300px;
  margin: 10px;
}

.inner-comment-box {
  width: 250px;
  padding-left: 15px;
}
</style>
