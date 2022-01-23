<template>
  <div class="routes-main">
<!--    <div class="infinite-list-wrapper" style="overflow:auto">-->
<!--      <ul-->
<!--        class="list"-->
<!--        v-infinite-scroll="load"-->
<!--        infinite-scroll-disabled="disabled">-->
<!--        <li v-bind: count, v-for="i in count" class="list-item">{{ i }}-->
<!--        </li>-->
<!--        <li></li>-->
<!--      </ul>-->
      <routes-component></routes-component>
<!--      <p v-if="loading">加载中...</p>-->
<!--      <p v-if="noMore">没有更多了</p>-->
<!--    </div>-->
  </div>
</template>

<script>
import RoutesComponent from '../components/routes/index'

export default {
  name: 'RoutesPage',
  components: {
    RoutesComponent
  },
  data () {
    return {
      count: 10,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.routes-main {
  height: 1000px;
}
</style>
