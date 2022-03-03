<template>
  <div class='content'>
    <div class='introduction-list'>
      <el-divider content-position="left">INTRODUCE</el-divider>
      <div class=introduction-box>
        A beautiful place.
      </div>
    </div>
    <div class='comment-list'>
      <el-divider content-position="left">COMMENT</el-divider>
      <div class="comment-box"
           v-infinite-scroll="load"
           style="overflow:auto"
           infinite-scroll-disabled="disabled"
           infinite-scroll-immediate="false"
      >
        <div v-for="(item,i) in comment" class="inner-comment-box" :key=i>
            <p>{{ item.body }}</p>
            <el-divider/>
        </div>
        <p v-if="noMore">No more</p>
      </div>
    </div>
  </div>
</template>
<script>
import {getComment} from '../../common/api'
import {mapState} from 'vuex'
import util from '../../common/util'
import {goPageTop} from '../../common/base'
import el from 'element-ui/src/locale/lang/el'

export default {
  name: 'index',
  data () {
    return {
      comment: [],
      param: {
        page: 1
      },
      total: 0,
      totalPage: 0,

    }
  },
  mounted () {
    let that = this
    util.$on('getComment', function () {
      that.param.page = 1
      that.totalPage = 0
      that.comment = []
      that.test()
      that.getComment()

    })
  },


  computed: {
    ...mapState(['selectedSpot']),
    noMore () {
      if (this.total % 5 === 0) {
        this.totalPage = Math.floor(this.total / 5)
      } else {
        this.totalPage = Math.floor(this.total / 5 + 1)
      }
      console.log('totalPage', this.totalPage)
      console.log('currentPage', this.param.page)
      console.log('flag', this.param.page >= this.totalPage)
      console.log('comment', this.comment)
      return this.param.page >= this.totalPage
    },
    disabled () {
      return this.noMore
    }
  },
  methods: {
    getComment () {

      let that = this
      getComment(this.param, this.selectedSpot.id, res => {
        this.total = res.total
        this.comment = this.comment.concat(res.data)

      })
      console.log()
    },
    load () {
      this.param.page += 1
      this.getComment()
    },
  }
}

</script>

<style lang="scss" scoped>
.content {
  height: 400px;
  width: 300px;
  border: solid 1px #c8f3b3;

  .introduction-list {
    height: 50px;
  }

  .comment-list {
    height: 300px;

    .comment-box {
      height: 250px;
      margin: 10px;

      .inner-comment-box {
        width: 250px;
        padding-left: 10px;
      }

    }
  }

}

</style>
